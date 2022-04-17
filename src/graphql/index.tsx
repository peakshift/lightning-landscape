import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Award = {
  __typename?: 'Award';
  id: Scalars['Int'];
  image: Scalars['String'];
  project: Project;
  title: Scalars['String'];
  url: Scalars['String'];
};

export type Bounty = PostBase & {
  __typename?: 'Bounty';
  applicants_count: Scalars['Int'];
  author: User;
  cover_image: Scalars['String'];
  date: Scalars['String'];
  deadline: Scalars['String'];
  excerpt: Scalars['String'];
  id: Scalars['Int'];
  reward_amount: Scalars['Int'];
  tags: Array<Tag>;
  title: Scalars['String'];
  type: Scalars['String'];
  votes_count: Scalars['Int'];
};

export type Category = {
  __typename?: 'Category';
  apps_count: Scalars['Int'];
  cover_image: Maybe<Scalars['String']>;
  icon: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  project: Array<Project>;
  title: Scalars['String'];
  votes_sum: Scalars['Int'];
};

export type LnurlDetails = {
  __typename?: 'LnurlDetails';
  commentAllowed: Maybe<Scalars['Int']>;
  maxSendable: Maybe<Scalars['Int']>;
  metadata: Maybe<Scalars['String']>;
  minSendable: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  confirmVote: Vote;
  vote: Vote;
};


export type MutationConfirmVoteArgs = {
  payment_request: Scalars['String'];
  preimage: Scalars['String'];
};


export type MutationVoteArgs = {
  amount_in_sat: Scalars['Int'];
  project_id: Scalars['Int'];
};

export type Post = Bounty | Question | Story;

export type PostBase = {
  author: User;
  date: Scalars['String'];
  excerpt: Scalars['String'];
  id: Scalars['Int'];
  tags: Array<Tag>;
  title: Scalars['String'];
  votes_count: Scalars['Int'];
};

export type PostComment = {
  __typename?: 'PostComment';
  author: User;
  body: Scalars['String'];
  date: Scalars['String'];
  id: Scalars['Int'];
};

export type Project = {
  __typename?: 'Project';
  awards: Array<Award>;
  category: Category;
  cover_image: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['Int'];
  lightning_address: Maybe<Scalars['String']>;
  lnurl_callback_url: Maybe<Scalars['String']>;
  screenshots: Array<Scalars['String']>;
  tags: Array<Tag>;
  thumbnail_image: Scalars['String'];
  title: Scalars['String'];
  votes_count: Scalars['Int'];
  website: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  allCategories: Array<Category>;
  allProjects: Array<Project>;
  getCategory: Category;
  getFeed: Array<Post>;
  getLnurlDetailsForProject: LnurlDetails;
  getPostById: Post;
  getProject: Project;
  hottestProjects: Array<Project>;
  newProjects: Array<Project>;
  projectsByCategory: Array<Project>;
  searchProjects: Array<Project>;
};


export type QueryAllProjectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryGetCategoryArgs = {
  id: Scalars['Int'];
};


export type QueryGetFeedArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryGetLnurlDetailsForProjectArgs = {
  project_id: Scalars['Int'];
};


export type QueryGetPostByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetProjectArgs = {
  id: Scalars['Int'];
};


export type QueryHottestProjectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryNewProjectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryProjectsByCategoryArgs = {
  category_id: Scalars['Int'];
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QuerySearchProjectsArgs = {
  search: Scalars['String'];
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type Question = PostBase & {
  __typename?: 'Question';
  answers_count: Scalars['Int'];
  author: User;
  comments: Array<PostComment>;
  cover_image: Scalars['String'];
  date: Scalars['String'];
  deadline: Scalars['String'];
  excerpt: Scalars['String'];
  id: Scalars['Int'];
  reward_amount: Scalars['Int'];
  tags: Array<Tag>;
  title: Scalars['String'];
  type: Scalars['String'];
  votes_count: Scalars['Int'];
};

export type Story = PostBase & {
  __typename?: 'Story';
  author: User;
  comments_count: Scalars['Int'];
  cover_image: Scalars['String'];
  date: Scalars['String'];
  excerpt: Scalars['String'];
  id: Scalars['Int'];
  tags: Array<Tag>;
  title: Scalars['String'];
  type: Scalars['String'];
  votes_count: Scalars['Int'];
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['Int'];
  project: Array<Project>;
  title: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  image: Scalars['String'];
  name: Scalars['String'];
};

export type Vote = {
  __typename?: 'Vote';
  amount_in_sat: Scalars['Int'];
  id: Scalars['Int'];
  paid: Scalars['Boolean'];
  payment_hash: Scalars['String'];
  payment_request: Scalars['String'];
  project: Project;
};

export type NavCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type NavCategoriesQuery = { __typename?: 'Query', allCategories: Array<{ __typename?: 'Category', id: number, title: string, icon: string | null | undefined, votes_sum: number }> };

export type SearchProjectsQueryVariables = Exact<{
  search: Scalars['String'];
}>;


export type SearchProjectsQuery = { __typename?: 'Query', searchProjects: Array<{ __typename?: 'Project', id: number, thumbnail_image: string, title: string, category: { __typename?: 'Category', title: string, id: number } }> };

export type FeedQueryVariables = Exact<{ [key: string]: never; }>;


export type FeedQuery = { __typename?: 'Query', getFeed: Array<{ __typename?: 'Bounty', id: number, title: string, date: string, excerpt: string, votes_count: number, type: string, cover_image: string, deadline: string, reward_amount: number, applicants_count: number, author: { __typename?: 'User', id: number, name: string, image: string }, tags: Array<{ __typename?: 'Tag', id: number, title: string }> } | { __typename?: 'Question', id: number, title: string, date: string, excerpt: string, votes_count: number, type: string, cover_image: string, deadline: string, reward_amount: number, answers_count: number, author: { __typename?: 'User', id: number, name: string, image: string }, tags: Array<{ __typename?: 'Tag', id: number, title: string }>, comments: Array<{ __typename?: 'PostComment', id: number, date: string, body: string, author: { __typename?: 'User', id: number, name: string, image: string } }> } | { __typename?: 'Story', id: number, title: string, date: string, excerpt: string, votes_count: number, type: string, cover_image: string, comments_count: number, author: { __typename?: 'User', id: number, name: string, image: string }, tags: Array<{ __typename?: 'Tag', id: number, title: string }> }> };

export type PostDetailsQueryVariables = Exact<{
  postId: Scalars['Int'];
}>;


export type PostDetailsQuery = { __typename?: 'Query', getPostById: { __typename?: 'Bounty', id: number, title: string, date: string, excerpt: string, votes_count: number, type: string, cover_image: string, deadline: string, reward_amount: number, applicants_count: number, author: { __typename?: 'User', id: number, name: string, image: string }, tags: Array<{ __typename?: 'Tag', id: number, title: string }> } | { __typename?: 'Question', id: number, title: string, date: string, excerpt: string, votes_count: number, type: string, cover_image: string, deadline: string, reward_amount: number, answers_count: number, author: { __typename?: 'User', id: number, name: string, image: string }, tags: Array<{ __typename?: 'Tag', id: number, title: string }>, comments: Array<{ __typename?: 'PostComment', id: number, date: string, body: string, author: { __typename?: 'User', id: number, name: string, image: string } }> } | { __typename?: 'Story', id: number, title: string, date: string, excerpt: string, votes_count: number, type: string, cover_image: string, comments_count: number, author: { __typename?: 'User', id: number, name: string, image: string }, tags: Array<{ __typename?: 'Tag', id: number, title: string }> } };

export type CategoryPageQueryVariables = Exact<{
  categoryId: Scalars['Int'];
}>;


export type CategoryPageQuery = { __typename?: 'Query', projectsByCategory: Array<{ __typename?: 'Project', id: number, thumbnail_image: string, title: string, votes_count: number, category: { __typename?: 'Category', title: string, id: number } }>, getCategory: { __typename?: 'Category', id: number, title: string, cover_image: string | null | undefined, apps_count: number } };

export type AllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCategoriesQuery = { __typename?: 'Query', allCategories: Array<{ __typename?: 'Category', id: number, title: string }> };

export type ExploreProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ExploreProjectsQuery = { __typename?: 'Query', allCategories: Array<{ __typename?: 'Category', id: number, title: string, project: Array<{ __typename?: 'Project', id: number, thumbnail_image: string, title: string, votes_count: number, category: { __typename?: 'Category', title: string, id: number } }> }>, newProjects: Array<{ __typename?: 'Project', id: number, title: string, thumbnail_image: string, votes_count: number, category: { __typename?: 'Category', title: string, id: number } }> };

export type HottestProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type HottestProjectsQuery = { __typename?: 'Query', hottestProjects: Array<{ __typename?: 'Project', id: number, thumbnail_image: string, title: string, votes_count: number, category: { __typename?: 'Category', title: string, id: number } }> };

export type ProjectDetailsQueryVariables = Exact<{
  projectId: Scalars['Int'];
}>;


export type ProjectDetailsQuery = { __typename?: 'Query', getProject: { __typename?: 'Project', id: number, title: string, description: string, cover_image: string, thumbnail_image: string, screenshots: Array<string>, website: string, lightning_address: string | null | undefined, lnurl_callback_url: string | null | undefined, votes_count: number, category: { __typename?: 'Category', id: number, title: string }, awards: Array<{ __typename?: 'Award', title: string, image: string, url: string, id: number }>, tags: Array<{ __typename?: 'Tag', id: number, title: string }> } };

export type VoteMutationVariables = Exact<{
  projectId: Scalars['Int'];
  amountInSat: Scalars['Int'];
}>;


export type VoteMutation = { __typename?: 'Mutation', vote: { __typename?: 'Vote', id: number, amount_in_sat: number, payment_request: string, payment_hash: string, paid: boolean } };

export type ConfirmVoteMutationVariables = Exact<{
  paymentRequest: Scalars['String'];
  preimage: Scalars['String'];
}>;


export type ConfirmVoteMutation = { __typename?: 'Mutation', confirmVote: { __typename?: 'Vote', id: number, amount_in_sat: number, payment_request: string, payment_hash: string, paid: boolean, project: { __typename?: 'Project', id: number, votes_count: number } } };


export const NavCategoriesDocument = gql`
    query NavCategories {
  allCategories {
    id
    title
    icon
    votes_sum
  }
}
    `;

/**
 * __useNavCategoriesQuery__
 *
 * To run a query within a React component, call `useNavCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useNavCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNavCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useNavCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<NavCategoriesQuery, NavCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NavCategoriesQuery, NavCategoriesQueryVariables>(NavCategoriesDocument, options);
      }
export function useNavCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NavCategoriesQuery, NavCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NavCategoriesQuery, NavCategoriesQueryVariables>(NavCategoriesDocument, options);
        }
export type NavCategoriesQueryHookResult = ReturnType<typeof useNavCategoriesQuery>;
export type NavCategoriesLazyQueryHookResult = ReturnType<typeof useNavCategoriesLazyQuery>;
export type NavCategoriesQueryResult = Apollo.QueryResult<NavCategoriesQuery, NavCategoriesQueryVariables>;
export const SearchProjectsDocument = gql`
    query SearchProjects($search: String!) {
  searchProjects(search: $search) {
    id
    thumbnail_image
    title
    category {
      title
      id
    }
  }
}
    `;

/**
 * __useSearchProjectsQuery__
 *
 * To run a query within a React component, call `useSearchProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchProjectsQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useSearchProjectsQuery(baseOptions: Apollo.QueryHookOptions<SearchProjectsQuery, SearchProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchProjectsQuery, SearchProjectsQueryVariables>(SearchProjectsDocument, options);
      }
export function useSearchProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchProjectsQuery, SearchProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchProjectsQuery, SearchProjectsQueryVariables>(SearchProjectsDocument, options);
        }
export type SearchProjectsQueryHookResult = ReturnType<typeof useSearchProjectsQuery>;
export type SearchProjectsLazyQueryHookResult = ReturnType<typeof useSearchProjectsLazyQuery>;
export type SearchProjectsQueryResult = Apollo.QueryResult<SearchProjectsQuery, SearchProjectsQueryVariables>;
export const FeedDocument = gql`
    query Feed {
  getFeed {
    ... on Story {
      id
      title
      date
      author {
        id
        name
        image
      }
      excerpt
      tags {
        id
        title
      }
      votes_count
      type
      cover_image
      comments_count
    }
    ... on Bounty {
      id
      title
      date
      author {
        id
        name
        image
      }
      excerpt
      tags {
        id
        title
      }
      votes_count
      type
      cover_image
      deadline
      reward_amount
      applicants_count
    }
    ... on Question {
      id
      title
      date
      author {
        id
        name
        image
      }
      excerpt
      tags {
        id
        title
      }
      votes_count
      type
      cover_image
      deadline
      reward_amount
      answers_count
      comments {
        id
        date
        body
        author {
          id
          name
          image
        }
      }
    }
  }
}
    `;

/**
 * __useFeedQuery__
 *
 * To run a query within a React component, call `useFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeedQuery({
 *   variables: {
 *   },
 * });
 */
export function useFeedQuery(baseOptions?: Apollo.QueryHookOptions<FeedQuery, FeedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FeedQuery, FeedQueryVariables>(FeedDocument, options);
      }
export function useFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeedQuery, FeedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FeedQuery, FeedQueryVariables>(FeedDocument, options);
        }
export type FeedQueryHookResult = ReturnType<typeof useFeedQuery>;
export type FeedLazyQueryHookResult = ReturnType<typeof useFeedLazyQuery>;
export type FeedQueryResult = Apollo.QueryResult<FeedQuery, FeedQueryVariables>;
export const PostDetailsDocument = gql`
    query PostDetails($postId: Int!) {
  getPostById(id: $postId) {
    ... on Story {
      id
      title
      date
      author {
        id
        name
        image
      }
      excerpt
      tags {
        id
        title
      }
      votes_count
      type
      cover_image
      comments_count
    }
    ... on Bounty {
      id
      title
      date
      author {
        id
        name
        image
      }
      excerpt
      tags {
        id
        title
      }
      votes_count
      type
      cover_image
      deadline
      reward_amount
      applicants_count
    }
    ... on Question {
      id
      title
      date
      author {
        id
        name
        image
      }
      excerpt
      tags {
        id
        title
      }
      votes_count
      type
      cover_image
      deadline
      reward_amount
      answers_count
      comments {
        id
        date
        body
        author {
          id
          name
          image
        }
      }
    }
  }
}
    `;

/**
 * __usePostDetailsQuery__
 *
 * To run a query within a React component, call `usePostDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostDetailsQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function usePostDetailsQuery(baseOptions: Apollo.QueryHookOptions<PostDetailsQuery, PostDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostDetailsQuery, PostDetailsQueryVariables>(PostDetailsDocument, options);
      }
export function usePostDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostDetailsQuery, PostDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostDetailsQuery, PostDetailsQueryVariables>(PostDetailsDocument, options);
        }
export type PostDetailsQueryHookResult = ReturnType<typeof usePostDetailsQuery>;
export type PostDetailsLazyQueryHookResult = ReturnType<typeof usePostDetailsLazyQuery>;
export type PostDetailsQueryResult = Apollo.QueryResult<PostDetailsQuery, PostDetailsQueryVariables>;
export const CategoryPageDocument = gql`
    query CategoryPage($categoryId: Int!) {
  projectsByCategory(category_id: $categoryId) {
    id
    thumbnail_image
    title
    votes_count
    category {
      title
      id
    }
  }
  getCategory(id: $categoryId) {
    id
    title
    cover_image
    apps_count
  }
}
    `;

/**
 * __useCategoryPageQuery__
 *
 * To run a query within a React component, call `useCategoryPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryPageQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useCategoryPageQuery(baseOptions: Apollo.QueryHookOptions<CategoryPageQuery, CategoryPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryPageQuery, CategoryPageQueryVariables>(CategoryPageDocument, options);
      }
export function useCategoryPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryPageQuery, CategoryPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryPageQuery, CategoryPageQueryVariables>(CategoryPageDocument, options);
        }
export type CategoryPageQueryHookResult = ReturnType<typeof useCategoryPageQuery>;
export type CategoryPageLazyQueryHookResult = ReturnType<typeof useCategoryPageLazyQuery>;
export type CategoryPageQueryResult = Apollo.QueryResult<CategoryPageQuery, CategoryPageQueryVariables>;
export const AllCategoriesDocument = gql`
    query AllCategories {
  allCategories {
    id
    title
  }
}
    `;

/**
 * __useAllCategoriesQuery__
 *
 * To run a query within a React component, call `useAllCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<AllCategoriesQuery, AllCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllCategoriesQuery, AllCategoriesQueryVariables>(AllCategoriesDocument, options);
      }
export function useAllCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCategoriesQuery, AllCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllCategoriesQuery, AllCategoriesQueryVariables>(AllCategoriesDocument, options);
        }
export type AllCategoriesQueryHookResult = ReturnType<typeof useAllCategoriesQuery>;
export type AllCategoriesLazyQueryHookResult = ReturnType<typeof useAllCategoriesLazyQuery>;
export type AllCategoriesQueryResult = Apollo.QueryResult<AllCategoriesQuery, AllCategoriesQueryVariables>;
export const ExploreProjectsDocument = gql`
    query ExploreProjects {
  allCategories {
    id
    title
    project {
      id
      thumbnail_image
      title
      votes_count
      category {
        title
        id
      }
    }
  }
  newProjects {
    id
    title
    thumbnail_image
    votes_count
    category {
      title
      id
    }
  }
}
    `;

/**
 * __useExploreProjectsQuery__
 *
 * To run a query within a React component, call `useExploreProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useExploreProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExploreProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useExploreProjectsQuery(baseOptions?: Apollo.QueryHookOptions<ExploreProjectsQuery, ExploreProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExploreProjectsQuery, ExploreProjectsQueryVariables>(ExploreProjectsDocument, options);
      }
export function useExploreProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExploreProjectsQuery, ExploreProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExploreProjectsQuery, ExploreProjectsQueryVariables>(ExploreProjectsDocument, options);
        }
export type ExploreProjectsQueryHookResult = ReturnType<typeof useExploreProjectsQuery>;
export type ExploreProjectsLazyQueryHookResult = ReturnType<typeof useExploreProjectsLazyQuery>;
export type ExploreProjectsQueryResult = Apollo.QueryResult<ExploreProjectsQuery, ExploreProjectsQueryVariables>;
export const HottestProjectsDocument = gql`
    query HottestProjects {
  hottestProjects {
    id
    thumbnail_image
    title
    votes_count
    category {
      title
      id
    }
  }
}
    `;

/**
 * __useHottestProjectsQuery__
 *
 * To run a query within a React component, call `useHottestProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useHottestProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHottestProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useHottestProjectsQuery(baseOptions?: Apollo.QueryHookOptions<HottestProjectsQuery, HottestProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HottestProjectsQuery, HottestProjectsQueryVariables>(HottestProjectsDocument, options);
      }
export function useHottestProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HottestProjectsQuery, HottestProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HottestProjectsQuery, HottestProjectsQueryVariables>(HottestProjectsDocument, options);
        }
export type HottestProjectsQueryHookResult = ReturnType<typeof useHottestProjectsQuery>;
export type HottestProjectsLazyQueryHookResult = ReturnType<typeof useHottestProjectsLazyQuery>;
export type HottestProjectsQueryResult = Apollo.QueryResult<HottestProjectsQuery, HottestProjectsQueryVariables>;
export const ProjectDetailsDocument = gql`
    query ProjectDetails($projectId: Int!) {
  getProject(id: $projectId) {
    id
    title
    description
    cover_image
    thumbnail_image
    screenshots
    website
    lightning_address
    lnurl_callback_url
    votes_count
    category {
      id
      title
    }
    awards {
      title
      image
      url
      id
    }
    tags {
      id
      title
    }
  }
}
    `;

/**
 * __useProjectDetailsQuery__
 *
 * To run a query within a React component, call `useProjectDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectDetailsQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useProjectDetailsQuery(baseOptions: Apollo.QueryHookOptions<ProjectDetailsQuery, ProjectDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectDetailsQuery, ProjectDetailsQueryVariables>(ProjectDetailsDocument, options);
      }
export function useProjectDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectDetailsQuery, ProjectDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectDetailsQuery, ProjectDetailsQueryVariables>(ProjectDetailsDocument, options);
        }
export type ProjectDetailsQueryHookResult = ReturnType<typeof useProjectDetailsQuery>;
export type ProjectDetailsLazyQueryHookResult = ReturnType<typeof useProjectDetailsLazyQuery>;
export type ProjectDetailsQueryResult = Apollo.QueryResult<ProjectDetailsQuery, ProjectDetailsQueryVariables>;
export const VoteDocument = gql`
    mutation Vote($projectId: Int!, $amountInSat: Int!) {
  vote(project_id: $projectId, amount_in_sat: $amountInSat) {
    id
    amount_in_sat
    payment_request
    payment_hash
    paid
  }
}
    `;
export type VoteMutationFn = Apollo.MutationFunction<VoteMutation, VoteMutationVariables>;

/**
 * __useVoteMutation__
 *
 * To run a mutation, you first call `useVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [voteMutation, { data, loading, error }] = useVoteMutation({
 *   variables: {
 *      projectId: // value for 'projectId'
 *      amountInSat: // value for 'amountInSat'
 *   },
 * });
 */
export function useVoteMutation(baseOptions?: Apollo.MutationHookOptions<VoteMutation, VoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VoteMutation, VoteMutationVariables>(VoteDocument, options);
      }
export type VoteMutationHookResult = ReturnType<typeof useVoteMutation>;
export type VoteMutationResult = Apollo.MutationResult<VoteMutation>;
export type VoteMutationOptions = Apollo.BaseMutationOptions<VoteMutation, VoteMutationVariables>;
export const ConfirmVoteDocument = gql`
    mutation ConfirmVote($paymentRequest: String!, $preimage: String!) {
  confirmVote(payment_request: $paymentRequest, preimage: $preimage) {
    id
    amount_in_sat
    payment_request
    payment_hash
    paid
    project {
      id
      votes_count
    }
  }
}
    `;
export type ConfirmVoteMutationFn = Apollo.MutationFunction<ConfirmVoteMutation, ConfirmVoteMutationVariables>;

/**
 * __useConfirmVoteMutation__
 *
 * To run a mutation, you first call `useConfirmVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmVoteMutation, { data, loading, error }] = useConfirmVoteMutation({
 *   variables: {
 *      paymentRequest: // value for 'paymentRequest'
 *      preimage: // value for 'preimage'
 *   },
 * });
 */
export function useConfirmVoteMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmVoteMutation, ConfirmVoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmVoteMutation, ConfirmVoteMutationVariables>(ConfirmVoteDocument, options);
      }
export type ConfirmVoteMutationHookResult = ReturnType<typeof useConfirmVoteMutation>;
export type ConfirmVoteMutationResult = Apollo.MutationResult<ConfirmVoteMutation>;
export type ConfirmVoteMutationOptions = Apollo.BaseMutationOptions<ConfirmVoteMutation, ConfirmVoteMutationVariables>;