import axios from 'axios';

// This is for CORS issue
// var config = {
//   headers: {'Access-Control-Allow-Headers': 'Origin'}
// };

import { GET_RESTAURANT } from './types';

export const getAvailability = (id, time, size) => {
  const url = `https://hu1b1nudk7.execute-api.us-east-1.amazonaws.com/dev/info`
  return (dispatch) => {
    axios.get(url, {
      params: {
        id, time, size
      }
    }).then(res => {
      let resAvail = res.data.message
      return dispatch({
        type: 'AVAILABILITY',
        payload: {
          id: resAvail.rid,
          times_available: resAvail.times_available,
          no_availability_reasons: resAvail.no_availability_reasons
        }
      })
    })
    .catch(e => console.log(e))
  }
}

export function sendForm(params){
  const url = `https://hu1b1nudk7.execute-api.us-east-1.amazonaws.com/dev/opentable?city=${params.city}`
  const request = axios.get(url);
  return (dispatch) => {
    request.then( ({data}) => {
      dispatch({type: GET_RESTAURANT, payload: data})
      return data
    }).then( data => {
      console.log(data)
      let restaurants = data.message.restaurants
      for (let i = 0; i < restaurants.length; i++){
        let id = restaurants[i].id
        dispatch(getAvailability(id, '2017-03-12T18:00', 2))
      }
    })
  }
}
