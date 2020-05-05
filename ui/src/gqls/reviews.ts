import { gql } from "@apollo/client";

export default gql`
  query reviews($movie_id: Float!, $page: Float!) {
    getReviews(movie_id: $movie_id, page: $page) {
      total_results
      id
      results {
        author
        content
        url
        id
      }
    }
  }
`;