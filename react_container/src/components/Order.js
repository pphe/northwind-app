import React from 'react';
import Collapsible from 'react-collapsible';
import PropTypes from 'prop-types';
import axios from 'axios';
import './styles/Order.css';
import OrderDetail from './OrderDetail';

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        const { orderId } = this.props.match.params;

        orderId
            ? axios.get(`/api/order/${orderId}`)
                .then(res => this.setState({ data: res.data }))
                .catch(err => console.log(`Err: ${err}`))
            : axios.get('/api/order')
                .then(res => this.setState({ data: res.data }))
                .catch(err => console.log(`Err: ${err}`));
    }

    render() {
        const orders = this.state.data.map(item => {
            return (
                <Collapsible key={item.OrderID} trigger={`Order #${item.OrderID}`}
                    lazyRender={true}>
                    {/* note to self: if only OrderDetail is here && lazyRender is true,
                                      need to click twice on Collapsible in browser to render 
                                        => async issue? empty/no children? */}
                    <h5>Customer ID: {item.CustomerID}</h5>
                    <OrderDetail className="collapsible-content" orderId={item.OrderID} />
                </Collapsible>
            );
        });

        return (
            <React.Fragment>
                {orders}
            </React.Fragment>
        );
    }
}

Order.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            orderId: PropTypes.oneOfType([
                PropTypes.string])
        })
    })
};

export default Order;
