import axios from 'axios';
import { GET_RESTAURANT, RESET_CARDS } from './types';

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
