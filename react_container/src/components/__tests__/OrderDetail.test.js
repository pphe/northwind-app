import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { OrderDetail } from '..';

configure({ adapter: new Adapter() });

describe('OrderDetail Component', () => {
    it('order detail renders', () => {
        const wrapper = shallow(<OrderDetail />);
        expect(wrapper.exists()).toBe(true);
    });
});
