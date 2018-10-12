import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Product.css';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        const { productId } = this.props;
        axios.get(`/api/product/${productId}`)
            .then(res => this.setState({ data: res.data }))
            .catch(err => console.log(`Err: ${err}`));
    }

    render() {
        const products = this.state.data.map(item => {
            return (
                <div key={`${item.ProductID}`}>
                    <li>Product Name: ${item.ProductName}</li>
                    <li>Unit Price: ${item.UnitPrice}</li>
                    <li>In Stock: ${item.UnitsInStock}</li>
                </div>
            );
        })

        return (
            <div>
                {products}
            </div>
        );
    }
}

Product.propTypes = {
    productId: PropTypes.number
}

export default Product;
