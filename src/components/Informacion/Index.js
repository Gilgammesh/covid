import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";
import coronavirus from "../../assets/img/coronavirus.png";
import sintomas from "../../assets/img/sintomas.jpg";
import prevencion1 from "../../assets/img/prevencion1.jpg";
import prevencion2 from "../../assets/img/prevencion2.jpg";
import salud from "../../assets/img/salud.png";
import Header from "../Header/Index";
import Hospitales from "./Hospitales";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: teal[50]
  },
  container: {
    marginTop: "120px",
    marginBottom: "10px",
    marginLeft: "20px",
    marginRight: "20px"
  },
  grid: {
    paddingTop: "8px"
  },
  containerTittle: {
    padding: theme.spacing(2),
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    background: "linear-gradient(0deg, #0F202C 30%, #247573 90%)",
    [theme.breakpoints.down("lg")]: {
      padding: "10px 20px"
    }
  },
  typoTittle: {
    color: "whitesmoke",
    fontWeight: "500",
    [theme.breakpoints.down("xl")]: {
      fontSize: "34px"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "34px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "28px"
    }
  },
  containerCard: {
    padding: "15px",
    height: "280px",
    [theme.breakpoints.down("sm")]: {
      height: "auto"
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto"
    }
  },
  imgSection1: {
    display: "block",
    margin: "auto",
    maxWidth: "300px"
  },
  imgSection2: {
    display: "block",
    margin: "auto",
    maxWidth: "320px"
  },
  imgSection3: {
    display: "block",
    margin: "auto",
    maxWidth: "280px"
  },
  imgSection4: {
    display: "block",
    margin: "auto",
    maxWidth: "240px"
  }
}));

const Index = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.container}>
        <Grid container className={classes.grid} spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
            <Paper elevation={3}>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                className={classes.containerTittle}
              >
                <Typography
                  variant="h3"
                  align="center"
                  className={classes.typoTittle}
                >
                  ¿Qué es el Coronavirus?
                </Typography>
              </Grid>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                className={classes.containerCard}
              >
                <Grid item xs={12} sm={6}>
                  <img
                    className={classes.imgSection1}
                    src={coronavirus}
                    alt="covid"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography style={{ marginBottom: "6px" }}>
                    Los coronavirus (CoV) son una amplia familia de virus que
                    pueden causar diversas afecciones, desde el resfriado común,
                    hasta infecciones respiratorias graves.
                  </Typography>
                  <Typography>
                    El nuevo coronavirus
                    (COVID-19) es una cepa no identificada previamente en
                    humanos.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
            <Paper elevation={3}>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                className={classes.containerTittle}
              >
                <Typography
                  variant="h3"
                  align="center"
                  className={classes.typoTittle}
                >
                  ¿Cómo se transmite?
                </Typography>
              </Grid>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                className={classes.containerCard}
              >
                <Grid item xs={12} sm={12}>
                  <Typography variant="body1" style={{ marginBottom: "6px" }}>
                    Se transmite de persona a persona a través de gotitas que
                    expulsa una persona enferma al hablar, toser o estornudar.
                  </Typography>
                  <Typography variant="body1" style={{ marginBottom: "6px" }}>
                    Las gotitas pueden ser inhaladas por las personas que están
                    cerca al enfermo y también quedarse en cualquier tipo de
                    superficie (pasamanos, mesas, lapiceros, entre otros) y ser
                    tocadas por las manos.
                  </Typography>
                  <Typography variant="body1">
                    El virus ingresa a nuestro organismo cuando nos tocamos los
                    ojos, la nariz y la boca con las manos sin lavar.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
            <Paper elevation={3}>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                className={classes.containerTittle}
              >
                <Typography
                  variant="h3"
                  align="center"
                  className={classes.typoTittle}
                >
                  Síntomas
                </Typography>
              </Grid>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                className={classes.containerCard}
              >
                <Grid item xs={12} sm={7}>
                  <img
                    className={classes.imgSection2}
                    src={sintomas}
                    alt="sintomas"
                  />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <Typography variant="body1" style={{ marginBottom: "6px" }}>
                    +  Fiebre Alta.
                  </Typography>
                  <Typography variant="body1" style={{ marginBottom: "6px" }}>
                    +  Escalofrios.
                  </Typography>
                  <Typography variant="body1" style={{ marginBottom: "6px" }}>
                    +  Estornudos.
                  </Typography>
                  <Typography variant="body1" style={{ marginBottom: "6px" }}>
                    +  Tos.
                  </Typography>
                  <Typography variant="body1" style={{ marginBottom: "6px" }}>
                    +  Dolor de Garganta.
                  </Typography>
                  <Typography variant="body1">
                    +  Complicación al respirar.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
            <Paper elevation={3}>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                className={classes.containerTittle}
              >
                <Typography
                  variant="h3"
                  align="center"
                  className={classes.typoTittle}
                >
                  Medidas Preventivas
                </Typography>
              </Grid>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                className={classes.containerCard}
              >
                <Grid item xs={12} sm={6}>
                  <img
                    className={classes.imgSection2}
                    src={prevencion1}
                    alt="prevencion"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body1" style={{ marginBottom: "6px" }}>
                    Informarse a través de fuentes confiables.
                  </Typography>
                  <Typography variant="body1">
                    Fomentar y aplicar las buenas prácticas de higiene
                    respiratoria, cúbrase la nariz y boca con el antebrazo o
                    pañuelo desechable al toser o estornudar. Elimine los
                    pañuelos en un tacho cerrado
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
            <Paper elevation={3}>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                className={classes.containerTittle}
              >
                <Typography
                  variant="h3"
                  align="center"
                  className={classes.typoTittle}
                >
                  Medidas Preventivas
                </Typography>
              </Grid>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                className={classes.containerCard}
              >
                <Grid item xs={12} sm={6}>
                  <img
                    className={classes.imgSection3}
                    src={prevencion2}
                    alt="prevencion"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body1" style={{ marginBottom: "6px" }}>
                    Lavarse las manos correctamente durante 20 segundos con agua
                    y jabón y no olvidarse de formar espuma.
                  </Typography>
                  <Typography variant="body1">
                    En caso de presentar fiebre, tos o dificultad al respirar
                    deberá acudir inmediatamente al tópico más cercano. No
                    automedicarse. Se abstendrá de brindar atención y evitará
                    contacto con otro personal y zonas públicas
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
            <Paper elevation={3}>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                className={classes.containerTittle}
              >
                <Typography
                  variant="h3"
                  align="center"
                  className={classes.typoTittle}
                >
                  Comunicación
                </Typography>
              </Grid>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                className={classes.containerCard}
              >
                <Grid item xs={12} sm={7}>
                  <img className={classes.imgSection4} src={salud} alt="113" />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <Typography variant="body1" style={{ marginBottom: "6px" }}>
                    Reportar cualquier situación, síntoma a la
                  </Typography>
                  <Typography variant="body1" style={{ fontWeight: "600" }}>
                    Línea 113 Salud.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Hospitales />
        </Grid>
      </div>
    </div>
  );
};

export default Index;
