import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  LocalDateTime: any;
};



export type Identifiable = {
  id: Scalars['String'];
};


export type Query = {
   __typename?: 'Query';
  users: Array<User>;
  user?: Maybe<User>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type User = Identifiable & {
   __typename?: 'User';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  createdAt: Scalars['LocalDateTime'];
};

export type UserFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'createdAt'>
);

export type UserQueryVariables = {
  id: Scalars['String'];
};


export type UserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
);

export type UsersQueryVariables = {};


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
);

export const UserFieldsFragmentDoc = gql`
    fragment userFields on User {
  id
  name
  createdAt
}
    `;
export const UserDocument = gql`
    query User($id: String!) {
  user(id: $id) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UserGQL extends Apollo.Query<UserQuery, UserQueryVariables> {
    document = UserDocument;
    
  }
export const UsersDocument = gql`
    query Users {
  users {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UsersGQL extends Apollo.Query<UsersQuery, UsersQueryVariables> {
    document = UsersDocument;
    
  }