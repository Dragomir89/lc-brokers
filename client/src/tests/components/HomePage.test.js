import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import '../setupTests';
import HomePage from '../../components/HomePage';

test('should render HomePage correctly', () => {
    const wrapper = shallow(<HomePage/>);
    expect(toJSON(wrapper)).toMatchSnapshot()
});