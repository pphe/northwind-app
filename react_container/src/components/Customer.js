import React from 'react';
import CustomerModal from './CustomerModal';
import axios from 'axios';

class Customer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            showModal: false,
            currentCustomer: {}
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.setCurrentCustomer = this.setCurrentCustomer.bind(this);
    }

    handleClose() {
        this.setState({ showModal: false });
    }

    handleShow() {
        this.setState({ showModal: true });
    }

    setCurrentCustomer(customer) {
        this.setState({
            currentCustomer: customer,
            showModal: true
        });
    }

    componentDidMount() {
        axios.get('/api/customer')
            .then(res => this.setState({ data: res.data }))
            .catch(err => console.log(`Err: ${err}`));
    }

    render() {
        const customers = this.state.data.map(customer => {
            return (
                <li key={customer.CustomerID}
                    onClick={() => this.setCurrentCustomer(customer)}>
                    {customer.CompanyName}
                </li>
            );
        });

        return (
            <div>
                {customers}

                {
                    this.state.showModal
                        ? <CustomerModal
                            customer={this.state.currentCustomer}
                            show={this.state.showModal}
                            handleShow={this.handleShow}
                            handleClose={this.handleClose}
                        />
                        : null
                }
            </div >
        );
    }
}

export default Customer;
