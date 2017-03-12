import cart from './cart';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  cart,
  form: formReducer
});
export default rootReducer;
