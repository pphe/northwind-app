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
        return (
            <div>
                order component 
                {this.state.data}
            </div>
        );
    }
}


export default Order;
