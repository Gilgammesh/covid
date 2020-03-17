import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  grid: {
    display: "flex",
    width: "100%",
    padding: theme.spacing(2)
  }
}));

const Tabla = params => {
  const { getPaises } = params;

  const classes = useStyles();

  const columns = [
    {
      label: "Pais",
      name: "pais",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      label: "Total Casos",
      name: "casos",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      label: "Casos de Hoy",
      name: "casosHoy",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      label: "Total Muertes",
      name: "muertes",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      label: "Muertes de Hoy",
      name: "muertesHoy",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      label: "Total Recuperados",
      name: "recuperados",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      label: "Casos Activos",
      name: "casosActivos",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      label: "Casos Criticos",
      name: "casosCriticos",
      options: {
        filter: true,
        sort: true
      }
    }
  ];

  const options = {
    filter: false,
    responsive: "stacked"
  };

  const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTableHeadCell: {
          root: {
            color: "black",
            fontWeight: "600"
          }
        }
      }
    });

  return (
    <Grid item xs={12}>
      <Paper elevation={3}>
        <div className={classes.container}>
          <MuiThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
              title="Casos confirmados y muertes por Pais"
              data={getPaises}
              columns={columns}
              options={options}
            />
          </MuiThemeProvider>
        </div>
      </Paper>
    </Grid>
  );
};

export default Tabla;
