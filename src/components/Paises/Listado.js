import React, { useState } from "react";
import NumberFormat from "react-number-format";
import ReactCountryFlag from "react-country-flag";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  InputBase,
  IconButton
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import noFlag from "../../assets/img/no-flag.png";

const useStyles = makeStyles(theme => ({
  gridTotal: {
    marginBottom: "10px"
  },
  paperTitle: {
    padding: "5px 10px",
    color: "#0C1924"
  },
  paperList: {
    padding: "10px 0",
    color: "#0C1924"
  },
  totalTitle: {
    color: "#0C1924",
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px"
    }
  },
  totalNumber: {
    color: "#2ea09c",
    fontWeight: "700",
    [theme.breakpoints.down("xl")]: {
      fontSize: "42px"
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "40px"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "35px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px"
    }
  },
  containerSearch: {
    margin: theme.spacing(1)
  },
  search: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center"
  },
  inputSearch: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButtonSearch: {
    padding: 10
  },
  dividerSearch: {
    height: 28,
    margin: 4
  },
  list: {
    overflow: "auto",
    height: "550px",
    [theme.breakpoints.down("sm")]: {
      height: "400px"
    },
    [theme.breakpoints.down("xs")]: {
      height: "250px"
    }
  },
  listadoTitle: {
    color: "#0C1924",
    fontWeight: "600",
    [theme.breakpoints.down("lg")]: {
      fontSize: "15px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px"
    }
  },
  listItem: {
    color: "#0C1924",
    background: "linear-gradient(180deg, #fafafa 30%, #eeeeee 90%)"
  },
  listItemActive: {
    color: "whitesmoke",
    background: "linear-gradient(0deg, #0F202C 30%, #247573 90%)"
  },
  imgNoFlag: {
    maxWidth: "28px"
  }
}));

const Listado = params => {
  const { state, setState, getPaises } = params;

  const [list, setList] = useState(getPaises);

  const classes = useStyles();

  const primaryTypo = {
    color: "inherit",
    fontWeight: "500"
  };
  const secondaryTypo = {
    color: "#2ea09c",
    fontWeight: "500"
  };  

  const paisActive = pais => {
    if (state.pais === pais) {
      return classes.listItemActive;
    }
    return classes.listItem;
  };

  const paisFocus = pais => {
    if (state.pais === pais) {
      return true;
    } else {
      return false;
    }
  };

  const paisChange = (_id, pais) => {
    setState({
      _id: _id,
      pais: pais
    });
  };

  const listPaises = list.map((ele, index) => {
    let bandera;
    if (ele.bandera) {
      bandera = (
        <ReactCountryFlag
          countryCode={ele.bandera}
          style={{
            width: "2em",
            height: "2em"
          }}
          svg
        />
      );
    } else {
      bandera = <img className={classes.imgNoFlag} src={noFlag} alt="" />;
    }
    return (
      <div key={ele._id}>
        {index === 0 && <Divider />}
        <ListItem
          className={paisActive(ele.pais)}
          button
          autoFocus={paisFocus(ele.pais)}
          onClick={() => paisChange(ele._id, ele.pais)}
        >
          <ListItemIcon>{bandera}</ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ style: primaryTypo }}
            primary={ele.pais}
            secondaryTypographyProps={{ style: secondaryTypo }}
            secondary={
              <NumberFormat
                value={ele.casos}
                displayType={"text"}
                thousandSeparator={true}
              />
            }
          />
        </ListItem>
        <Divider />
      </div>
    );
  });  

  const inputSearchChange = async evt => {
    const { value } = evt.target;
    const filter = await value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    setList(
      getPaises.filter(ele => {
        const eleFilter = ele.pais
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        return eleFilter.includes(filter);
      })
    );
  };

  return (
    <Grid item xs={12} sm={12} md={4} lg={2} xl={2}>
      <Grid className={classes.gridTotal} item xs={12}>
        <Paper className={classes.paperTitle} elevation={3}>
          <Typography
            variant="h6"
            align="center"
            className={classes.totalTitle}
          >
            Total de Paises
          </Typography>
          <Typography
            variant="h2"
            align="center"
            className={classes.totalNumber}
          >
            {getPaises.length - 1}
          </Typography>
          <Typography variant="body2" align="center">
            + El Crucero Diamond Princess
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paperList} elevation={3}>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.listadoTitle}
          >
            Listado de Paises
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.listadoTitle}
          >
            Casos confirmados
          </Typography>
          <Divider />
          <div className={classes.containerSearch}>
            <Paper className={classes.search} elevation={1}>
              <InputBase
                className={classes.inputSearch}
                placeholder="Buscar pais"
                onChange={inputSearchChange}
              />
              <Divider
                className={classes.dividerSearch}
                orientation="vertical"
              />
              <IconButton className={classes.iconButtonSearch}>
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>
          <List className={classes.list} component="nav" dense={true}>
            {listPaises}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Listado;
