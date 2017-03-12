import axios from 'axios';

import { GET_RESTAURANT } from './types';

export function sendForm(params){
  const request = axios.get(`https://hu1b1nudk7.execute-api.us-east-1.amazonaws.com/dev/opentable?city=${params.city}`);
  return (dispatch) => {
    request.then( ({data}) => {
      dispatch({type: GET_RESTAURANT, payload: data})
    })
  }
}
