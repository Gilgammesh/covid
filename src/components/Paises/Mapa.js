import React from "react";
import NumberFormat from "react-number-format";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import marker from "../../assets/img/marker.png";

const useStyles = makeStyles(theme => ({
  paper: {
    height: "730px",
    [theme.breakpoints.down("sm")]: {
      height: "600px",
      marginBottom: "10px"
    },
    [theme.breakpoints.down("xs")]: {
      height: "500px",
      marginBottom: "10px"
    }
  },
  tittle: {
    padding: theme.spacing(1),
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    background: "linear-gradient(0deg, #0F202C 30%, #247573 90%)",
    color: "whitesmoke"
  },
  container: {
    display: "flex",
    width: "100%",
    margin: "0 auto",
    height: "680px",
    [theme.breakpoints.down("sm")]: {
      height: "554px"
    },
    [theme.breakpoints.down("xs")]: {
      height: "454px"
    }
  },
  map: {
    flex: "1"
  }
}));

const Mapa = params => {
  const { getPais, getPaises } = params;

  const classes = useStyles();

  // Stadias maps free en desarrollo, en produccion es pagada
  /*const url =
    "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png";*/

  // Libreria de mapas gratuita
  const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const attribution =
    "&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a>";

  const position = [getPais.latitud, getPais.longitud];
  const zoom = 6;
  const iconMarker = new Icon({
    iconUrl: marker,
    iconSize: [30, 30]
  });

  const markers = getPaises.map(ele => {
    if (ele.latitud && ele.longitud) {
      let desc;
      if (ele.casos === 1) {
        desc = "caso confirmado";
      } else {
        desc = "casos confirmados";
      }
      return (
        <Marker
          key={ele._id}
          position={[ele.latitud, ele.longitud]}
          icon={iconMarker}
        >
          <Popup>
            <div style={{ borderBottom: "1px solid white" }}>
              <h2
                style={{
                  color: "rgb(46, 160, 156)",
                  fontWeight: "700"
                }}
              >
                {ele.pais}
              </h2>
            </div>
            <div>
              <label
                style={{ color: "white", fontWeight: "600", fontSize: "20px" }}
              >
                <NumberFormat
                  value={ele.casos}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </label>
              &nbsp;&nbsp;
              <label style={{ color: "whitesmoke" }}>{desc}</label>
            </div>
          </Popup>
        </Marker>
      );
    }
    return null;
  });

  return (
    <Grid item xs={12} sm={12} lg={4} xl={4}>
      <Paper className={classes.paper} elevation={3}>
        <Typography className={classes.tittle} variant="h6" align="center">
          MAPA
        </Typography>
        <div className={classes.container}>
          <Map className={classes.map} center={position} zoom={zoom}>
            <TileLayer url={url} attribution={attribution} />
            {markers}
          </Map>
        </div>
      </Paper>
    </Grid>
  );
};

export default Mapa;
