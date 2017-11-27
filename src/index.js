import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { generateParticipants } from './actions';

const store = createStore(reducers);
store.dispatch(generateParticipants());

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root')
);
registerServiceWorker();
