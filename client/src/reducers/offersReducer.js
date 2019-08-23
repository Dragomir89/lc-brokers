import { GET_OFFERS } from '../actions/offerActionTypes';

export default (state = [], action) => {
    if (action.type === GET_OFFERS) {
        return action.payload.map((offer) => {
            const neighborhood = offer.neighborhoodId.value;
            const estateType = offer.propertyTypeId.value;
            return { ...offer, neighborhood, estateType }
        });
    }
    return state
};