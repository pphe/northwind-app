import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
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
        wrapper.unmount();
    });

    it('product renders <ListGroupItem /> children', () => {
        const wrapper = shallow(<Product />);
        wrapper.setState({ data: mockProduct });
        wrapper.update();
        expect(wrapper.find(ListGroupItem)).toHaveLength(3);
    });

    it('product fetchProduct() ajax is called via componentDidMount()', () => {
        const spy = jest.spyOn(Product.prototype, 'fetchProduct');
        shallow(<Product />);
        expect(spy).toHaveBeenCalled();
    });

    it('product componentDidMount() sets state.data after fetchProduct()', () => {
        const mockAxios = new MockAdapter(axios);
        mockAxios.onGet('/api/product/4').reply(200, mockProduct);
        const wrapper = shallow(<Product productId={4} />);
        return wrapper.instance().fetchProduct(4)
            .then(() => expect(wrapper.state('data')).toEqual(mockProduct));
    });
});
