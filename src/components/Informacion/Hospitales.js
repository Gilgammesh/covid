import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, Divider, Link } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import hospital from "../../assets/img/hospital.png";

const useStyles = makeStyles(theme => ({
  paperInfo: {
    height: "auto"
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
  imgHosp: {
    display: "block",
    margin: "auto",
    maxWidth: "70px",
    maxHeight: "70px"
  },
  paperCard: {
    border: "1px solid #bdbdbd"
  },
  typoCardDescription: {
    paddingBottom: "5px",
    color: grey[700]
  },
  typoHospital: {
    color: "#333",
    fontSize: "30px",
    fontWeight: "400",
    marginBottom: "5px"
  },
  typoCardHospitalTittle: {
    background: "linear-gradient(0deg, #184B50 30%, #247573 90%)",
    padding: theme.spacing(1),
    color: "whitesmoke",
    fontWeight: "400"
  },
  typoCardHospitalDescription: {
    paddingBottom: "5px",
    color: grey[900]
  }
}));

const Tablero = () => {

  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <Paper className={classes.paperInfo} elevation={3}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.containerCasos}
        >
          <Grid item xs={12}>
            <img className={classes.imgHosp} src={hospital} alt="hospital" />
            <Typography
              variant="h4"
              align="center"
              className={classes.typoHospital}
            >
              Hospitales
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className={classes.typoCardDescription}
            >
              Hospitales preparados para atención de casos por infección con
              Coronavirus.
            </Typography>
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
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Paper className={classes.paperCard} elevation={2}>
              <Typography
                variant="h5"
                align="center"
                className={classes.typoCardHospitalTittle}
              >
                Hospital Dos de Mayo
              </Typography>
              <Divider />
              <Typography
                variant="body1"
                align="center"
                className={classes.typoCardHospitalDescription}
              >
                <span style={{ fontWeight: "500" }}>Direccion:</span> Av. Miguel
                Grau cuadra 13, Cercado de Lima 15003
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.typoCardHospitalDescription}
              >
                <span style={{ fontWeight: "500" }}>Dirección: </span>
                <Link
                  href="https://goo.gl/maps/VSEmzg6gazimHbgY9"
                  target="_blank"
                  rel="noopener"
                  color="error"
                >
                  Google Maps
                </Link>
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.typoCardHospitalDescription}
              >
                <span style={{ fontWeight: "500" }}>Web: </span>
                <Link
                  href="http://hdosdemayo.gob.pe/portal/"
                  target="_blank"
                  rel="noopener"
                >
                  http://hdosdemayo.gob.pe/portal/
                </Link>
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.typoCardHospitalDescription}
              >
                <span style={{ fontWeight: "500" }}>Teléfonos:</span> 328-0028
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Paper className={classes.paperCard} elevation={2}>
              <Typography
                variant="h5"
                align="center"
                className={classes.typoCardHospitalTittle}
              >
                Hospital Hipólito Unanue
              </Typography>
              <Divider />
              <Typography
                variant="body1"
                align="center"
                className={classes.typoCardHospitalDescription}
              >
                <span style={{ fontWeight: "500" }}>Direccion:</span> Av. Cesar
                Vallejo 1390, El Agustino 15007
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.typoCardHospitalDescription}
              >
                <span style={{ fontWeight: "500" }}>Dirección: </span>
                <Link
                  href="https://goo.gl/maps/3RQjT3jLkznJ4S4EA"
                  target="_blank"
                  rel="noopener"
                  color="error"
                >
                  Google Maps
                </Link>
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.typoCardHospitalDescription}
              >
                <span style={{ fontWeight: "500" }}>Web: </span>
                <Link
                  href="http://www.hnhu.gob.pe/Inicio/"
                  target="_blank"
                  rel="noopener"
                >
                  http://www.hnhu.gob.pe/Inicio/
                </Link>
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.typoCardHospitalDescription}
              >
                <span style={{ fontWeight: "500" }}>Teléfonos:</span> 362-5700
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Paper className={classes.paperCard} elevation={2}>
              <Typography
                variant="h5"
                align="center"
                className={classes.typoCardHospitalTittle}
              >
                Hospital Villa el Salvador – Lima Sur
              </Typography>
              <Divider />
              <Typography
                variant="body1"
                align="center"
                className={classes.typoCardHospitalDescription}
              >
                <span style={{ fontWeight: "500" }}>Direccion:</span> Av. 200
                Millas, Villa EL Salvador 15837
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.typoCardHospitalDescription}
              >
                <span style={{ fontWeight: "500" }}>Dirección: </span>
                <Link
                  href="https://g.page/HevesOficial?share"
                  target="_blank"
                  rel="noopener"
                  color="error"
                >
                  Google Maps
                </Link>
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.typoCardHospitalDescription}
              >
                <span style={{ fontWeight: "500" }}>Web: </span>
                <Link
                  href="https://www.heves.gob.pe/portal/"
                  target="_blank"
                  rel="noopener"
                >
                  https://www.heves.gob.pe/portal/
                </Link>
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.typoCardHospitalDescription}
              >
                <span style={{ fontWeight: "500" }}>Teléfonos:</span> 640-9875
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Paper className={classes.paperCard} elevation={2}>
              <Typography
                variant="h5"
                align="center"
                className={classes.typoCardHospitalTittle}
              >
                Sergio E. Bernales – Lima Norte
              </Typography>
              <Divider />
              <Typography
                variant="body1"
                align="center"
                className={classes.typoCardHospitalDescription}
              >
                <span style={{ fontWeight: "500" }}>Direccion:</span> Calle Los
                Nardos 102, Comas 15324
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.typoCardHospitalDescription}
              >
                <span style={{ fontWeight: "500" }}>Dirección: </span>
                <Link
                  href="https://goo.gl/maps/uwrYMCz5DFM7SXDq9"
                  target="_blank"
                  rel="noopener"
                  color="error"
                >
                  Google Maps
                </Link>
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.typoCardHospitalDescription}
              >
                <span style={{ fontWeight: "500" }}>Web: </span>
                <Link
                  href="https://portal.hnseb.gob.pe/"
                  target="_blank"
                  rel="noopener"
                >
                  https://portal.hnseb.gob.pe/
                </Link>
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.typoCardHospitalDescription}
              >
                <span style={{ fontWeight: "500" }}>Teléfonos:</span> 558-0186
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Paper className={classes.paperCard} elevation={2}>
              <Typography
                variant="h5"
                align="center"
                className={classes.typoCardHospitalTittle}
              >
                Hospital de Ate Vitarte – Lima Este
              </Typography>
              <Divider />
              <Typography
                variant="body1"
                align="center"
                className={classes.typoCardHospitalDescription}
              >
                <span style={{ fontWeight: "500" }}>Direccion:</span> Carr.
                Central 506, Ate 15491
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.typoCardHospitalDescription}
              >
                <span style={{ fontWeight: "500" }}>Dirección: </span>
                <Link
                  href="https://goo.gl/maps/v2uxBJCGcVjkqUuv8"
                  target="_blank"
                  rel="noopener"
                  color="error"
                >
                  Google Maps
                </Link>
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.typoCardHospitalDescription}
              >
                <span style={{ fontWeight: "500" }}>Web: </span>
                <Link
                  href="http://www.hospitalvitarte.gob.pe/portal/"
                  target="_blank"
                  rel="noopener"
                >
                  http://www.hospitalvitarte.gob.pe/portal/
                </Link>
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className={classes.typoCardHospitalDescription}
              >
                <span style={{ fontWeight: "500" }}>Teléfonos:</span> 351-4484
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Tablero;
