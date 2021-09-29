import { gql } from '@apollo/client';

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
      description
    }
  }
`;

export const QUERY_ORGANIZATIONS = gql`
  {
    organizations {
      _id
      title
      description
      site
    }
  }
`;

// export const QUERY_USER = gql`
//   {
//     user {
//       firstName

//         }
//       }
//     }
//   }
// `;