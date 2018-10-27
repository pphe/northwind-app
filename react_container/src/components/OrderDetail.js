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
    }

    componentDidMount() {
        axios.get(`/api/order-detail/${this.props.orderId}`,
            { cancelToken: this._source.token })
            .then(res => this.setState({ data: res.data }))
            .catch(err => {
                if (!axios.isCancel(err))
                    console.log(`Err: ${err}`)
            });
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
