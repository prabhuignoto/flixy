import { gql } from '@apollo/client';

export const popular = gql`
  query popular($lang: String!, $page: Float!) {
    getPopularTv(lang: $lang, page: $page) {
      page
      total_results
      total_pages
      results {
        id
        name
        original_name
        first_air_date
        poster_path
      }
    }
  }
`;

export const topRated = gql`
  query topRated($lang: String!, $page: Float!) {
    getTopRatedTv(lang: $lang, page: $page) {
      page
      total_results
      total_pages
      results {
        id
        name
        original_name
        first_air_date
        poster_path
      }
    }
  }
`;

export const onAir = gql`
  query onAir($lang: String!, $page: Float!) {
    getTvOnAir(lang: $lang, page: $page) {
      page
      total_results
      total_pages
      results {
        id
        name
        original_name
        first_air_date
        poster_path
      }
    }
  }
`;