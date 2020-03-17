import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

const useStyles = makeStyles(theme => ({
  grid: {
    display: "flex",
    width: "100%",
    padding: theme.spacing(2)
  },
  container: {
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
    filter: true,
    responsive: "stacked",
    selectableRows: "none",
    downloadOptions: {
      filename: "casos_coronavirus_paises.csv",
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
        displayRows: "de" // 1-10 of 30
      },
      filter: {
        title: "FILTROS",
        reset: "reiniciar",          
      },
    }
  };

  return (
    <Grid item xs={12}>
      <Paper elevation={3}>
        <div className={classes.container}>
          <MUIDataTable
            title="Casos confirmados y muertes por Pais"
            data={getPaises}
            columns={columns}
            options={options}
          />
        </div>
      </Paper>
    </Grid>
  );
};

export default Tabla;
