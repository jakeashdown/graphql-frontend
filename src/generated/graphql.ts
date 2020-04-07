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
};



export type Query = {
   __typename?: 'Query';
  echo: Scalars['String'];
  user?: Maybe<User>;
};


export type QueryEchoArgs = {
  toEcho: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type User = {
   __typename?: 'User';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type UserQueryVariables = {
  id: Scalars['String'];
};


export type UserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name'>
  )> }
);

export const UserDocument = gql`
    query User($id: String!) {
  user(id: $id) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UserGQL extends Apollo.Query<UserQuery, UserQueryVariables> {
    document = UserDocument;
    
  }