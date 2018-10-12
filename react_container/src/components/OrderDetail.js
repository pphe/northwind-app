import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './OrderDetail.css';
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
                    {/* <Product productId={`${item.ProductID}`} /> */}
                    <li>Quantity: {item.Quantity}</li>
                </p>
            );
        });

        return (
            <div>
                {details}
            </div>
        );
    }
}

OrderDetail.propTypes = {
    orderId: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
}

export default OrderDetail;
