import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  wrapper: {
    height: "100vh",
    width: "100%",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  iconButton: {
    color: "white",
  },
  contentContainer: {
    marginTop: "4rem",
    padding: "2rem",
    height: "100%",
    maxWidth: "100%",
  },
  title: {
    color: theme.palette.primary.main,
  },
  media: {
    height: 200,
  },
}));
