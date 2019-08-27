import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import '../setupTests';
import { AddOfferPage } from '../../components/AddOfferPage';
import moment from 'moment';

test('should match snapshots correctly', () => {
    const wrapper = shallow(<AddOfferPage />);
    expect(wrapper.state('showFierstPart')).toBe(true);
    expect(toJSON(wrapper)).toMatchSnapshot();
    wrapper.find('#part-one').prop('nextHandler')();
    expect(wrapper.state('showFierstPart')).toBe(false);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should set new state correctly', () => {
    const wrapper = shallow(<AddOfferPage />);
    wrapper.find('#part-one').prop('changeHandler')({ target: { name: 'price', value: 100 } });
    expect(wrapper.state('price')).toBe(100);
});


test('OfferPropsPartTwo test props', () => {
    const wrapper = shallow(<AddOfferPage />);

    wrapper.find('#part-one').prop('nextHandler')();
    expect(wrapper.state('showFierstPart')).toBe(false);

    wrapper.find('#part-two').prop('prevCallChangeHandler')(moment(0));
    expect(wrapper.state('lastCall')).toEqual(moment(0));

    wrapper.find('#part-two').prop('nextCallChangeHandler')(moment(0));
    expect(wrapper.state('nextCall')).toEqual(moment(0));

    wrapper.find('#part-two').prop('checkOfferHandler')();
    expect(wrapper.state('showAddOfferModal')).toBe(true);
    expect(wrapper.state('offerPostStatus')).toBe('');

    wrapper.find('#part-two').prop('backHandler')();
    expect(wrapper.state('showFierstPart')).toBe(true);

});