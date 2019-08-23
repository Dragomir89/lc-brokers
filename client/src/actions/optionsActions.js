import { GET_OPTIONS } from './optionsActionsTypes';

import axios from 'axios';

export const getOptions = () => async (dispath) => {
    const res = await axios.get('http://localhost:5000/api/options');
    return dispath({ type: GET_OPTIONS, payload: res.data });
}
