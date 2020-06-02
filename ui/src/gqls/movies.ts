import { gql } from '@apollo/client';

export const popular = gql`
  query popular($lang: String!, $page: Float!) {
    getPopular(lang: $lang, page: $page) {
      page
      total_results
      total_pages
      results {
        id
        title
        original_title
        release_date
        poster_path
        vote_average
        overview
      }
    }
  }
`;

export const topRated = gql`
  query topRated($lang: String!, $page: Float!) {
    getTopRated(lang: $lang, page: $page) {
      page
      total_results
      total_pages
      results {
        id
        title
        original_title
        release_date
        poster_path
        vote_average,
        overview
      }
    }
  }
`;

export const upcoming = gql`
  query upcoming($lang: String!, $page: Float!) {
    getUpcoming(lang: $lang, page: $page) {
      page
      total_results
      total_pages
      results {
        id
        title
        original_title
        release_date
        poster_path
        vote_average,
        overview
      }
    }
  }
`;

export const recommended = gql`
  query recommended($lang: String!, $page: Float!, $id: Float!) {
    getRecommendations(lang: $lang, page: $page, id: $id) {
      page
      total_results
      total_pages
      results {
        id
        title
        original_title
        release_date
        poster_path
        vote_average,
        overview
      }
    }
  }
`;

export const similar = gql`
  query similar($lang: String!, $page: Float!, $id: Float!) {
    getSimilar(lang: $lang, page: $page, id: $id) {
      page
      total_results
      total_pages
      results {
        id
        title
        original_title
        release_date
        poster_path
        vote_average,
        overview
      }
    }
  }
`;