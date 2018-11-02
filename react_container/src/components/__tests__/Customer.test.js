import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ListGroupItem } from 'react-bootstrap';
import { Customer, CustomerModal } from '..';

configure({ adapter: new Adapter() });

describe('Order Component', () => {
    const mockCustomer = [{
        CustomerID: "ALFKI",
        CompanyName: "Alfreds Futterkiste"
    }];

    it('customer renders', () => {
        const wrapper = shallow(<Customer />);
        expect(wrapper.exists()).toBe(true);
    });

    it('customer renders with customer info', () => {
        const wrapper = mount(<Customer />);
        wrapper.setState({ data: mockCustomer });
        wrapper.update();
        expect(wrapper.find(ListGroupItem).length).toBeGreaterThan(0);
        wrapper.unmount();
    });
    
    it('customer renders <CustomerModal />', () => {
        const wrapper = mount(<Customer />);
        wrapper.setState({
            showModal: true,
            currentCustomer: mockCustomer[0]
        });
        wrapper.update();
        expect(wrapper.find(CustomerModal)).toHaveLength(1);
        wrapper.unmount();
    });

    it('handleClose() cb sets showModal state to false', () => {
        const wrapper = mount(<Customer />);
        wrapper.setState({
            showModal: true
        });
        wrapper.update();
        wrapper.instance().handleClose();
        expect(wrapper.state('showModal')).toBe(false);
        wrapper.unmount();
    });

    it('handleShow() cb sets CustomerModal show prop to true', () => {
        const wrapper = mount(<Customer />);
        wrapper.setState({
            showModal: false,
        });
        wrapper.update();
        wrapper.instance().handleShow();
        expect(wrapper.state('showModal')).toBe(true);
        wrapper.unmount();
    });

    it('setCurrentCustomer(customer) cb sets the currentCustomer, and showModal to true', () => {
        const wrapper = mount(<Customer />);
        wrapper.update();
        wrapper.instance().setCurrentCustomer(mockCustomer[0]);
        expect(wrapper.state()).toMatchObject({
            showModal: true,
            currentCustomer: mockCustomer[0]
        })
        wrapper.unmount();
    });
});