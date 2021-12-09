import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import createStyles from "@material-ui/styles/createStyles";

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      fontSize: 16,
      height: 48,
      marginBottom: 16,
      width: 256,
    },
  })
);

const PrimaryButton = (props) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      variant="contained"
      color={props.color}
      onClick={() => props.onClick()}
    >
      {props.label}
    </Button>
  );
};

export default PrimaryButton;
