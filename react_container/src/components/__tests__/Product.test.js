import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ListGroupItem } from 'react-bootstrap';
import { Product } from '..';

configure({ adapter: new Adapter() });

describe('Product Component', () => {
    const mockProduct = [{
        ProductID: 4,
        ProductName: "Chef Anton's Cajun Seasoning",
        UnitPrice: 22.0,
        UnitsInStock: 53
    }];

    it('product renders', () => {
        const wrapper = shallow(<Product productId={4} />);
        expect(wrapper.exists()).toBe(true);
    });

    it('product has <ListGroupItem /> children', () => {
        const wrapper = mount(<Product productId={4} />);
        wrapper.setState({ data: mockProduct });
        wrapper.update();
        expect(wrapper.find(ListGroupItem)).toHaveLength(3);
        wrapper.unmount();
    });
});
