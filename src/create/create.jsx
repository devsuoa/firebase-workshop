import React from "react";
import { Formik, Field } from "formik";
import { useHistory } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Home from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styles from "./create.style";

export default (props) => {
  const history = useHistory();
  const classes = styles();

  const writeToDatabase = (values) => {};

  return (
    <div className={classes.wrapper}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">Create</Typography>
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
          initialValues={{ title: "", caption: "" }}
          onSubmit={(values, actions) => {
            writeToDatabase(values);
            actions.resetForm();
            actions.setSubmitting(false);
          }}
        >
          {({ handleSubmit, handleChange, values }) => (
            <form className={classes.form} onSubmit={handleSubmit}>
              <Field>
                {() => (
                  <TextField
                    fullWidth={true}
                    name={"title"}
                    label={"Title"}
                    type={"title"}
                    variant={"outlined"}
                    onChange={handleChange}
                    value={values.title}
                  />
                )}
              </Field>
              <Field>
                {() => (
                  <TextField
                    fullWidth={true}
                    multiline={true}
                    rows={8}
                    name={"description"}
                    label={"Description"}
                    type={"description"}
                    variant={"outlined"}
                    onChange={handleChange}
                    value={values.description}
                  />
                )}
              </Field>

              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
