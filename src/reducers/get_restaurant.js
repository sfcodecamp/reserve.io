import { GET_RESTAURANT } from '../actions/types';

const INITIAL = { data: [], isFetching: false }

export default function(state = INITIAL, action){
  switch (action.type){
    case GET_RESTAURANT:
      console.log(action)
      return state

    case 'AVAILABILITY':

      return {...state,
        availability: {
          ...state.availability,
          [action.payload.id]: action.payload
        }
      }
    default:
      return state
  }

  return state;
}
