import classes from "./login.module.css";
import {
  Grid,
  IconButton,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import CustomButton from "../../components/Button/Button.js";

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
          <div style={{ marginBottom: "12px", marginTop: "35px" }}>
            <TextField
              className={classes.input}
              label="User Name"
              variant="outlined"
            />
          </div>
          <TextField
            className={classes.input}
            label="Password"
            variant="outlined"
          />
          <div style={{ marginTop: "40px" }}>
            <CustomButton title="Login" />
          </div>
          <div className={classes.signupCard}>
            <Link
              to="/rest-password"
              style={{
                textDecoration: "none",
                color: "rgba(228, 179, 116, 0.911)",
              }}
            >
              <Typography>Forgot Password</Typography>
            </Link>
            <Link
              to="/signup"
              style={{
                textDecoration: "none",
                color: "rgba(228, 179, 116, 0.911)",
              }}
            >
              {" "}
              <Typography>Signup</Typography>
            </Link>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default Login;
