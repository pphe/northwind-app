import React from 'react';
import Collapsible from 'react-collapsible';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Order.css';
import OrderDetail from './OrderDetail';

// inline style example - set style={styleName} in tag
// const spanStyle = {
//     color: 'red'
// };

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        const { orderId } = this.props.match.params;
        orderId ?
            axios.get(`/api/order/${orderId}`)
                .then(res => this.setState({ data: res.data }))
                .catch(err => console.log(`Err: ${err}`))
            :
            axios.get('/api/order')
                .then(res => this.setState({ data: res.data }))
                .catch(err => console.log(`Err: ${err}`));
    }

    render() {
        const orders = this.state.data.map(item => {
            return (
                <Collapsible key={item.OrderID} trigger={`Order #${item.OrderID}`}>
                    <div className="collapsible-content">
                        <OrderDetail orderId={`${item.OrderID}`} />
                    </div>
                </Collapsible>
            );
        });

        return (
            <div>
                {orders}
            </div>
        );
    }
}

Order.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            orderId: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string])
        })
    })
};

/*
    OrderID: { type: Number, required: true, unique: true },
    CustomerID: { type: String, required: true },
    EmployeeID: { type: Number, required: true },
    OrderDate: { type: String, required: true },
    RequiredDate: { type: String, required: true },
    ShippedDate: { type: String, required: true },
    ShipVia: { type: String, required: true },
    Freight: { type: Number, required: true },
    ShipName: { type: String, required: true },
    ShipAddress: { type: String, required: true },
    ShipCity: { type: Number, required: true },
    ShipRegion: { type: String, required: true },
    ShipPostalCode: { type: String, required: true },
    ShipCountry: { type: String, required: true }
*/

export default Order;
