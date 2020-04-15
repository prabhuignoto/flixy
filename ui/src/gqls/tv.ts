import gql from 'graphql-tag';

export const popular = gql`
  query popular($lang: String!) {
    getPopularTv(lang: $lang) {
      page
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
  query topRated($lang: String!) {
    getTopRatedTv(lang: $lang) {
      page
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
  query onAir($lang: String!) {
    getTvOnAir(lang: $lang) {
      page
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