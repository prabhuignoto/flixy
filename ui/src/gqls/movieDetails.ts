import gql from 'graphql-tag';

export const details = gql`
  query details($lang: String!, $id: Float!) {
    getDetails(lang: $lang, movie_id: $id) {
      adult
      title
      backdrop_path
      poster_path
      genres {
        id
        name
      }
      budget
      imdb_id
      overview
      popularity
      id
      production_companies {
        name
        logo_path
      }
      release_date
      revenue
      runtime
      tagline
      video
      original_language
      vote_average
    }
}
`; 