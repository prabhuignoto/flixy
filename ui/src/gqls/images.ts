import { gql } from '@apollo/client';

export const images = gql`
  query images($movie_id: Float!, $lang: String!) {
    getImages(movie_id: $movie_id, lang: $lang) {
      id
      backdrops {
        height
        file_path
        width
      }
    }
}`;

export const tvImages = gql`
  query images($movie_id: Float!, $lang: String!) {
    getTvImages(tv_id: $movie_id, lang: $lang) {
      id
      backdrops {
        height
        file_path
        width
      }
    }
}`;