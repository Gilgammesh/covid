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
      casosHoy
      muertes
      muertesHoy
      recuperados
      casosActivos
      casosCriticos
      bandera
      latitud
      longitud
    }
  }
`;
