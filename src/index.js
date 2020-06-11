import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import routes from "./utils/routes/routing";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_A55BZVx-2ooULgzwUaeL1Jf7g1QKvkA",
  authDomain: "gallery-demo-1a44b.firebaseapp.com",
  databaseURL: "https://gallery-demo-1a44b.firebaseio.com",
  projectId: "gallery-demo-1a44b",
  storageBucket: "gallery-demo-1a44b.appspot.com",
  messagingSenderId: "1018056785989",
  appId: "1:1018056785989:web:82048246f14ba6ea03a32c",
  measurementId: "G-7LK2DE2GZZ",
};

firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebase.auth();
export const firebaseFirestore = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {routes.map((prop, key) => {
        return (
          <Route
            key={prop.path}
            exact={prop.exact}
            path={prop.path}
            component={prop.component}
          />
        );
      })}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
