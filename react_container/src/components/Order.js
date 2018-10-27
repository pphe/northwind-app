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
    }

    componentDidMount() {
        const { orderId } = this.props.match.params;

        orderId
            ? axios.get(`/api/order/${orderId}`,
                { cancelToken: this._source.token })
                .then(res => this.setState({ data: res.data }))
                .catch(err => {
                    if (!axios.isCancel(err))
                        console.log(`Err: ${err}`);
                })
            : axios.get('/api/order', { cancelToken: this._source.token })
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
                PropTypes.string])
        })
    }),
};

export default Order;
