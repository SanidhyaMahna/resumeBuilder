import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './redux/rootReducer';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBT-65BVjU6n13XG-a3IHHGXkSC99LuvAU",
  authDomain: "resumebuilder-ec9a7.firebaseapp.com",
  projectId: "resumebuilder-ec9a7",
  storageBucket: "resumebuilder-ec9a7.appspot.com",
  messagingSenderId: "389843709932",
  appId: "1:389843709932:web:21d823d36a41c20d599ac9",
  measurementId: "G-8QCPCXG77B"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()

const reduxStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ getFirebase , getFirestore })),reduxFirestore(firebase))
);


ReactDOM.render(
  <BrowserRouter>
    <Provider store={reduxStore}>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={firebaseConfig}
        dispatch={reduxStore.dispatch}
        createFirestoreInstance={createFirestoreInstance}
      >
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);