import { gql, useQuery } from '@apollo/client'

const GET_ROUTES = gql`
  query GetRoutes ($name: String!, $mode: String!) {
    routes(name: $name, modes: $mode) {
        gtfsId
        id
        shortName
        longName
        mode
        patterns {
          code
          directionId
          name
          headsign
        }
    }
  }
`

export const useRouteAutocomplete = (name: string, mode: string ) => {
  return useQuery(GET_ROUTES, {
    variables: { name, mode }
  })
}