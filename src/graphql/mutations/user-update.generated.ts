import * as Types from '../types.generated';

import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

export type UserUpdateMutationVariables = {
  id: Types.Scalars['String'];
  name?: Types.Maybe<Types.Scalars['String']>;
};


export type UserUpdateMutation = (
  { __typename: 'Mutation' }
  & { updatedUser?: Types.Maybe<(
    { __typename: 'User' }
    & Pick<Types.User, 'id' | 'name'>
  )> }
);

export const UserUpdateDocument = gql`
    mutation UserUpdate($id: String!, $name: String) {
  updatedUser: updateUserName(id: $id, name: $name) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UserUpdateGQL extends Apollo.Mutation<UserUpdateMutation, UserUpdateMutationVariables> {
    document = UserUpdateDocument;
    
  }