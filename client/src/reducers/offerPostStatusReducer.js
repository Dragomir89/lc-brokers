import { POST_OFFER_SUCCESS, POST_OFFER_ERROR } from '../actions/offerActionTypes';

export default (state = {}, action) => {
    const { type } = action;
    if (type === POST_OFFER_SUCCESS) {
        return POST_OFFER_SUCCESS ;
    } else if (type === POST_OFFER_ERROR) {
        return POST_OFFER_ERROR ;
    }
    return state;
}