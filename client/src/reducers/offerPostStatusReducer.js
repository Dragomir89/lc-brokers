import { POST_OFFER_ERROR, POST_OFFER_SUCCESS } from '../actions/offerActionTypes';

export default (state = {}, action) => {
    const { type } = action;
    if (type === POST_OFFER_SUCCESS) {
        return POST_OFFER_SUCCESS;
    } else if (type === POST_OFFER_ERROR) {
        return POST_OFFER_ERROR ;
    }
    return state;
}