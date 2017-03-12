import axios from 'axios';
import { GET_RESTAURANT, RESET_CARDS } from './types';

export function sendForm(params){
  const url = `https://hu1b1nudk7.execute-api.us-east-1.amazonaws.com/dev/opentable?city=${params.city}`
  const request = axios.get(url);
  return (dispatch) => {
    request.then( ({data}) => {
      dispatch({type: GET_RESTAURANT, payload: data})
    })
  }
}

export function resetCards(){
  return ({
    type: RESET_CARDS
  })
}

const getAvailabilityById = (id) => {
  const params = {
    start_date_time: '2017-03-16T19%3A00',
    forward_minutes: 30,
    backward_minutes: 30,
    party_size: 2
  }
  const url = `https://platform.otqa.com/availability/${id}`
  axios.get(url, {
    headers: {'Authorization': 'Bearer 27037c67-f394-4cfd-ab51-069ac71132fb'},
    params
  }).then(res => console.log(res))
}
