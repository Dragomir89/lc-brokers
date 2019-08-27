import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import '../setupTests';
import { offerPropsPartTwoValues } from '../test-data';
import { OfferPropsPartTwo } from '../../components/OfferPropsPartTwo';

let wrapper,
    values,
    changeHandlerSpy,
    backHandlerSpy,
    checkOfferHandlerSpy,
    prevCallChangeHandlerSpy,
    nextCallChangeHandlerSpy;

beforeEach(() => {
    changeHandlerSpy = jest.fn();
    backHandlerSpy = jest.fn();
    checkOfferHandlerSpy = jest.fn();
    prevCallChangeHandlerSpy = jest.fn();
    nextCallChangeHandlerSpy = jest.fn();
    values = offerPropsPartTwoValues;

    wrapper = shallow(<OfferPropsPartTwo
        changeHandler={changeHandlerSpy}
        backHandler={backHandlerSpy}
        checkOfferHandler={checkOfferHandlerSpy}
        prevCallChangeHandler={prevCallChangeHandlerSpy}
        nextCallChangeHandler={nextCallChangeHandlerSpy}
        values={values}
    />);
});

test('should render OfferPropsPartTwo correct', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('OfferPropsPartTwo should call changeHandler after calling changeFn in TextInput', () => {
    wrapper.find('TextInput').at(0).prop('changeFn')();
    expect(changeHandlerSpy).toHaveBeenCalled();
});

test('OfferPropsPartTwo should call prevCallChangeHandler after calling changeFn in CustomSingleDatePicker', () => {
    wrapper.find('CustomSingleDatePicker').at(0).prop('onDateChange')();
    expect(prevCallChangeHandlerSpy).toHaveBeenCalled();
});

test('OfferPropsPartTwo should call nexCallChangeHandler after calling changeFn in CustomSingleDatePicker', () => {
    wrapper.find('CustomSingleDatePicker').at(1).prop('onDateChange')();
    expect(nextCallChangeHandlerSpy).toHaveBeenCalled();
});

test('OfferPropsPartTwo should call backHandler after back button click', () => {
    wrapper.find('.button__success').at(0).simulate('click', { preventDefault: () => { } });
    expect(backHandlerSpy).toHaveBeenCalled();
});

test('OfferPropsPartTwo should call checkOfferHandler after checkOffer button click', () => {
    wrapper.find('.button__primary').at(0).simulate('click', { preventDefault: () => { } });
    expect(checkOfferHandlerSpy).toHaveBeenCalled();
});
