import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';
import axios from 'axios';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this._source = axios.CancelToken.source();
    }

    componentDidMount() {
        axios.get(`/api/product/${this.props.productId}`,
            { cancelToken: this._source.token })
            .then(res => this.setState({ data: res.data }))
            .catch(err => {
                if (!axios.isCancel(err))
                    console.log(`Err: ${err}`);
            });
    }

    componentWillUnmount() {
        this._source.cancel();
    }

    render() {
        const products = this.state.data.map(item => {
            return (
                <React.Fragment key={`${item.ProductID}`}>
                    <ListGroupItem>Product Name: {item.ProductName}</ListGroupItem>
                    <ListGroupItem>Price: ${Number(item.UnitPrice).toFixed(2)}</ListGroupItem>
                    <ListGroupItem>In Stock: {item.UnitsInStock}</ListGroupItem>
                </React.Fragment>
            );
        })

        return (
            <React.Fragment>
                {products}
            </React.Fragment>
        );
    }
}

Product.propTypes = {
    productId: PropTypes.number
};

export default Product;
