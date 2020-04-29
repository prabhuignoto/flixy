import gql from 'graphql-tag';

export const cast = gql`
  query cast($movie_id: Float!) {
    getCredits(movie_id: $movie_id) {
      cast {
        name
        order
        profile_path
        credit_id
      }
  }
}`;