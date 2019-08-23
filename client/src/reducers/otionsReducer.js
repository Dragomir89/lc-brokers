import { GET_OPTIONS } from '../actions/optionsActionsTypes';
const defaultState = {
    constructionTypes:[],
    neighborhoods:[],
    propertyTypes:[],
    states:[]
}
export default (state=defaultState, action) => {
    if(action.type === GET_OPTIONS) {
        return action.payload;
    }
    return state;
};