import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, compose } from "redux";
import { legacy_createStore as createstore } from "redux";
import {thunk} from "redux-thunk";
import Reducer from "./Reducer";
import { GoogleOAuthProvider } from '@react-oauth/google';
const store = createstore(Reducer, compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
     <GoogleOAuthProvider clientId="532880061241-14ru5hapdqumi4d7f83k7t9qs119qcck.apps.googleusercontent.com"> 
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </GoogleOAuthProvider> 
  </Provider>
);
