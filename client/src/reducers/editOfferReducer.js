import { GET_CURRENT_OFFER, POST_OFFER_SUCCESS } from '../actions/offerActionTypes';
import moment from 'moment';

const formatOfferProps = (offer) => {
    const phoneNumber2 = offer.phoneNumbers[1] ? offer.phoneNumbers[1] : '';
    const phoneNumber3 = offer.phoneNumbers[2] ? offer.phoneNumbers[2] : '';
    const { lastCall, nextCall } = offer;
    return {
        ...offer,
        phoneNumber2,
        phoneNumber3,
        lastCall: moment(lastCall),
        nextCall: moment(nextCall)
    }
}

export default (state = {}, action) => {
    const { type, payload } = action;

    if (type === POST_OFFER_SUCCESS) {
        return formatOfferProps(payload);
    } else if (type === GET_CURRENT_OFFER) {
        return formatOfferProps(payload);
    }
    return state;
} 