import React from "react";
import Responsive from "react-responsive";
import NumberFormat from "react-number-format";
import ReactCountryFlag from "react-country-flag";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, Divider } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import {
  Chart,
  SeriesTemplate,
  CommonSeriesSettings,
  Title,
  Legend,
  Label
} from "devextreme-react/chart";
import Tabla from "./Tabla";
import infectadosImg from "../../assets/img/infectados.png";
import muertesImg from "../../assets/img/muertes.png";
import recuperadosImg from "../../assets/img/recuperados.png";
import descartadosImg from "../../assets/img/descartar.png";
import noFlagImg from "../../assets/img/no-flag.png";

const useStyles = makeStyles(theme => ({
  containerPais: {
    padding: theme.spacing(2),
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    background: "linear-gradient(0deg, #0F202C 30%, #247573 90%)",
    [theme.breakpoints.down("lg")]: {
      padding: "10px 20px"
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
  containerCards: {
    padding: theme.spacing(2)
  },
  typoTittlePais: {
    color: "whitesmoke",
    fontWeight: "500",
    [theme.breakpoints.down("lg")]: {
      fontSize: "38px"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "34px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "28px"
    }
  },
  typoTittleRanking: {
    color: "whitesmoke",
    fontWeight: "400",
    [theme.breakpoints.down("lg")]: {
      fontSize: "32px"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "22px"
    }
  },
  typoTittleRanking_: {
    color: "#2ea09c",
    fontWeight: "500",
    [theme.breakpoints.down("lg")]: {
      fontSize: "32px"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "22px"
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
  typoDescartados: {
    color: "orange",
    fontWeight: "500",
    [theme.breakpoints.down("lg")]: {
      fontSize: "28px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "26px"
    }
  },
  typoCasosHoy: {
    color: "white",
    fontWeight: "500",
    background: "#2ea09c",
    margin: "0 30px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "28px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "26px"
    }
  },
  typoMuertesHoy: {
    color: "white",
    fontWeight: "500",
    background: "#d50000",
    margin: "0 30px",
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
  paperCard: {
    border: "1px solid #bdbdbd"
  },
  typoCardTittle: {
    background: grey[100],
    padding: theme.spacing(1),
    color: "#0C1924",
    fontWeight: "400"
  },
  typoCardNumber: {
    paddingTop: "15px",
    paddingBottom: "5px",
    color: "#0F202C",
    fontWeight: "500"
  },
  typoCardNumberLeves: {
    paddingTop: "15px",
    paddingBottom: "5px",
    color: "#36B2F5",
    fontWeight: "400"
  },
  typoCardNumberCriticos: {
    paddingTop: "15px",
    paddingBottom: "5px",
    color: "orangered",
    fontWeight: "400"
  },
  typoCardNumberRecuperados: {
    paddingTop: "15px",
    paddingBottom: "5px",
    color: "#70A802",
    fontWeight: "400"
  },
  typoCardNumberMuertes: {
    paddingTop: "15px",
    paddingBottom: "5px",
    color: "#d50000",
    fontWeight: "400"
  },
  typoCardDescription: {
    paddingBottom: "5px",
    color: grey[700]
  },
  containerChart: {
    padding: theme.spacing(2)
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
  const { getPaises, getPais, getRegiones } = params;

  const classes = useStyles();

  const DesktopLg = props => <Responsive {...props} minWidth={1420} />;
  const Desktop = props => (
    <Responsive {...props} minWidth={992} maxWidth={1419} />
  );
  const Tablet = props => (
    <Responsive {...props} minWidth={768} maxWidth={991} />
  );
  const Mobile = props => <Responsive {...props} maxWidth={767} />;

  let ranking = 0;
  getPaises.map((ele, index) => {
    if (ele.pais === "Peru") {
      ranking = index + 1;
    }
    return null;
  });
  const total = getPaises.length;

  let isCasosHoy;
  let isMuertesHoy;
  if (
    getPais.casosHoy === null ||
    getPais.casosHoy === "" ||
    getPais.casosHoy === 0
  ) {
    isCasosHoy = false;
  } else {
    isCasosHoy = true;
  }
  if (
    getPais.muertesHoy === null ||
    getPais.muertesHoy === "" ||
    getPais.muertesHoy === 0
  ) {
    isMuertesHoy = false;
  } else {
    isMuertesHoy = true;
  }

  let bandera;
  if (getPais.bandera) {
    bandera = (
      <>
        <DesktopLg>
          <ReactCountryFlag
            countryCode={getPais.bandera}
            style={{
              width: "4em",
              height: "4em",
              marginRight: "30px"
            }}
            svg
          />
        </DesktopLg>
        <Desktop>
          <ReactCountryFlag
            countryCode={getPais.bandera}
            style={{
              width: "3em",
              height: "3em",
              marginRight: "30px"
            }}
            svg
          />
        </Desktop>
        <Tablet>
          <ReactCountryFlag
            countryCode={getPais.bandera}
            style={{
              width: "3em",
              height: "3em",
              marginRight: "20px"
            }}
            svg
          />
        </Tablet>
        <Mobile>
          <ReactCountryFlag
            countryCode={getPais.bandera}
            style={{
              width: "2em",
              height: "2em",
              marginRight: "10px"
            }}
            svg
          />
        </Mobile>
      </>
    );
  } else {
    bandera = (
      <>
        <DesktopLg>
          <img
            style={{ maxWidth: "54px", marginRight: "10px" }}
            src={noFlagImg}
            alt=""
          />
        </DesktopLg>
        <Desktop>
          <img
            style={{ maxWidth: "42px", marginRight: "10px" }}
            src={noFlagImg}
            alt=""
          />
        </Desktop>
        <Tablet>
          <img
            style={{ maxWidth: "36px", marginRight: "10px" }}
            src={noFlagImg}
            alt=""
          />
        </Tablet>
        <Mobile>
          <img
            style={{ maxWidth: "28px", marginRight: "10px" }}
            src={noFlagImg}
            alt=""
          />
        </Mobile>
      </>
    );
  }

  const casos =
    getPais.casos_ >= getPais.casos ? getPais.casos_ : getPais.casos;
  const muertes =
    getPais.muertes_ >= getPais.muertes ? getPais.muertes_ : getPais.muertes;
  const recuperados =
    getPais.recuperados_ >= getPais.recuperados
      ? getPais.recuperados_
      : getPais.recuperados;

  const heightChart = getRegiones.length * 30 + 100;

  return (
    <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
      <Paper className={classes.paperInfo} elevation={3}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-end"
          className={classes.containerPais}
        >
          <Grid item xs={5}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              {bandera}
              <Typography
                variant="h3"
                align="center"
                className={classes.typoTittlePais}
              >
                {getPais.pais}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={7}>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <Typography
                variant="h4"
                align="center"
                className={classes.typoTittleRanking}
              >
                Ranking :&nbsp;&nbsp;
              </Typography>
              <Typography
                variant="h4"
                align="center"
                className={classes.typoTittleRanking_}
              >
                {ranking} de {total}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid container direction="row" className={classes.containerCasos}>
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <img className={classes.img} src={infectadosImg} alt="casos" />
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
                value={casos}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <img className={classes.img} src={muertesImg} alt="muertes" />
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
                value={muertes}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <img
              className={classes.img}
              src={recuperadosImg}
              alt="recuperados"
            />
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
                value={recuperados}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <img
              className={classes.img}
              src={descartadosImg}
              alt="descartados"
            />
            <Typography
              variant="h5"
              align="center"
              className={classes.typoTittleCasos}
            >
              Casos Descartados
            </Typography>
            <Typography
              variant="h4"
              align="center"
              className={classes.typoDescartados}
            >
              <NumberFormat
                value={getPais.casosDescartados}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" className={classes.containerCasos_}>
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            {isCasosHoy && (
              <>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.typoTittleCasos}
                >
                  Casos de Hoy
                </Typography>
                <Typography
                  variant="h4"
                  align="center"
                  className={classes.typoCasosHoy}
                >
                  +&nbsp;
                  <NumberFormat
                    value={getPais.casosHoy}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </Typography>
              </>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            {isMuertesHoy && (
              <>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.typoTittleCasos}
                >
                  Muertes de Hoy
                </Typography>
                <Typography
                  variant="h4"
                  align="center"
                  className={classes.typoMuertesHoy}
                >
                  +&nbsp;
                  <NumberFormat
                    value={getPais.muertesHoy}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </Typography>
              </>
            )}
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.containerCards}
          spacing={3}
        >
          <Grid item xs={12} sm={10} md={6}>
            <Paper className={classes.paperCard} elevation={2}>
              <Typography
                variant="h5"
                align="center"
                className={classes.typoCardTittle}
              >
                Casos Activos
              </Typography>
              <Divider />
              <Typography
                variant="h4"
                align="center"
                className={classes.typoCardNumber}
              >
                <NumberFormat
                  value={getPais.casosActivos}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.typoCardDescription}
              >
                Pacientes actualmente infectados
              </Typography>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12} sm={10} md={6}>
                  <Typography
                    variant="h5"
                    align="center"
                    className={classes.typoCardNumberLeves}
                  >
                    <NumberFormat
                      value={getPais.casosActivos - getPais.casosCriticos}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                    <NumberFormat
                      value={
                        ((getPais.casosActivos - getPais.casosCriticos) * 100) /
                        getPais.casosActivos
                      }
                      displayType={"text"}
                      decimalScale={2}
                      fixedDecimalScale={true}
                      prefix={" ("}
                      suffix={"%)"}
                    />
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    className={classes.typoCardDescription}
                  >
                    Leves
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={10} md={6}>
                  <Typography
                    variant="h5"
                    align="center"
                    className={classes.typoCardNumberCriticos}
                  >
                    <NumberFormat
                      value={getPais.casosCriticos}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                    <NumberFormat
                      value={
                        (getPais.casosCriticos * 100) / getPais.casosActivos
                      }
                      displayType={"text"}
                      decimalScale={2}
                      fixedDecimalScale={true}
                      prefix={" ("}
                      suffix={"%)"}
                    />
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    className={classes.typoCardDescription}
                  >
                    Críticos
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={6}>
            <Paper className={classes.paperCard} elevation={2}>
              <Typography
                variant="h5"
                align="center"
                className={classes.typoCardTittle}
              >
                Casos Cerrados
              </Typography>
              <Divider />
              <Typography
                variant="h4"
                align="center"
                className={classes.typoCardNumber}
              >
                <NumberFormat
                  value={muertes + recuperados}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.typoCardDescription}
              >
                Caso{muertes + recuperados > 1 && "s"} con un
                resultado
              </Typography>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12} sm={10} md={6}>
                  <Typography
                    variant="h5"
                    align="center"
                    className={classes.typoCardNumberRecuperados}
                  >
                    <NumberFormat
                      value={recuperados}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                    <NumberFormat
                      value={
                        (recuperados * 100) /
                        (muertes + recuperados)
                      }
                      displayType={"text"}
                      decimalScale={2}
                      fixedDecimalScale={true}
                      prefix={" ("}
                      suffix={"%)"}
                    />
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    className={classes.typoCardDescription}
                  >
                    Recuperados
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={10} md={6}>
                  <Typography
                    variant="h5"
                    align="center"
                    className={classes.typoCardNumberMuertes}
                  >
                    <NumberFormat
                      value={muertes}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                    <NumberFormat
                      value={
                        (muertes * 100) /
                        (muertes + recuperados)
                      }
                      displayType={"text"}
                      decimalScale={2}
                      fixedDecimalScale={true}
                      prefix={" ("}
                      suffix={"%)"}
                    />
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    className={classes.typoCardDescription}
                  >
                    Muertes
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.containerChart}>
          <Paper elevation={3}>
            <Chart
              dataSource={getRegiones}
              id="chart"
              palette="Bright"
              rotated={true}
              barGroupWidth={28}
              style={{ height: `${heightChart}px` }}
            >
              <CommonSeriesSettings
                argumentField="region"
                valueField="casos"
                type="bar"
                ignoreEmptyPoints={true}
              >
                <Label visible={true} backgroundColor="#123039" />
              </CommonSeriesSettings>
              <SeriesTemplate nameField="region" />
              <Legend visible={false} />
              <Title text="Casos por Regiones" />
            </Chart>
          </Paper>
        </Grid>
        <Tabla getRegiones={getRegiones} />
      </Paper>
    </Grid>
  );
};

export default Tablero;
