import { GET_OFFERS, POST_OFFER_SUCCESS, POST_OFFER_ERROR } from './offerActionTypes';
import axios from 'axios';

export const getOffers = (page, queryStr) => async (dispath) => {
    const res = await axios.get(`http://localhost:5000/api/get-offers/${page}?${queryStr}`);
    return dispath({ type: GET_OFFERS, payload: res.data.offers });
}

export const postOffer = (data) => async (dispatch) => {
    data.addedOn = new Date();
    const options = { method: 'post', url: 'http://localhost:5000/api/offer', data };
    const res = await axios(options);
    console.log(!!res.data.error)
    const type = !!res.data.error ? POST_OFFER_ERROR : POST_OFFER_SUCCESS
    dispatch({ type });
}
