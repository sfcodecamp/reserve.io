import axios from 'axios';

import {GOOGLE_API, GET_YELP, RECIEVE_YELP,
  REMOVE_YELP, LAST_CITY, AUTH_USER, ERROR_YELP,
  UNAUTH_USER, TAB_INDEX, UPDATE_GUEST} from './types';

export function changeTab(index){
  return ({
    type: TAB_INDEX,
    payload: index
  })
}
