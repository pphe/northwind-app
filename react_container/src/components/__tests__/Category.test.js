import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Category } from '..';

configure({ adapter: new Adapter() });

describe('Category Component', () => {
    const mockCategory = [{
        CategoryID: 2,
        CategoryName: "Condiments",
        Description: "Sweet and savory sauces"
    },
    {
        CategoryID: 1,
        CategoryName: "Beverages",
        Description: "Soft drinks"
    }];

    it('category renders', () => {
        const wrapper = shallow(<Category />);
        expect(wrapper.exists()).toBe(true);
        wrapper.unmount();
    });

    it('category renders sample a category', () => {
        const wrapper = shallow(<Category />);
        wrapper.setState(mockCategory);
        expect(wrapper.find('tbody').children.length).toBeGreaterThan(0);
    });

    it('category renders <td> data elements', () => {
        const wrapper = shallow(<Category />);
        wrapper.setState({ data: mockCategory });
        expect(wrapper.find('td').length).toBeGreaterThan(0);
    });

    it('category componentDidMount() sets state.data after fetchCategories()', () => {
        const mockAxios = new MockAdapter(axios);
        mockAxios.onGet('/api/category').reply(200, mockCategory);
        const wrapper = shallow(<Category />);
        return wrapper.instance().fetchCategories()
            .then(() => expect(wrapper.state('data')).toEqual(mockCategory));
    });
});
