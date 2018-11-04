import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Panel } from 'react-bootstrap';
import { Order } from '..';

configure({ adapter: new Adapter() });

describe('Order Component', () => {
    const mockOrder = [{
        OrderID: 10248
    }];

    it('order renders without orderId param', () => {
        const match = { params: {} };
        const wrapper = shallow(<Order match={match} />);
        expect(wrapper.exists()).toBe(true);
        wrapper.unmount();
    });

    it('order renders with orderId param', () => {
        const match = { params: { orderId: "10251" } };
        const wrapper = shallow(<Order match={match} />);
        expect(wrapper.exists()).toBe(true);
    });

    it('order renders <Panel /> container for <OrderDetail />', () => {
        const match = { params: { orderId: "10248" } };
        const wrapper = shallow(<Order match={match} />)
        wrapper.setState({ data: mockOrder });
        expect(wrapper.find(Panel).length).toBeGreaterThan(0);
    });

    it('order componentDidMount() sets state.data after fetchSingleOrder()', () => {
        const mockAxios = new MockAdapter(axios);
        mockAxios.onGet('/api/order/10248').reply(200, mockOrder);
        const match = { params: { orderId: "10248" } };
        const wrapper = shallow(<Order match={match} />);
        return wrapper.instance().fetchSingleOrder(10248)
            .then(() => expect(wrapper.state('data')).toEqual(mockOrder));
    });

    it('order componentDidMount() sets state.data after fetchAllOrders()', () => {
        const mockAxios = new MockAdapter(axios);
        mockAxios.onGet('/api/order').reply(200, mockOrder);
        const match = { params: {} };
        const wrapper = shallow(<Order match={match} />);
        return wrapper.instance().fetchAllOrders()
            .then(() => expect(wrapper.state('data')).toEqual(mockOrder));
    });
});
