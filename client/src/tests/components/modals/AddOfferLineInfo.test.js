import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import '../../setupTests';
import AddOfferLineInfo from '../../../components/modals/AddOfferLineInfo';

test('should render correct info width data', () => {
    const wrapper = shallow(<AddOfferLineInfo label='Цена' value='200' dimension='лв'/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render correct info widthout value', () => {
    const wrapper = shallow(<AddOfferLineInfo label='Цена' />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});