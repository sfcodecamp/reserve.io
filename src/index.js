import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import './index.css';
import { Provider } from 'react-redux';
// import Store from './store';
import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import reducers from './reducers';
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

// const StoreInstance = Store();

//This is for material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>,
 document.getElementById('root')
);
