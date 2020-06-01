import { gql } from '@apollo/client';

export const details = gql`
  query details($lang: String!, $id: Float!) {
    getTvDetails(lang: $lang, tv_id: $id) {
      backdrop_path
      id
      homepage
      original_language
      original_name
      overview
      popularity
      poster_path
      vote_count
      vote_average
      genres {
        id
        name
      }
      production_companies {
        id
        logo_path
        name
        origin_country
      }
      first_air_date
      last_air_date
      last_episode_to_air {
        air_date
        episode_number
      }
    }
}
`; 