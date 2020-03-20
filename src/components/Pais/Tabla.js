import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2)
  },
  grid: {
    display: "flex",
    width: "100%",
    padding: theme.spacing(2)
  },
  containerTable: {
    padding: theme.spacing(2)
  }
}));

const Tabla = params => {
  const { getRegiones } = params;

  const classes = useStyles();

  const columns = [
    {
      label: "Región",
      name: "region",
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
      label: "Total Muertes",
      name: "muertes",
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
    }
  ];

  const options = {
    filter: true,
    responsive: "stacked",
    selectableRows: "none",
    downloadOptions: {
      filename: "casos_coronavirus_regiones_peru.csv",
      separator: ","
    },
    textLabels: {
      toolbar: {
        search: "Buscar",
        downloadCsv: "Descargar CSV",
        print: "Imprimir",
        viewColumns: "Ver/Ocultar columnas",
        filterTable: "Filtrar tabla"
      },
      pagination: {
        next: "Siguiente Página",
        previous: "Anterior Página",
        rowsPerPage: "Filas por Página:",
        displayRows: "de"
      },
      filter: {
        title: "FILTROS",
        reset: "reiniciar"
      }
    }
  };

  return (
    <Grid item xs={12} className={classes.container}>
      <Paper elevation={1}>
        <MUIDataTable
          title="Casos en la Regiones del Perú"
          data={getRegiones}
          columns={columns}
          options={options}
        />
      </Paper>
    </Grid>
  );
};

export default Tabla;
