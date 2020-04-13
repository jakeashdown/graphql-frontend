import * as Types from '../types.generated';

import gql from 'graphql-tag';

export type UserFragment = (
  { __typename: 'User' }
  & Pick<Types.User, 'id' | 'name' | 'createdAt'>
);

export const UserFragmentDoc = gql`
    fragment user on User {
  id
  name
  createdAt
}
    `;