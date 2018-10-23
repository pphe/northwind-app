import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

class CustomerModal extends React.Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    {this.props.customer.CompanyName}
                </Modal.Header>

                <Modal.Body>
                    {JSON.stringify(this.props.customer)}
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
