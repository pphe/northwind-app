DB_IMAGE_NAME=northwind-mongo
DB_PORT=27017
DB_DATA_DIR=./mongo_container/northwind-data/

all: mongo_reset mongo_start mongo_load_data

# Mongo targets
mongo_start: 
	docker run --name $(DB_IMAGE_NAME) -p $(DB_PORT):$(DB_PORT) -d mongo:latest

mongo_stop: 
	docker stop $(DB_IMAGE_NAME)

mongo_reset:
	docker stop $(DB_IMAGE_NAME)
	docker rm $(DB_IMAGE_NAME)

mongo_load_data: 
	(cd $(DB_DATA_DIR) && ./mongo-import.sh)


