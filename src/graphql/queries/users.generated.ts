import * as Types from '../types.generated';

import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

export type UsersQueryVariables = {};


export type UsersQuery = (
  { __typename: 'Query' }
  & { users: Array<(
    { __typename: 'User' }
    & Pick<Types.User, 'id' | 'name' | 'createdAt'>
  )> }
);

export const UsersDocument = gql`
    query Users {
  users {
    id
    name
    createdAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UsersGQL extends Apollo.Query<UsersQuery, UsersQueryVariables> {
    document = UsersDocument;
    
  }