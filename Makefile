DB_IMAGE_NAME=northwind-mongo
DB_PORT=27017
DB_DATA_DIR=./mongo_container/northwind-data/
NODE_IMAGE_NAME=northwind-node
NODE_DIR=./node_container
NODE_PORT=8000

all: mongo node
reset: node_reset mongo_reset
mongo: mongo_reset mongo_start mongo_load_data
node: node_reset node_build node_start

# Mongo targets
mongo_start: 
	docker run --name $(DB_IMAGE_NAME) --network="bridge" -p $(DB_PORT):$(DB_PORT) -d mongo:latest

mongo_stop: 
	docker stop $(DB_IMAGE_NAME)

mongo_reset:
	-docker stop $(DB_IMAGE_NAME)
	-docker rm $(DB_IMAGE_NAME)

mongo_load_data: 
	(cd $(DB_DATA_DIR) && ./mongo-import.sh)

# Node targets
node_build:
	(cd $(NODE_DIR) && docker build -t $(NODE_IMAGE_NAME) .)

node_start:
	docker run --name $(NODE_IMAGE_NAME) --network="bridge" -p $(NODE_PORT):$(NODE_PORT) -d $(NODE_IMAGE_NAME)

node_stop:
	docker stop $(NODE_IMAGE_NAME)

node_reset:
	-docker stop $(NODE_IMAGE_NAME)
	-docker rm $(NODE_IMAGE_NAME)
