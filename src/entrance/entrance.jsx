import React, { useEffect } from "react";
import { Formik, Field } from "formik";
import { useHistory } from "react-router-dom";
import * as firebase from "firebase";
import { firebaseAuth } from "../index";

import IconButton from "@material-ui/core/IconButton";
import Home from "@material-ui/icons/Home";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styles from "./entrance.styles";

function authenticate(values) {
  const { email, password } = values;
  firebaseAuth
    .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(function () {
      return firebaseAuth
        .signInWithEmailAndPassword(email, password)
        .catch(function (error) {
          console.log(error);
        });
    });
}

function signout() {
  firebaseAuth.signOut();
}

export default (props) => {
  const classes = styles();
  const history = useHistory();

  useEffect(() => {
    // auth state listener
    firebaseAuth.onAuthStateChanged(function (user) {
      if (user) {
        console.log(user);
      } else {
        console.log("no user");
      }
    });
  });

  return (
    <div className={classes.wrapper}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">Devs Gallery App</Typography>
          <IconButton
            className={classes.iconButton}
            onClick={() => history.push("/home")}
          >
            <Home />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.formContainer}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, actions) => {
            authenticate(values);
            actions.resetForm();
            actions.setSubmitting(false);
          }}
        >
          {({ handleSubmit, handleChange, values }) => (
            <form className={classes.form} onSubmit={handleSubmit}>
              <Typography className={classes.title} variant="h4">
                Welcome
              </Typography>
              <Field>
                {() => (
                  <TextField
                    fullWidth={true}
                    name={"email"}
                    label={"Email"}
                    type={"email"}
                    variant={"outlined"}
                    onChange={handleChange}
                    value={values.email}
                  />
                )}
              </Field>
              <Field>
                {() => (
                  <TextField
                    fullWidth={true}
                    name={"password"}
                    label={"Password"}
                    type={"password"}
                    variant={"outlined"}
                    onChange={handleChange}
                    value={values.password}
                  />
                )}
              </Field>
              <div className={classes.buttonContainer}>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => signout()}
                >
                  Sign out
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
