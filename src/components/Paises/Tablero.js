import React from "react";
import Responsive from "react-responsive";
import NumberFormat from "react-number-format";
import ReactCountryFlag from "react-country-flag";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, Divider } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import {
  Legend,
  Series,
  Font,
  Label,
  PieChart,
  Connector
} from "devextreme-react/pie-chart";
import infectados from "../../assets/img/infectados.png";
import muertes from "../../assets/img/muertes.png";
import recuperados from "../../assets/img/recuperados.png";

const useStyles = makeStyles(theme => ({
  paperInfo: {
    height: "930px",
    [theme.breakpoints.down("sm")]: {
      height: "auto"
    }
  },
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
    padding: theme.spacing(2),
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      hmarginTop: "10px"
    }
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
  paperCardLeft: {
    background: grey[50],
    border: "1px solid #bdbdbd",
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(0)
    }
  },
  paperCardRight: {
    background: grey[50],
    border: "1px solid #bdbdbd",
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
      marginLeft: theme.spacing(0)
    }
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
  typoCardDescription: {
    paddingBottom: "5px",
    color: grey[700]
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
  const { getPais } = params;

  const classes = useStyles();

  const DesktopLg = props => <Responsive {...props} minWidth={1420} />;
  const Desktop = props => (
    <Responsive {...props} minWidth={992} maxWidth={1419} />
  );
  const Tablet = props => (
    <Responsive {...props} minWidth={768} maxWidth={991} />
  );
  const Mobile = props => <Responsive {...props} maxWidth={767} />;

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

  const dataActives = [
    { region: "Leves", val: getPais.casosActivos - getPais.casosCriticos },
    { region: "Criticos", val: getPais.casosCriticos }
  ];

  const dataClosed = [
    { region: "Recuperados", val: getPais.recuperados },
    { region: "Muertes", val: getPais.muertes }
  ];

  const customizeLabel = point => {
    return `${point.valueText} (${point.percentText})`;
  };

  return (
    <Grid item xs={12} sm={6} md={8} lg={6} xl={6}>
      <Paper className={classes.paperInfo} elevation={3}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          className={classes.containerPais}
        >
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
          <Typography
            variant="h3"
            align="center"
            className={classes.typoTittlePais}
          >
            {getPais.pais}
          </Typography>
        </Grid>
        <Divider />
        <Grid container direction="row" className={classes.containerCasos}>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
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
                value={getPais.casos}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
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
                value={getPais.muertes}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
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
                value={getPais.recuperados}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" className={classes.containerCasos_}>
          {isCasosHoy && (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
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
            </Grid>
          )}
          {isMuertesHoy && (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
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
            </Grid>
          )}
        </Grid>
        <Grid container direction="row" className={classes.containerCards}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Paper className={classes.paperCardLeft} elevation={2}>
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
              <div>
                <PieChart id="pie" palette="Material" dataSource={dataActives}>
                  <Series argumentField="region" valueField="val">
                    <Label
                      visible={true}
                      format="fixedPoint"
                      customizeText={customizeLabel}
                      backgroundColor="#0F202D"
                    >
                      <Connector visible={true} width={1} />
                    </Label>
                    <Font size={16} />
                  </Series>
                  <Legend
                    horizontalAlignment="center"
                    verticalAlignment="top"
                    itemTextPosition="right"
                  />
                </PieChart>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Paper className={classes.paperCardRight} elevation={2}>
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
                  value={getPais.muertes + getPais.recuperados}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.typoCardDescription}
              >
                Casos con un resultado
              </Typography>
              <div>
                <PieChart id="pie" palette="Bright" dataSource={dataClosed}>
                  <Series argumentField="region" valueField="val">
                    <Label
                      visible={true}
                      format="fixedPoint"
                      customizeText={customizeLabel}
                      backgroundColor="#0F202D"
                    >
                      <Connector visible={true} width={1} />
                    </Label>
                    <Font size={16} />
                  </Series>
                  <Legend
                    horizontalAlignment="center"
                    verticalAlignment="top"
                    itemTextPosition="right"
                  />
                </PieChart>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Tablero;