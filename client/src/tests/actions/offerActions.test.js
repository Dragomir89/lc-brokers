import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import { getOffers, postOffer, updateOffer, getCurrentOffer } from '../../actions/offerActions';
import { GET_OFFERS, GET_CURRENT_OFFER, POST_OFFER_ERROR, POST_OFFER_SUCCESS, EDIT_POST_OFFER_SUCCESS, EDIT_POST_OFFER_ERROR } from '../../actions/offerActionTypes';
import { offers } from '../test-data';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({});

test('should create get offers action correctly', async () => {
    const mockResObj = { data: { offers } }
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(mockResObj));
    const action = await store.dispatch(getOffers(1, ''));
    expect(action).toEqual({ type: GET_OFFERS, payload: offers });
});

test('should create post offer action with error correctly', async () => {
    const mockResObj = { data: { error: { msg: "has error" } } };
    mockAxios.post.mockImplementationOnce(() => Promise.resolve(mockResObj));
    const action = await store.dispatch(postOffer(offers[0]));
    expect(action).toEqual({ type: POST_OFFER_ERROR });
});

test('should create post offer action successful correctly', async () => {
    const mockResObj = { data: { offer: {} } };
    mockAxios.post.mockImplementationOnce(() => Promise.resolve(mockResObj));
    const action = await store.dispatch(postOffer(offers[0]));
    expect(action).toEqual({ type: POST_OFFER_SUCCESS });
});

test('should create updateOffer action successful correctly', async () => {
    const mockResObj = { data: offers[0] };
    mockAxios.post.mockImplementationOnce(() => Promise.resolve(mockResObj));
    const action = await store.dispatch(updateOffer(offers[0]));
    expect(action).toEqual({ type: EDIT_POST_OFFER_SUCCESS });
});

test('should create updateOffer action uncorectly', async () => {
    const mockResObj = { data: { error: true } };
    mockAxios.post.mockImplementationOnce(() => Promise.resolve(mockResObj));
    const action = await store.dispatch(updateOffer(offers[0]));
    expect(action).toEqual({ type: EDIT_POST_OFFER_ERROR });
});

test('should create getCurrentOffer action correctly', async () => {
    const mockResObj = { data: offers[1] };
    mockAxios.get.mockImplementationOnce(()=> Promise.resolve(mockResObj));
    const action = await store.dispatch(getCurrentOffer('5cc94d8a776b203dfc2720ca'));
    expect(action).toEqual({type:GET_CURRENT_OFFER, payload: offers[1]});
});