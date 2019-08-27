import { GET_OFFERS } from '../../actions/offerActionTypes';
import offersReducer from '../../reducers/offersReducer';
import { offers } from '../test-data';

test('should offersReducer return array with offers', () => {
    const action = { type: GET_OFFERS, payload: offers };
    const res = offersReducer([], action);
    const formatedVals = action.payload.map((offer) => {
        const neighborhood = offer.neighborhoodId.value;
        const estateType = offer.propertyTypeId.value;
        return { ...offer, neighborhood, estateType }
    })
    expect(res).toEqual(formatedVals);
});


test('should offersReducer with action type "GET_OFFERS" return empty array', () => {
    const action = { type: '@@INIT' };
    const res = offersReducer([], action);
    expect(res).toEqual([]);
});