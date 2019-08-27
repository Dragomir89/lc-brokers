import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import '../setupTests';
import { OfferPropsPartOne } from '../../components/OfferPropsPartOne';
import { options } from '../test-data';

let values, wrapper, nextHandlerSpy, getOptionsSpy, changeHandlerSpy;

beforeEach(() => {
    nextHandlerSpy = jest.fn();
    getOptionsSpy = jest.fn();
    changeHandlerSpy = jest.fn();
    values = {
        constructionTypeId: options['constructionTypes'][0]._id,
        propertyTypeId: options['propertyTypes'][0]._id,
        state: options['states'][0]._id,
        neighborhoodId: options['neighborhoods'][0]._id
    }
    wrapper = shallow(
        <OfferPropsPartOne
            getOptions={getOptionsSpy}
            options={options}
            values={values}
            nextHandler={nextHandlerSpy}
            changeHandler={changeHandlerSpy}
        />);

});

test('should render OfferPropsPartOne correct', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('OfferPropsPartOne should call getOptions after render', () => {
    expect(getOptionsSpy).toHaveBeenCalled();
});

test('OfferPropsPartOne should call changeHandler after changeFn in Select', () => {
    wrapper.find('Select').at(0).prop('changeFn')();
    expect(changeHandlerSpy).toHaveBeenCalled();
});

test('OfferPropsPartOne should call changeHandler after changeFn in Input', () => {
    wrapper.find('TextInput').at(0).prop('changeFn')();
    expect(changeHandlerSpy).toHaveBeenCalled();
});

test('OfferPropsPartOne should call nextHandler after click', () => {
    wrapper.find('.button__success').simulate('click', { preventDefault: () => { } });
    expect(nextHandlerSpy).toHaveBeenCalled();
});
