import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Product } from '..';

configure({ adapter: new Adapter() });

describe('Product Component', () => {
    const product = {
        ProductID : 4,
        ProductName : "Chef Anton's Cajun Seasoning",
        SupplierID : 2,
        CategoryID : 2,
        QuantityPerUnit : "48 - 6 oz jars",
        UnitPrice : 22.0,
        UnitsInStock : 53,
        UnitsOnOrder : 0,
        ReorderLevel : 0,
        Discontinued : 0
    };

    it('product renders', () => {
        const wrapper = shallow(<Product productId={4} />);
        expect(wrapper.exists()).toBe(true);
    });

    // it('product has <ListGroupItem /> children', () => {
    //     const wrapper = mount(<Product productId={4} />);
    //     expect(wrapper.find(ListGroupItem).length).toEqual(3);
    // });
});
