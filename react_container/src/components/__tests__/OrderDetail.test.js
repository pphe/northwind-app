import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { ListGroupItem } from 'react-bootstrap';
import { OrderDetail, Product } from '..';

configure({ adapter: new Adapter() });

describe('OrderDetail Component', () => {
    const mockOrderDetail = [{
        OrderID: 10249,
        ProductID: 14,
        Quantity: 9
    }];

    it('orderdetail renders', () => {
        const wrapper = shallow(<OrderDetail />);
        expect(wrapper.exists()).toBe(true);
        wrapper.unmount();
    });

    it('orderdetail renders the details (products) for an order', () => {
        const wrapper = shallow(<OrderDetail orderId={10249} />);
        wrapper.setState({ data: mockOrderDetail });
        expect(wrapper.find(ListGroupItem).length).toBeGreaterThan(0);
    });

    it('orderdetail renders the Product component(s) for an order', () => {
        const wrapper = shallow(<OrderDetail orderId={10249} />);
        wrapper.setState({ data: mockOrderDetail });
        expect(wrapper.find(Product).length).toBeGreaterThan(0);
    });

    it('orderdetail componentDidMount() sets state.data after fetchOrderDetails()', () => {
        const mockAxios = new MockAdapter(axios);
        mockAxios.onGet('/api/order-detail/10249').reply(200, mockOrderDetail);
        const wrapper = shallow(<OrderDetail orderId={10249} />);
        return wrapper.instance().fetchOrderDetails(10249)
            .then(() => expect(wrapper.state('data')).toEqual(mockOrderDetail));
    });
});
