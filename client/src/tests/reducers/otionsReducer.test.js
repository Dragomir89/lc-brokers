import optionsReducer from '../../reducers/optionsReducer';
import { emptyOptions, options } from '../test-data';
import { GET_OPTIONS } from '../../actions/optionsActionsTypes';

test('should return correct options object', () => {
    const action = { type: GET_OPTIONS, payload: options }
    const res = optionsReducer(undefined, action);
    expect(res).toEqual(options);
});

test('optionsReducer should return default object', () => {
    const action = { type: '@@INIT' }
    const res = optionsReducer(undefined, action);
    expect(res).toEqual(emptyOptions);
});