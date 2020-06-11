import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  wrapper: {
    height: "100vh",
    width: "100%",
  },
  formContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  iconButton: {
    color: "white",
  },
  form: {
    height: "350px",
    width: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: theme.palette.primary.main,
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  },
}));
