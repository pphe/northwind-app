import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Customer, CustomerModal } from '..';

configure({ adapter: new Adapter() });

describe('Customer Component', () => {
    const mockCustomer = [{
        CustomerID: "ALFKI",
        CompanyName: "Alfreds Futterkiste"
    }];

    it('customer renders', () => {
        const wrapper = shallow(<Customer />);
        expect(wrapper.exists()).toBe(true);
        wrapper.unmount();
    });

    it('customer renders with customer info', () => {
        const wrapper = shallow(<Customer />);
        wrapper.setState({ data: mockCustomer });
        expect(wrapper.find(ListGroup).children().length).toBeGreaterThan(0);
    });

    it('customer renders <CustomerModal />', () => {
        const wrapper = shallow(<Customer />);
        wrapper.setState({
            showModal: true,
            currentCustomer: mockCustomer[0]
        });
        expect(wrapper.find(CustomerModal)).toHaveLength(1);
    });

    it('customer simulate click on a ListGroupItem', () => {
        const wrapper = shallow(<Customer />);
        wrapper.setState({
            showModal: false,
            data: mockCustomer
        });
        wrapper.find(ListGroupItem).first().simulate('click');
        expect(wrapper.state()).toMatchObject({
            showModal: true,
            currentCustomer: mockCustomer[0]
        });
    });

    it('toggleModal() cb sets showModal state to false', () => {
        const wrapper = shallow(<Customer />);
        wrapper.setState({
            showModal: true
        });
        wrapper.instance().toggleModal();
        expect(wrapper.state('showModal')).toBe(false);
    });
    
    it('customer componentDidMount() sets state.data after ajax', () => {
        const mockAxios = new MockAdapter(axios);
        mockAxios.onGet('/api/customer').reply(200, mockCustomer);
        const wrapper = mount(<Customer />);

        return wrapper.instance().fetchCustomers()
            .then(() => expect(wrapper.state('data')).toEqual(mockCustomer));
    });
});
