import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import GetRestaurant from './get_restaurant';

const rootReducer = combineReducers({
  form: formReducer,
  restaurants: GetRestaurant,
});
export default rootReducer;
