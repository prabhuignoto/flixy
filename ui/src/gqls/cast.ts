import { gql } from '@apollo/client';
import { ObjectName } from './../components/media-objects/object.styles';

export const cast = gql`
  query cast($movie_id: Float!) {
    getCredits(movie_id: $movie_id) {
      cast {
        name
        order
        profile_path
        credit_id
        id
      }
      crew {
        name
        profile_path
        credit_id
        id
      }
  }
}`;