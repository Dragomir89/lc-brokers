import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import '../../setupTests';
import { AddOfferModal } from '../../../components/modals/AddOfferModal';
import { addModalData } from '../../test-data';
import { POST_OFFER_ERROR } from '../../../actions/offerActionTypes';
import moment from 'moment';

test('should call postOffer with correct values', () => {
    const postOfferSpy = jest.fn();
    const lastCall = moment(addModalData.lastCall);
    const nextCall = moment(addModalData.nextCall);
    const values = {...addModalData, lastCall, nextCall}
    const wrapper = shallow(<AddOfferModal postOffer={postOfferSpy} offerVlues={values}/>)
    expect(toJSON(wrapper)).toMatchSnapshot();
    wrapper.find('button').at(1).simulate('click');
    const postObject = { 
        ...values, 
        lastCall: values.lastCall.toISOString(), 
        nextCall: values.nextCall.toISOString() 
    }
    expect(postOfferSpy).toHaveBeenLastCalledWith(postObject);
});

test('should call postOffer with error message values', () => {
    const postOfferSpy = jest.fn();
    const lastCall = moment(addModalData.lastCall);
    const nextCall = moment(addModalData.nextCall);
    const values = {...addModalData, lastCall, nextCall, offerPostStatus: POST_OFFER_ERROR}
    const wrapper = shallow(<AddOfferModal postOffer={postOfferSpy} offerVlues={values}/>)
    expect(toJSON(wrapper)).toMatchSnapshot();
    
});