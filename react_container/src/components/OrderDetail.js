import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';
import Product from './Product';

class OrderDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this._source = axios.CancelToken.source();
        this.fetchOrderDetails = this.fetchOrderDetails.bind(this);
        this.errorHandler = this.errorHandler.bind(this);
    }

    errorHandler(err) {
        if (!axios.isCancel(err))
            console.log(`${err}`);
    }

    fetchOrderDetails(orderId) {
        return axios.get(`/api/order-detail/${orderId}`,
            { cancelToken: this._source.token });
    }

    componentDidMount() {
        this.fetchOrderDetails(this.props.orderId)
            .then(res => this.setState({ data: res.data }))
            .catch(this.errorHandler);
    }

    componentWillUnmount() {
        this._source.cancel();
    }

    render() {
        const orderDetails = this.state.data.map(product => {
            const productId = product.ProductID;
            return (
                <ListGroup key={productId}>
                    <ListGroupItem>Product ID: {productId}</ListGroupItem>
                    <Product productId={productId} />
                    <ListGroupItem>Qty: {product.Quantity}</ListGroupItem>
                </ListGroup>
            );
        });

        return (
            <React.Fragment>
                {orderDetails}
            </React.Fragment>
        );
    }
}

OrderDetail.propTypes = {
    orderId: PropTypes.number
};

export default OrderDetail;
