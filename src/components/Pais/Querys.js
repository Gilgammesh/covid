import { gql } from "apollo-boost";

// Obtener toda la información de Peru
export const GET_PERU = gql`
  query($filter: PaisFilter, $sortby1: [SortBy], $sortby2: [SortBy]) {
    getPaises(sortby: $sortby1) {
      pais
    }
    getPais(filter: $filter) {
      pais
      casos
      casosHoy
      muertes
      muertesHoy
      recuperados
      casosActivos
      casosCriticos
      casosDescartados
      bandera
      latitud
      longitud
    }
    getCiudades(sortby: $sortby2) {
      _id
      ciudad
      casos
      latitud
      longitud
    }
  }
`;
