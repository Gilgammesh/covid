import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";
import { useQuery } from "react-apollo";
import { GET_PAISES } from "./Querys";
import { Lottie } from "@crello/react-lottie";
import animationData from "../../assets/animations/covid.json";
import "./style.css";
import Header from "../Header/Index";
import Listado from "./Listado";
import Contenido from "./Contenido";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: teal[50]
  },
  root_: {
    flexGrow: 1
  },
  container: {
    marginTop: "120px",
    marginBottom: "10px",
    marginLeft: "20px",
    marginRight: "20px"
  },
  container_: {
    textAlign: "center"
  },
  containerLottie: {
    marginTop: "20px",
    width: "600px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
      width: "400px"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
      width: "320px"
    },
    display: "inline-block"
  },
  grid: {
    paddingTop: "8px"
  }
}));

const Index = () => {
  const [state, setState] = useState({
    _id: "",
    pais: "China"
  });

  const classes = useStyles();

  const { loading, data } = useQuery(GET_PAISES, {
    variables: {
      sortby: [
        {
          field: "casos",
          direction: "DESC"
        },
        {
          field: "pais",
          direction: "ASC"
        }
      ]
    }
  });

  useEffect(() => {
    if (data) {
      data.getPaises.filter((ele, index) => {
        if (index === 0) {
          setState({
            _id: ele._id,
            pais: ele.pais
          });
          return;
        }
        return;
      });
    }
  }, [data, setState]);

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
      <div className={classes.root_}>
        <Header />
        <div className={classes.container}>
          <div className={classes.container_}>
            <div className={classes.containerLottie}>
              <Lottie config={animationOptions} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const { getPaises } = data;

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.container}>
        <Grid container className={classes.grid} spacing={2}>
          <Listado state={state} setState={setState} getPaises={getPaises} />
          <Contenido state={state} getPaises={getPaises} />
        </Grid>
      </div>
    </div>
  );
};

export default Index;
