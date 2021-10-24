import { Button } from "@material-ui/core";
import classes from "./ButtonStyle.module.css";

const CustomButton = ({ title }) => {
  return (
    <>
      <Button variant="contained" className={classes.btn}>
        {title}
      </Button>
    </>
  );
};
export default CustomButton;
