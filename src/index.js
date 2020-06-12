import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import routes from "./utils/routes/routing";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyADU-w4-KX9IlxnvK-zxmO7WkZV7oqeNtU",
  authDomain: "gallery-app-22b53.firebaseapp.com",
  databaseURL: "https://gallery-app-22b53.firebaseio.com",
  projectId: "gallery-app-22b53",
  storageBucket: "gallery-app-22b53.appspot.com",
  messagingSenderId: "1050282241749",
  appId: "1:1050282241749:web:7b38fb740ecbf011223c5c",
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
