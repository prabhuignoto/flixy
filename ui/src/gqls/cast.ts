import { gql } from '@apollo/client';

export const cast = gql`
  query cast($movie_id: Float!) {
    getCredits(movie_id: $movie_id) {
      id
      cast {
        name
        order
        profile_path
        credit_id
        id
        character
      }
      crew {
        name
        profile_path
        credit_id
        id
        job
        department
        job
      }
  }
}`;