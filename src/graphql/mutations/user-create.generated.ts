import * as Types from '../types.generated';

import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

export type UserCreationMutationVariables = {
  id: Types.Scalars['String'];
  name?: Types.Maybe<Types.Scalars['String']>;
};


export type UserCreationMutation = (
  { __typename: 'Mutation' }
  & { createdUser?: Types.Maybe<(
    { __typename: 'User' }
    & Pick<Types.User, 'id' | 'name' | 'createdAt'>
  )> }
);

export const UserCreationDocument = gql`
    mutation UserCreation($id: String!, $name: String) {
  createdUser: createUserIfUnique(id: $id, name: $name) {
    id
    name
    createdAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UserCreationGQL extends Apollo.Mutation<UserCreationMutation, UserCreationMutationVariables> {
    document = UserCreationDocument;
    
  }