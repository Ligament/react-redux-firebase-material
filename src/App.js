import React from "react";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore"; // make sure you add this for firestore
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
// import { createFirestoreInstance } from 'redux-firestore';
import Home from "./Home";
import createStore from "./createStore";
import { firebase as fbConfig, reduxFirebase as rfConfig } from "./config";
import "./App.css";

// Initialize Firebase instance
firebase.initializeApp(fbConfig);

const initialState = window && window.__INITIAL_STATE__; // set initial state here
const store = createStore(initialState);

export default () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={rfConfig}
      dispatch={store.dispatch}
      // createFirestoreInstance={createFirestoreInstance}
    >
      <Home />
    </ReactReduxFirebaseProvider>
  </Provider>
);
