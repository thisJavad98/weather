import classes from "./login.module.css";
import { Grid, IconButton, TextField, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);
  return (
    <>
      <Grid className={classes.layout} container lg={12}>
        <Link to="/">
          <div className={classes.backIcon}>
            <IconButton>
              <BiArrowBack />
            </IconButton>
          </div>
        </Link>
        <Grid className={classes.card} container lg={4} md={4} xs={10}>
          <div className={classes.icon}>
            <FaUserCircle />
          </div>
          <TextField label="User Name" color="white" variant="outlined" />
        </Grid>
      </Grid>
    </>
  );
};
export default Login;
