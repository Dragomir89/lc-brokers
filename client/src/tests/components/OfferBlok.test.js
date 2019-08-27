import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import '../setupTests';
import { offerBlockData } from '../test-data';
import OfferBlok from '../../components/OfferBlok';

test('should render OfferBlok correct', () => {
    const wrapper = shallow(<OfferBlok {...offerBlockData}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});