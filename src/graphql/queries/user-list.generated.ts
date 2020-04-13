import * as Types from '../types.generated';

import { UserFragment } from '../fragments/user.generated';
import gql from 'graphql-tag';
import { UserFragmentDoc } from '../fragments/user.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

export type UserListQueryVariables = {};


export type UserListQuery = (
  { __typename: 'Query' }
  & { users: Array<(
    { __typename: 'User' }
    & UserFragment
  )> }
);

export const UserListDocument = gql`
    query UserList {
  users {
    ...user
  }
}
    ${UserFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UserListGQL extends Apollo.Query<UserListQuery, UserListQueryVariables> {
    document = UserListDocument;
    
  }