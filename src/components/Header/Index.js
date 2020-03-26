import React from "react";
import { useLocation } from "react-router-dom";
import Responsive from "react-responsive";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Hidden, Button } from "@material-ui/core";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PublicIcon from "@material-ui/icons/Public";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ExploreIcon from "@material-ui/icons/Explore";
import { teal } from "@material-ui/core/colors";
import covid from "../../assets/img/covid.png";
import empresa from "../../assets/img/empresa.png";

const useStyles = makeStyles(theme => ({
  appBar: {
    background: "transparent"
  },
  toolBarPrimary: {
    background: "linear-gradient(45deg, #0F202D 30%, #09141C 90%)"
  },
  imgCovid: {
    maxWidth: "45px",
    maxHeight: "45px"
  },
  imgEmpresa: {
    maxWidth: "180px"
  },
  title: {
    flexGrow: 1,
    marginLeft: "15px",
    color: "#c4e4f2",
    fontWeight: "600"
  },
  toolbarSecondary: {
    background: "linear-gradient(45deg, #36ABAA 30%, #6baaa9 90%)"
  },
  toolBarBtn: {
    marginRight: "10px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "5px"
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: "2px"
    },
    color: "#212121",
    backgroundColor: teal[100],
    "&:hover": {
      color: "#212121",
      backgroundColor: teal[50]
    }
  },
  toolBarActiveBtn: {
    marginRight: "10px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "5px"
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: "2px"
    },
    color: "#9fcce0",
    backgroundColor: "#09141C",
    "&:hover": {
      color: "#9fcce0",
      backgroundColor: "#0F202D"
    }
  }
}));

const Index = () => {
  const { pathname } = useLocation();

  const classes = useStyles();

  const Desktop = props => <Responsive {...props} minWidth={992} />;
  const Tablet = props => (
    <Responsive {...props} minWidth={768} maxWidth={991} />
  );
  const Mobile = props => <Responsive {...props} maxWidth={767} />;

  const menuActive = param => {
    if (pathname === param) {
      return classes.toolBarActiveBtn;
    } else if (pathname === "/" && param === "/pais") {
      return classes.toolBarActiveBtn;
    } else {
      return classes.toolBarBtn;
    }
  };
  const menuHref = param => {
    if (pathname === param) {
      return "#";
    } else if (pathname === "/" && param === "/pais") {
      return "#";
    } else {
      return param;
    }
  };

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar className={classes.toolBarPrimary}>
        <img className={classes.imgCovid} src={covid} alt="covid" />
        <Desktop>
          <Typography variant="h5" className={classes.title}>
            TABLERO DE INFORMACIÓN DE CORONAVIRUS
          </Typography>
        </Desktop>
        <Tablet>
          <Typography variant="h6" className={classes.title}>
            TABLERO DE INFORMACIÓN DE CORONAVIRUS
          </Typography>
        </Tablet>
        <Mobile>
          <Typography variant="h6" className={classes.title}>
            TABLERO DE INFORMACIÓN DE CORONAVIRUS
          </Typography>
        </Mobile>
        <Hidden smDown>
        <a href="https://www.facebook.com/santandertech/" target="blank">
          <img
            className={classes.imgEmpresa}
            src={empresa}
            alt="santandertech"
          />
          </a>
        </Hidden>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        <Button
          className={menuActive("/pais")}
          variant="contained"
          href={menuHref("/pais")}
          startIcon={<LocationCityIcon />}
        >
          Pais
        </Button>
        <Button
          className={menuActive("/paises")}
          variant="contained"
          href={menuHref("/paises")}
          startIcon={<ExploreIcon />}
        >
          Paises
        </Button>
        <Button
          className={menuActive("/global")}
          variant="contained"
          href={menuHref("/global")}
          startIcon={<PublicIcon />}
        >
          Global
        </Button>
        <Button
          className={menuActive("/informacion")}
          variant="contained"
          href={menuHref("/informacion")}
          startIcon={<MenuBookIcon />}
        >
          <Desktop>Información</Desktop>
          <Tablet>Información</Tablet>
          <Mobile>Info</Mobile>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Index;
