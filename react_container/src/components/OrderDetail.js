import React from 'react';
import PropTypes from 'prop-types';
// import { ListGroup, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';
// import Product from './Product';

class OrderDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        const { orderId } = this.props;
        axios.get(`/api/order-detail/${orderId}`)
            .then(res => this.setState({ data: res.data }))
            .catch(err => console.log(`Err: ${err}`));
    }

    render() {
        const details = this.state.data.map(item => {
            const productId = item.ProductID;
            return (
                // <ListGroup key={productId}>
                //     <ListGroupItem>Product ID: {productId}</ListGroupItem>
                //     {/* <Product productId={productId} /> */}
                //     <ListGroupItem>Qty: {item.Quantity}</ListGroupItem>
                // </ListGroup>
                <p key={productId}>
                    <li>Product ID: {productId}</li>
                    {/* <Product productId={productId} /> */}
                    <li>Qty: {item.Quantity}</li>
                </p>
            );
        });

        return (
            <React.Fragment>
                {details}
            </React.Fragment>
        );
    }
}

OrderDetail.propTypes = {
    orderId: PropTypes.number
};

export default OrderDetail;
