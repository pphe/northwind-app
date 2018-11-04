import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import { CustomerModal } from '..';

configure({ adapter: new Adapter() });

describe('CustomerModal Component', () => {
    const mockCustomer = {
        CustomerID: "ANATR",
        CompanyName: "Ana Trujillo Emparedados y helados",
        ContactName: "Ana Trujillo",
        ContactTitle: "Owner",
        Address: "Avda. de la Constitución 2222",
        City: "México D.F.",
        Region: "NULL",
        PostalCode: 5021,
        Country: "Mexico",
        Phone: "(5) 555-4729",
        Fax: "(5) 555-3745"
    };

    it('customermodal renders show true', () => {
        const wrapper = shallow(<CustomerModal customer={mockCustomer}
            show={true} handleClose={() => { }} />);
        expect(wrapper.exists()).toBe(true);
    });

    it('customermodal renders show false', () => {
        const wrapper = shallow(<CustomerModal customer={mockCustomer}
            show={false} handleClose={() => { }} />);
        expect(wrapper.exists()).toBe(true);
    });

    it('customermodal has <Modal /> child', () => {
        const wrapper = shallow(<CustomerModal customer={mockCustomer}
            show={false} handleClose={() => { }} />);
        expect(wrapper.find(Modal)).toHaveLength(1);
    });

    it('customermodal has customer info in <li /> elements', () => {
        const wrapper = shallow(<CustomerModal customer={mockCustomer}
            show={true} handleClose={() => { }} />);
        expect(wrapper.find('li').length).toBeGreaterThan(1);
    });

    it('customermodal close button click', () => {
        const mockOnClick = sinon.spy();
        const wrapper = shallow(<CustomerModal customer={mockCustomer}
            show={true} handleClose={mockOnClick} />);
        wrapper.find(Button).simulate('click');
        expect(mockOnClick.calledOnce).toBeTruthy();
    });
});
