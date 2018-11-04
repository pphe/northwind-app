import React from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
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
        this._source = axios.CancelToken.source();

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.setCurrentCustomer = this.setCurrentCustomer.bind(this);
        this.handleError = this.handleError.bind(this);
        this.fetchCustomers = this.fetchCustomers.bind(this);
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

    handleError(err) {
        if (!axios.isCancel(err))
            console.log(`Err: ${err}`);
    }

    fetchCustomers() {
        return axios.get('/api/customer', { cancelToken: this._source.token })
    }

    componentDidMount() {
        this.fetchCustomers()
            .then(res => this.setState({ data: res.data }))
            .catch(this.handleError);
    }

    componentWillUnmount() {
        this._source.cancel();
    }

    render() {
        const customers = this.state.data.map(customer => {
            return (
                <ListGroupItem key={customer.CustomerID}
                    onClick={() => this.setCurrentCustomer(customer)}>
                    {customer.CompanyName}
                </ListGroupItem>
            );
        });

        return (
            <div>
                <Panel>
                    <ListGroup>
                        {customers}
                    </ListGroup>
                </Panel>

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
            </div>
        );
    }
}

export default Customer;
