import * as Types from '../types.generated';

import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

export type UserQueryVariables = {
  id: Types.Scalars['String'];
};


export type UserQuery = (
  { __typename: 'Query' }
  & { user?: Types.Maybe<(
    { __typename: 'User' }
    & Pick<Types.User, 'id' | 'name' | 'createdAt'>
  )> }
);

export const UserDocument = gql`
    query User($id: String!) {
  user(id: $id) {
    id
    name
    createdAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UserGQL extends Apollo.Query<UserQuery, UserQueryVariables> {
    document = UserDocument;
    
  }