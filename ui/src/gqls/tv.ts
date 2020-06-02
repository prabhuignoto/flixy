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
        overview
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
        overview
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
        overview
      }
    }
  }
`;

export const recommendedTv = gql`
  query recommended($lang: String!, $page: Float!, $id: Float!) {
    getTvRecommendations(lang: $lang, page: $page, id: $id) {
      page
      total_results
      total_pages
      results {
        id
        original_name
        first_air_date
        poster_path
        vote_average,
        overview
      }
    }
  }
`;

export const similarTv = gql`
  query similar($lang: String!, $page: Float!, $id: Float!) {
    getTvSimilar(lang: $lang, page: $page, id: $id) {
      page
      total_results
      total_pages
      results {
        id
        original_name
        first_air_date
        poster_path
        vote_average,
        overview
      }
    }
  }
`;