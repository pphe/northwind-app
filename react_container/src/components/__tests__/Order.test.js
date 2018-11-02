import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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
    });

    it('order renders with orderId param', () => {
        const match = { params: { orderId: "10251" } };
        const wrapper = shallow(<Order match={match} />);
        expect(wrapper.exists()).toBe(true);
    });

    it('order renders <Panel /> container for <OrderDetail />', () => {
        const match = { params: { orderId: "10248" } };
        const wrapper = mount(<Order match={match} />)
        wrapper.setState({ data: mockOrder });
        wrapper.update();
        expect(wrapper.find(Panel).length).toBeGreaterThan(0);
        wrapper.unmount();
    });
});
