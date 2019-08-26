import { GET_OFFERS, POST_OFFER_SUCCESS, POST_OFFER_ERROR, GET_CURRENT_OFFER } from './offerActionTypes';
import axios from 'axios';

export const getOffers = (page, queryStr) => async (dispath) => {
    const res = await axios.get(`http://localhost:5000/api/get-offers/${page}?${queryStr}`);
    return dispath({ type: GET_OFFERS, payload: res.data.offers });
}

export const postOffer = (data) => async (dispatch) => {
    data.addedOn = new Date();
    const options = { method: 'post', url: 'http://localhost:5000/api/offer', data };
    const res = await axios(options);
    const type = !!res.data.error ? POST_OFFER_ERROR : POST_OFFER_SUCCESS
    dispatch({ type });
}

export const updateOffer = (data) => async (dispatch) => {
    data.addedOn = new Date();
    const options = { method: 'post', url: `http://localhost:5000/api/offer/${data._id}`, data };
    const res = await axios(options);
    const type = !!res.data.error ? POST_OFFER_ERROR : POST_OFFER_SUCCESS
    dispatch({ type, payload: res.data });
}

export const getCurrentOffer = (id) => async dispatch => {
    const res = await axios.get(`http://localhost:5000/api/offer/${id}`);
    dispatch({type: GET_CURRENT_OFFER, payload: res.data});
}