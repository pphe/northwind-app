import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Order } from '..';

configure({ adapter: new Adapter() });

describe('Order Component', () => {
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
});
