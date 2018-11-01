import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Category } from '..';

configure({ adapter: new Adapter() });

describe('Category Component', () => {
    it('category renders', () => {
        const wrapper = shallow(<Category />);
        expect(wrapper.exists()).toBe(true);
    });

    it('category renders sample data', () => {
        const sampleData = [{
            CategoryID: 1,
            CategoryName: "Beverages",
            Description: "Soft drinks"
        }];
        const wrapper = mount(<Category />);
        wrapper.setState(sampleData);
        expect(wrapper.find('tbody').children.length).toBeGreaterThan(0);
        wrapper.unmount();
    });
});