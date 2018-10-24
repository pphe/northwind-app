import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

class CustomerModal extends React.Component {
    render() {
        const customer = Object.assign({}, this.props.customer);

        for (let key in customer) {
            if (customer[key] === "NULL")
                delete customer[key];
        }

        return (
            <Modal show={this.props.show}
                bsSize="small"
                onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {this.props.customer.CompanyName}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <strong>Contact Info</strong>
                    <ul className="list-unstyled">
                        <li>
                            {customer.ContactName} ({customer.ContactTitle})
                        </li>
                        <li>
                            {customer.Address}
                        </li>
                        <li>
                            {customer.City ? customer.City : null}
                            {customer.Region ? ', ' + customer.Region : null}
                            {customer.PostalCode ? ' ' + customer.PostalCode : null}
                        </li>
                        <li>{customer.Country ? customer.Country : null}</li>
                        <li>{customer.Phone}</li>
                    </ul>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

CustomerModal.propTypes = {
    customer: PropTypes.object,
    show: PropTypes.bool,
    handleShow: PropTypes.func,
    handleClose: PropTypes.func
};

export default CustomerModal;
