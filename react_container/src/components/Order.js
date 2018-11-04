import React from 'react';
import { Panel, PanelGroup } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import axios from 'axios';
import OrderDetail from './OrderDetail';

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this._source = axios.CancelToken.source();
        this.fetchSingleOrder = this.fetchSingleOrder.bind(this);
        this.fetchAllOrders = this.fetchAllOrders.bind(this);
        this.errorHandler = this.errorHandler.bind(this);
    }

    errorHandler(err) {
        if (!axios.isCancel(err))
            console.log(`Err: ${err}`);
    }

    fetchSingleOrder(orderId) {
        return axios.get(`/api/order/${orderId}`,
            { cancelToken: this._source.token });
    }

    fetchAllOrders() {
        return axios.get('/api/order',
            { cancelToken: this._source.token });
    }

    componentDidMount() {
        const { orderId } = this.props.match.params;

        orderId
            ? this.fetchSingleOrder(orderId)
                .then(res => this.setState({ data: res.data }))
                .catch(this.errorHandler)
            : this.fetchAllOrders()
                .then(res => this.setState({ data: res.data }))
                .catch(this.errorHandler);
    }

    componentWillUnmount() {
        this._source.cancel();
    }

    render() {
        const orders = this.state.data.map(item => {
            const orderId = item.OrderID;
            return (
                <Panel key={orderId} eventKey={orderId}>
                    <Panel.Heading>
                        <Panel.Title toggle>
                            Order #{orderId}
                        </Panel.Title>
                    </Panel.Heading>

                    <LazyLoad height={0} offset={100} once>
                        <Panel.Body collapsible>
                            <OrderDetail orderId={orderId} />
                        </Panel.Body>
                    </LazyLoad>
                </Panel>
            );
        });

        return (
            <PanelGroup id="order-detail-list">
                {orders}
            </PanelGroup>
        );
    }
}

Order.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            orderId: PropTypes.oneOfType([
                PropTypes.string
            ])
        })
    }),
};

export default Order;
