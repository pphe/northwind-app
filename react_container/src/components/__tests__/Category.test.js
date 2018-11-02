import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Category } from '..';

configure({ adapter: new Adapter() });

describe('Category Component', () => {
    const mockCategory = [{
        CategoryID: 1,
        CategoryName: "Beverages",
        Description: "Soft drinks"
    }];

    it('category renders', () => {
        const wrapper = shallow(<Category />);
        expect(wrapper.exists()).toBe(true);
    });

    it('category renders sample a category', () => {

        const wrapper = mount(<Category />);
        wrapper.setState(mockCategory);
        wrapper.update();
        expect(wrapper.find('tbody').children.length).toBeGreaterThan(0);
        wrapper.unmount();
    });

    it('category renders <td> data elements', () => {
        const wrapper = mount(<Category />);
        wrapper.setState({ data: mockCategory });
        wrapper.update();
        expect(wrapper.find('td').length).toBeGreaterThan(0);
        wrapper.unmount();
    });
});