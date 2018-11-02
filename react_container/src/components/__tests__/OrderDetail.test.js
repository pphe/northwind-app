import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ListGroupItem } from 'react-bootstrap';
import { OrderDetail, Product } from '..';

configure({ adapter: new Adapter() });

describe('OrderDetail Component', () => {
    const mockOrderDetail = [{
        OrderID: 10249,
        ProductID: 14,
        Quantity: 9
    }];

    it('order detail renders', () => {
        const wrapper = shallow(<OrderDetail />);
        expect(wrapper.exists()).toBe(true);
    });

    it('OrderDetail renders the details (products) for an order', () => {
        const wrapper = mount(<OrderDetail orderId={10249} />);
        wrapper.setState({ data: mockOrderDetail });
        wrapper.update();
        expect(wrapper.find(ListGroupItem).length).toBeGreaterThan(0);
        wrapper.unmount();
    });

    it('OrderDetail renders the Product component(s) for an order', () => {
        const wrapper = mount(<OrderDetail orderId={10249} />);
        wrapper.setState({ data: mockOrderDetail });
        wrapper.update();
        expect(wrapper.find(Product).length).toBeGreaterThan(0);
        wrapper.unmount();
    });
});
