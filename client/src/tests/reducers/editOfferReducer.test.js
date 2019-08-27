import { POST_OFFER_SUCCESS, GET_CURRENT_OFFER } from '../../actions/offerActionTypes';
import editOfferReducer from '../../reducers/editOfferReducer';
import { offer } from '../test-data';
import moment from 'moment';


test('editOfferReducer with invalid action type should return empty object', () => {
    const res = editOfferReducer({}, { type: '@@INIT' });
    expect(res).toEqual({});
});

test('editOfferReducer with POST_OFFER_SUCCESS action type should return correct offer', () => {
    const action = { type: POST_OFFER_SUCCESS, payload: offer };
    const res = editOfferReducer(undefined, action);
    const expectedOffer = {
        ...offer,
        phoneNumber2: '',
        phoneNumber3: '',
        lastCall: moment(offer.lastCall),
        nextCall: moment(offer.nextCall)
    };
    expect(res).toEqual(expectedOffer);
});


test('editOfferReducer with GET_CURRENT_OFFER action type should return correct offer', () => {
    const action = { type: GET_CURRENT_OFFER, payload: offer };
    const res = editOfferReducer(undefined, action);
    const expectedOffer = {
        ...offer,
        phoneNumber2: '',
        phoneNumber3: '',
        lastCall: moment(offer.lastCall),
        nextCall: moment(offer.nextCall)
    };
    expect(res).toEqual(expectedOffer);
});