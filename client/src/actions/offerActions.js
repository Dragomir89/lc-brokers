import {
    GET_OFFERS,
    POST_OFFER_SUCCESS,
    POST_OFFER_ERROR,
    GET_CURRENT_OFFER,
    EDIT_POST_OFFER_SUCCESS, EDIT_POST_OFFER_ERROR
} from './offerActionTypes';
import axios from 'axios';

export const getOffers = (page, queryStr) => async (dispath) => {
    let res = await axios.get(`http://localhost:5000/api/get-offers/${page}?${queryStr}`);
    res = res || [];
    return dispath({ type: GET_OFFERS, payload: res.data.offers });
}

export const postOffer = (data) => async (dispatch) => {
    data.addedOn = new Date();
    const res = await axios.post('http://localhost:5000/api/offer', data);
    const type = !!res.data.error ? POST_OFFER_ERROR : POST_OFFER_SUCCESS
    return dispatch({ type });
}

export const updateOffer = (data) => async (dispatch) => {
    const res = await axios.post(`http://localhost:5000/api/offer/${data._id}`, data);
    const type = !!res.data.error ? EDIT_POST_OFFER_ERROR : EDIT_POST_OFFER_SUCCESS
    return dispatch({ type });
}

export const getCurrentOffer = (id) => async dispatch => {
    const res = await axios.get(`http://localhost:5000/api/offer/${id}`);
    return dispatch({ type: GET_CURRENT_OFFER, payload: res.data });
}