import * as Types from '../types.generated';

import { UserFragment } from '../fragments/user.generated';
import gql from 'graphql-tag';
import { UserFragmentDoc } from '../fragments/user.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

export type UserCreatedMutationVariables = {
  id: Types.Scalars['String'];
  name?: Types.Maybe<Types.Scalars['String']>;
};


export type UserCreatedMutation = (
  { __typename: 'Mutation' }
  & { createUserIfUnique?: Types.Maybe<(
    { __typename: 'User' }
    & UserFragment
  )> }
);

export const UserCreatedDocument = gql`
    mutation UserCreated($id: String!, $name: String) {
  createUserIfUnique(id: $id, name: $name) {
    ...user
  }
}
    ${UserFragmentDoc}`;

@Injectable({
    providedIn: 'root'
  })
  export class UserCreatedGQL extends Apollo.Mutation<UserCreatedMutation, UserCreatedMutationVariables> {
    document = UserCreatedDocument;

  }
