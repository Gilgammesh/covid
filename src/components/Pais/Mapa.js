import React from "react";
import NumberFormat from "react-number-format";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";
import { Map, Marker, Popup, TileLayer, Polygon } from "react-leaflet";
import { Icon } from "leaflet";
import marker from "../../assets/img/marker.png";

const useStyles = makeStyles(theme => ({
  paper: {
    height: "920px",
    [theme.breakpoints.down("sm")]: {
      height: "780px"
    },
    [theme.breakpoints.down("xs")]: {
      height: "600px"
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
    height: "870px",
    [theme.breakpoints.down("sm")]: {
      height: "730px"
    },
    [theme.breakpoints.down("xs")]: {
      height: "550px"
    }
  },
  map: {
    flex: "1"
  }
}));

const Mapa = params => {
  const { getPais, getRegiones, getRegiones_ } = params;

  const classes = useStyles();

  const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const attribution =
    "&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a>";

  const position = [getPais.latitud, getPais.longitud];
  let zoom = 6;
  if (window.innerWidth < 768) {
    zoom = 5;
  }
  const iconMarker = new Icon({
    iconUrl: marker,
    iconSize: [30, 30]
  });

  const polygons = getRegiones.map(ele => {
    if (ele.latitud && ele.longitud) {
      return (
        <Polygon
          key={ele._id}
          color="#000"
          weight="0.5"
          fillColor="#194F52"          
          opacity="0.8"
          positions={ele.poligono}
        />
      );
    }
    return null;
  });

  const polygons_ = getRegiones_.map(ele => {
    return (
      <Polygon
        key={ele._id}
        color="#000"
        weight="0.5"
        fillColor="whitesmoke"
        opacity="0.8"
        positions={ele.poligono}
      />
    );
  });

  const markers = getRegiones.map(ele => {
    if (ele.latitud && ele.longitud) {
      let descC, descM, descR;
      if (ele.casos === 1) {
        descC = "caso confirmado";
      } else {
        descC = "casos confirmados";
      }
      if (ele.muertes === 1) {
        descM = "muerte";
      } else {
        descM = "muertes";
      }
      if (ele.recuperados === 1) {
        descR = "recuperado";
      } else {
        descR = "recuperados";
      }
      return (
        <Marker
          key={ele._id}
          position={[ele.latitud, ele.longitud]}
          icon={iconMarker}
        >
          <Popup>
            <div>
              <h2 style={{ color: "white", fontWeight: "700" }}>
                {ele.region}
              </h2>
            </div>
            <div style={{ borderTop: "1px solid white" }}>
              <label
                style={{
                  color: "#2ea09c",
                  fontWeight: "600",
                  fontSize: "20px"
                }}
              >
                <NumberFormat
                  value={ele.casos}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </label>
              &nbsp;&nbsp;
              <label style={{ color: "#2ea09c", fontSize: "14px" }}>
                {descC}
              </label>
            </div>
            <div>
              <label
                style={{ color: "red", fontWeight: "600", fontSize: "20px" }}
              >
                <NumberFormat
                  value={ele.muertes}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </label>
              &nbsp;&nbsp;
              <label style={{ color: "red", fontSize: "14px" }}>{descM}</label>
            </div>
            <div>
              <label
                style={{ color: "green", fontWeight: "600", fontSize: "20px" }}
              >
                <NumberFormat
                  value={ele.recuperados}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </label>
              &nbsp;&nbsp;
              <label style={{ color: "green", fontSize: "14px" }}>
                {descR}
              </label>
            </div>
          </Popup>
        </Marker>
      );
    }
    return null;
  });

  return (
    <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
      <Paper className={classes.paper} elevation={3}>
        <Typography className={classes.tittle} variant="h6" align="center">
          MAPA
        </Typography>
        <div className={classes.container}>
          <Map className={classes.map} center={position} zoom={zoom}>
            <TileLayer url={url} attribution={attribution} />
            {polygons}
            {polygons_}
            {markers}
          </Map>
        </div>
      </Paper>
    </Grid>
  );
};

export default Mapa;
