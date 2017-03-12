import axios from 'axios';

// This is for CORS issue
// var config = {
//   headers: {'Access-Control-Allow-Headers': 'Origin'}
// };

import { GET_RESTAURANT } from './types';

export function sendForm(params){
  const url = `https://hu1b1nudk7.execute-api.us-east-1.amazonaws.com/dev/opentable?city=${params.city}`
  const request = axios.get(url);
  return (dispatch) => {
    request.then( ({data}) => {
      dispatch({type: GET_RESTAURANT, payload: data})
    })
  }
}
