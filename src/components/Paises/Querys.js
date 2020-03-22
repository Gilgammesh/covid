import { gql } from "apollo-boost";

// Obtener Paises
export const GET_PAISES = gql`
  query($sortby: [SortBy]) {
    getPaises(sortby: $sortby) {
      _id
      pais
      casos
      bandera
      latitud
      longitud
    }
  }
`;

// Obtener Pais
export const GET_PAIS = gql`
  query($filter: PaisFilter) {
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
  }
`;
