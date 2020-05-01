import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase'
import rootReducer from './reducers';

const fbConfig = {
  apiKey: "AIzaSyBfMFBO8yjTVCGrfnA1xh1ZauAd1UUgO78",
  authDomain: "teyisabot.firebaseapp.com",
  databaseURL: "https://teyisabot.firebaseio.com",
  projectId: "teyisabot",
  storageBucket: "teyisabot.appspot.com",
  messagingSenderId: "268453339389",
  appId: "1:268453339389:web:36fae0ef6e95ba5e1c1e94",
  measurementId: "G-YES36XR1B1",
} // your firebase config
const middlewares = [
  thunk.withExtraArgument(getFirebase)
]
const store = createStore(
  rootReducer,
  // initialState,
  compose(
    applyMiddleware(...middlewares),
  )
);

export default fbConfig
export store