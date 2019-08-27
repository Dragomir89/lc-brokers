import React from 'react'
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import '../setupTests';
import { options } from '../test-data';
import { Filters } from '../../components/Filters';
import moment from 'moment';
import qs from 'querystring';

let wrapper, getOptionsSpy, getOffersSpy;

beforeEach(() => {
    getOptionsSpy = jest.fn();
    getOffersSpy = jest.fn();
    wrapper = shallow(<Filters options={options} getOptions={getOptionsSpy} getOffers={getOffersSpy} />);
});

test('should render Filters correct', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should call getOptions after render', () => {
    expect(getOptionsSpy).toHaveBeenCalled();
});

test('after call changeFn in Select should set new state', () => {
    const event = { target: { name: 'constructionTypeId', value: 'new value' } };
    wrapper.find('Select').at(0).prop('changeFn')(event);
    expect(wrapper.state([event.target.name])).toBe(event.target.value);
});

test('after call onDateChange in DatePicker should set new value in state for nextCall', () => {
    wrapper.find('CustomSingleDatePicker').at(0).prop('onDateChange')(moment(0));
    expect(wrapper.state('nextCall')).toEqual(moment(0));
});

test('after call onFocusChange in DatePicker should set new value in state for focused', () => {
    wrapper.find('CustomSingleDatePicker').at(0).prop('onFocusChange')({ focused: true });
    expect(wrapper.state('focused')).toBe(true);
});

test('after click button should call getOffers witn correct params', () => {
    const event = { preventDefault: () => { } };
    const defaultState = {
        focused: false,
        phoneNumber: '',
        nextCall: moment()
    }
    const qsString = qs.stringify(
        {
            ...defaultState,
            nextCall: defaultState.nextCall.format("YYYY-MM-DD")
        });
    wrapper.find('.button__primary').at(0).simulate('click', event)
    expect(getOffersSpy).toHaveBeenLastCalledWith(1, qsString);
});
