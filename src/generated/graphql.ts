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
};


export type QueryEchoArgs = {
  toEcho: Scalars['String'];
};

export type EchoQueryVariables = {};


export type EchoQuery = (
  { __typename?: 'Query' }
  & { echoed: Query['echo'] }
);

export const EchoDocument = gql`
    query Echo {
  echoed: echo(toEcho: "to-echo")
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EchoGQL extends Apollo.Query<EchoQuery, EchoQueryVariables> {
    document = EchoDocument;
    
  }