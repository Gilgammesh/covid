import React from "react";
import NumberFormat from "react-number-format";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import infectados from "../../assets/img/infectados.png";
import muertes from "../../assets/img/muertes.png";
import recuperados from "../../assets/img/recuperados.png";
import activos from "../../assets/img/active.png";
import criticos from "../../assets/img/critical.png";

const useStyles = makeStyles(theme => ({
  paperInfo: {},
  containerPais: {
    padding: theme.spacing(2),
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    background: "linear-gradient(0deg, #0F202C 30%, #247573 90%)",
    [theme.breakpoints.down("lg")]: {
      padding: "10px 20px"
    }
  },
  typoTittlePais: {
    color: "whitesmoke",
    fontWeight: "500",
    [theme.breakpoints.down("xl")]: {
      fontSize: "38px"
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "36px"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "34px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "28px"
    }
  },
  containerCasos: {
    padding: theme.spacing(2),
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
      marginTop: "10px"
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1),
      marginTop: "10px"
    }
  },
  typoTittleCasos: {
    color: "#0C1924",
    fontWeight: "400",
    [theme.breakpoints.down("lg")]: {
      fontSize: "18px"
    }
  },
  typoCasos: {
    color: "#2ea09c",
    fontWeight: "500",
    [theme.breakpoints.down("lg")]: {
      fontSize: "28px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "26px"
    }
  },
  typoMuertes: {
    color: "#d50000",
    fontWeight: "500",
    [theme.breakpoints.down("lg")]: {
      fontSize: "28px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "26px"
    }
  },
  typoRecuperados: {
    color: "#70A802",
    fontWeight: "500",
    [theme.breakpoints.down("lg")]: {
      fontSize: "28px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "26px"
    }
  },
  typoActivos: {
    color: "#0288d1",
    fontWeight: "500",
    [theme.breakpoints.down("lg")]: {
      fontSize: "28px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "26px"
    }
  },
  typoCriticos: {
    color: "orange",
    fontWeight: "500",
    [theme.breakpoints.down("lg")]: {
      fontSize: "28px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "26px"
    }
  },
  img: {
    display: "block",
    margin: "auto",
    maxWidth: "40px",
    maxHeight: "40px"
  },
  typoCardTittle: {
    background: grey[100],
    padding: theme.spacing(1),
    color: "#0C1924",
    fontWeight: "400"
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

const Tablero = params => {
  const { getPaises } = params;

  const classes = useStyles();

  let casosT = 0;
  let muertesT = 0;
  let recuperadosT = 0;
  let activosT = 0;
  let criticosT = 0;

  getPaises.map(ele => {
    if (ele.casos) {
      casosT += ele.casos;
    }
    if (ele.muertes) {
      muertesT += ele.muertes;
    }
    if (ele.recuperados) {
      recuperadosT += ele.recuperados;
    }
    if (ele.casosActivos) {
      activosT += ele.casosActivos;
    }
    if (ele.casosCriticos) {
      criticosT += ele.casosCriticos;
    }
    return null;
  });

  return (
    <Grid item xs={12}>
      <Paper className={classes.paperInfo} elevation={3}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          className={classes.containerPais}
        >
          <Typography
            variant="h3"
            align="center"
            className={classes.typoTittlePais}
          >
            Estadísticas Mundiales
          </Typography>
        </Grid>
        <Grid container direction="row" className={classes.containerCasos}>
          <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
            <img className={classes.img} src={infectados} alt="casos" />
            <Typography
              variant="h5"
              align="center"
              className={classes.typoTittleCasos}
            >
              Casos Confirmados
            </Typography>
            <Typography
              variant="h4"
              align="center"
              className={classes.typoCasos}
            >
              <NumberFormat
                value={casosT}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
            <img className={classes.img} src={muertes} alt="muertes" />
            <Typography
              variant="h5"
              align="center"
              className={classes.typoTittleCasos}
            >
              Muertes
            </Typography>
            <Typography
              variant="h4"
              align="center"
              className={classes.typoMuertes}
            >
              <NumberFormat
                value={muertesT}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
            <img className={classes.img} src={recuperados} alt="recuperados" />
            <Typography
              variant="h5"
              align="center"
              className={classes.typoTittleCasos}
            >
              Recuperados
            </Typography>
            <Typography
              variant="h4"
              align="center"
              className={classes.typoRecuperados}
            >
              <NumberFormat
                value={recuperadosT}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={1} xl={1} />
          <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
            <img className={classes.img} src={activos} alt="activos" />
            <Typography
              variant="h5"
              align="center"
              className={classes.typoTittleCasos}
            >
              Casos Activos
            </Typography>
            <Typography
              variant="h4"
              align="center"
              className={classes.typoActivos}
            >
              <NumberFormat
                value={activosT}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
            <img className={classes.img} src={criticos} alt="criticos" />
            <Typography
              variant="h5"
              align="center"
              className={classes.typoTittleCasos}
            >
              Casos Cŕiticos
            </Typography>
            <Typography
              variant="h4"
              align="center"
              className={classes.typoCriticos}
            >
              <NumberFormat
                value={criticosT}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Tablero;
