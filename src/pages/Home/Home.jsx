import { Button, Grid } from "@material-ui/core";
import classes from "./home.module.css";
import { TiWeatherSnow } from "react-icons/ti";
import { TiWeatherDownpour } from "react-icons/ti";
import { TiWeatherNight } from "react-icons/ti";
import CustomButton from "../../components/Button/Button.js";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Grid className={classes.layout} container lg={12}>
        <Grid className={classes.card} xs={9}>
          <div className={classes.icon1}>
            <TiWeatherSnow />
          </div>
          <div className={classes.icon2}>
            <TiWeatherNight />
          </div>
          <div className={classes.title}>Welcome to weather app</div>
          <div className={classes.desc}>
            Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque
            in ipsum id orci porta dapibus. Donec sollicitudin molestie
            malesuada. Nulla porttitor accumsan tincidunt. Quisque velit nisi,
            pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor
            eget felis porttitor volutpat. Vivamus suscipit tortor eget felis
            porttitor volutpat.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec rutrum congue leo eget malesuada. Donec
            rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut
            lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt.
            Curabitur aliquet quam id dui posuere blandit.
          </div>
          <div className={classes.button}>
            <Link to="/login" style={{textDecoration:"none"}}>
              <CustomButton title="See the weather" />
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Home;
