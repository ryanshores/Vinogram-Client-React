import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWineGlassAlt } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid, faEllipsisH, faUser, faPlus } from '@fortawesome/free-solid-svg-icons'
import jwtDecode from 'jwt-decode';

import { setAuthorizationToken, setCurrentUser } from './store/actions/auth';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from './store';

library.add(faWineGlassAlt, faHeart, faHeartSolid, faComment, faEllipsisH, faUser, faPlus);

const store = configureStore();

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  // prevent someone from tampering with the key of jwtToken on localStorage
  try {
    store.dispatch( setCurrentUser( jwtDecode(localStorage.jwtToken) ) );
  } catch (error) {
    store.dispatch(setCurrentUser({}))
  }
}

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
