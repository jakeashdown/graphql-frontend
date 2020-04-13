import * as Types from '../types.generated';

import { UserFragment } from '../fragments/user.generated';
import gql from 'graphql-tag';
import { UserFragmentDoc } from '../fragments/user.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

export type UserDetailQueryVariables = {
  id: Types.Scalars['String'];
};


export type UserDetailQuery = (
  { __typename: 'Query' }
  & { user?: Types.Maybe<(
    { __typename: 'User' }
    & UserFragment
  )> }
);

export const UserDetailDocument = gql`
    query UserDetail($id: String!) {
  user(id: $id) {
    ...user
  }
}
    ${UserFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UserDetailGQL extends Apollo.Query<UserDetailQuery, UserDetailQueryVariables> {
    document = UserDetailDocument;
    
  }