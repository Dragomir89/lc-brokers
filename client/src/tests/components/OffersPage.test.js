import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import '../setupTests';
import { OffersPage } from '../../components/OffersPage';
import { offers } from '../test-data';

test('should render OffersPage correctly', () => {
    const wrapper = shallow(<OffersPage offers={offers} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render OffersPage correctly without offers', () => {
    const wrapper = shallow(<OffersPage offers={[]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});