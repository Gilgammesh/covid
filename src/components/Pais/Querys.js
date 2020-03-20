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
      casos_
      casosHoy
      muertes
      muertes_
      muertesHoy
      recuperados
      recuperados_
      casosActivos
      casosCriticos
      casosDescartados
      bandera
      latitud
      longitud
    }
    getRegiones(sortby: $sortby2) {
      _id
      region
      casos
      muertes
      recuperados
      latitud
      longitud
    }
  }
`;
