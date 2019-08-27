import { POST_OFFER_ERROR, POST_OFFER_SUCCESS } from '../../actions/offerActionTypes';
import offerPostStatusReducer from '../../reducers/offerPostStatusReducer';

test('offerPostStatusReducer with action type "POST_OFFER_SUCCESS" should return correct string', () => {
    const res = offerPostStatusReducer({}, { type: POST_OFFER_SUCCESS });
    expect(res).toBe(POST_OFFER_SUCCESS);
});

test('offerPostStatusReducer with action type "POST_OFFER_ERROR" should return correct string', () => {
    const res = offerPostStatusReducer({}, { type: POST_OFFER_ERROR });
    expect(res).toBe(POST_OFFER_ERROR);
});

test('offerPostStatusReducer with invalid action type  should return empty object', () => {
    const res = offerPostStatusReducer({}, { type: '@@INIT' });
    expect(res).toEqual({});
});
