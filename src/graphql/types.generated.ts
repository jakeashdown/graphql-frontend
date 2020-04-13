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

/** Entity that can be identified */
export type Identifiable = {
  id: Scalars['String'];
};


export type Mutation = {
   __typename: 'Mutation';
  createUserIfUnique?: Maybe<User>;
};


export type MutationCreateUserIfUniqueArgs = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type Query = {
   __typename: 'Query';
  /** Returns all users. */
  users: Array<User>;
  /** Returns a user with specific `id`. */
  user?: Maybe<User>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type User = Identifiable & {
   __typename: 'User';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  createdAt: Scalars['LocalDateTime'];
};
