import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import styles from "./home.style";

export default (props) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);
  const history = useHistory();
  const classes = styles();

  const subscribeToDatabase = () => {};

  const fetchData = () => {};

  // useEffect(() => {

  // }, [user]);

  // // Auth state listener
  // useEffect(() => {
  //   firebaseAuth.onAuthStateChanged(function (user) {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       console.log("no user");
  //     }
  //   });
  // }, []);

  return (
    <div className={classes.wrapper}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">Home</Typography>
          <IconButton
            className={classes.iconButton}
            onClick={() => history.push("/create")}
          >
            <AddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.contentContainer}>
        <Grid container spacing={3}>
          {data.length > 0 ? (
            data.map((post) => {
              console.log(post);
              return (
                <Grid xs={12} sm={6} med={4} lg={4} item>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={post.image}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {post.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {post.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                      <Button size="small" color="primary">
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })
          ) : (
            <Grid item>
              <Typography variant="h4">No posts yet!</Typography>
            </Grid>
          )}
        </Grid>
      </div>
    </div>
  );
};
