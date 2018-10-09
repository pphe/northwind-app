import React from 'react';
import axios from 'axios';

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        axios.get('/api/order')
            .then(res => this.setState({ data: res.data }));
    }

    render() {
        const orders = this.state.data.map(item => {
            return (
                <li key={item.OrderID}>
                    Order ID: {item.OrderID} |
                    Order Date: {item.OrderDate}
                </li>
            );
        });

        return (
            <div>
                order component<br />
                {orders}
            </div>
        );
    }
}
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
