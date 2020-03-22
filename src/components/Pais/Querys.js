import { gql } from "apollo-boost";

// Obtener toda la información de Peru
export const GET_PERU = gql`
  query(
    $filter: PaisFilter    
    $sortby: [SortBy]
    $sortby_: [SortBy]
  ) {
    getPaises(sortby: $sortby) {
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
    getRegiones( sortby: $sortby_) {
      _id
      region
      casos
      muertes
      recuperados
      latitud
      longitud
      poligono
    }
    getRegiones_( sortby: $sortby_) {
      _id
      poligono
    }
  }
`;
