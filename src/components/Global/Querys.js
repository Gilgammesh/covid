import { gql } from "apollo-boost";

// Obtener Paises
export const GET_PAISES = gql`
  query($sortby: [SortBy]) {
    getPaises(sortby: $sortby) {
      _id
      pais
      casos
      casosHoy
      muertes
      muertesHoy
      recuperados
      casosActivos
      casosCriticos      
    }
  }
`;
