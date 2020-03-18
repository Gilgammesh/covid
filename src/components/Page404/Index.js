import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import { teal } from "@material-ui/core/colors";
import { Lottie } from "@crello/react-lottie";
import animationData from "../../assets/animations/covid.json";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: teal[50]
  },
  root_: {
    flexGrow: 1,
    background: teal[50]
  },
  container: {
    padding: theme.spacing(2)
  },
  container_: {
    textAlign: "center"
  },
  containerLottie: {
    width: "600px",
    [theme.breakpoints.down("sm")]: {
      width: "400px"
    },
    [theme.breakpoints.down("xs")]: {
      width: "320px"
    },
    display: "inline-block"
  },
  typo: {
    marginBottom: "20px"
  },
  btn: {
    color: "#9fcce0",
    backgroundColor: "#09141C",
    "&:hover": {
      color: "#9fcce0",
      backgroundColor: "#0F202D"
    }
  }
}));

const Index = () => {
  const classes = useStyles();

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className={classes.root_}>
      <div className={classes.container}>
        <div className={classes.container_}>
          <div className={classes.containerLottie}>
            <Lottie config={animationOptions} />
            <Typography variant="h5" align="center" className={classes.typo}>
              Si continúa por este camino, se puede contagiar!!
            </Typography>
            <Button
              className={classes.btn}
              variant="contained"
              href="/pais"
              startIcon={<KeyboardReturnIcon />}
            >
              Regresar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
