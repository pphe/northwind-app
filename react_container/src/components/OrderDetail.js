import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './styles/OrderDetail.css';
import Product from './Product';

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
            return (
                <p key={item.ProductID}>
                    <li>Product ID: {item.ProductID}</li>
                    <Product productId={item.ProductID} />
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
