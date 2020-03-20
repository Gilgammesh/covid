import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import { useQuery } from "react-apollo";
import { GET_PAIS } from "./Querys";
import { Lottie } from "@crello/react-lottie";
import animationData from "../../assets/animations/covid.json";
import Tablero from "./Tablero";
import Mapa from "./Mapa";

const useStyles = makeStyles(theme => ({
  paperInfo: {
    height: "930px"
  },
  container_: {
    textAlign: "center"
  },
  containerLottie: {
    marginTop: "30px",
    width: "500px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
      width: "400px"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
      width: "320px"
    },
    display: "inline-block"
  }
}));

const Contenido = params => {
  const { state, getPaises } = params;

  const classes = useStyles();

  const { loading, data } = useQuery(GET_PAIS, {
    variables: {
      filter: {
        pais: state.pais
      }
    }
  });

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  if (loading) {
    return (
      <Grid item xs={12} sm={6} md={8} lg={10} xl={10}>
        <Paper className={classes.paperInfo} elevation={3}>
          <Grid container justify="center" alignItems="center">
            <div className={classes.container_}>
              <div className={classes.containerLottie}>
                <Lottie config={animationOptions} />
              </div>
            </div>
          </Grid>
        </Paper>
      </Grid>
    );
  }

  const { getPais } = data;

  return (
    <>
      <Tablero getPais={getPais} getPaises={getPaises} />
      <Mapa getPais={getPais} getPaises={getPaises} />
    </>
  );
};

export default Contenido;
