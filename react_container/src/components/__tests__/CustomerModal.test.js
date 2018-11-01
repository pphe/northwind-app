import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import { CustomerModal } from '..';

configure({ adapter: new Adapter() });

describe('CustomerModal Component', () => {
    const cust = {
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
        const wrapper = shallow(<CustomerModal customer={cust}
            show={true} handleClose={() => { }} />);
        expect(wrapper.exists()).toBe(true);
    });

    it('customermodal renders show false', () => {
        const wrapper = shallow(<CustomerModal customer={cust}
            show={false} handleClose={() => { }} />);
        expect(wrapper.exists()).toBe(true);
    });

    it('customermodal has <Modal /> child', () => {
        const wrapper = shallow(<CustomerModal customer={cust}
            show={false} handleClose={() => { }} />);
        expect(wrapper.find(Modal).length).toEqual(1);
    });

    it('customermodal button click', () => {
        const mockOnClick = sinon.spy();
        const wrapper = mount(<CustomerModal customer={cust}
            show={true} handleClose={mockOnClick} />);
        wrapper.find(Button).simulate('click');
        expect(mockOnClick.calledOnce).toBeTruthy();
        wrapper.unmount();
    });
});