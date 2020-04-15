import * as Types from '../types.generated';

import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

export type UserDeletionMutationVariables = {
  id: Types.Scalars['String'];
};


export type UserDeletionMutation = (
  { __typename: 'Mutation' }
  & { deletedUser?: Types.Maybe<(
    { __typename: 'User' }
    & Pick<Types.User, 'id'>
  )> }
);

export const UserDeletionDocument = gql`
    mutation UserDeletion($id: String!) {
  deletedUser: deleteUser(id: $id) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UserDeletionGQL extends Apollo.Mutation<UserDeletionMutation, UserDeletionMutationVariables> {
    document = UserDeletionDocument;
    
  }