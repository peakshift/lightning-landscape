import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Query = {
  __typename?: 'Query';
  apiTesting: Maybe<Array<Maybe<ApiTesting>>>;
  backup: Maybe<Array<Maybe<Backup>>>;
  categories: Maybe<Array<Maybe<Categories>>>;
  categoryList: Maybe<Array<Maybe<CategoryList>>>;
  projects: Maybe<Array<Maybe<Projects>>>;
  tags: Maybe<Array<Maybe<Tags>>>;
};


export type QueryApiTestingArgs = {
  _filter: InputMaybe<Scalars['JSON']>;
  _order_by: InputMaybe<Scalars['JSON']>;
  _page: InputMaybe<Scalars['JSON']>;
  _page_size: InputMaybe<Scalars['JSON']>;
  assignedTo: InputMaybe<Scalars['String']>;
  categories: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categoriesCopy: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category: InputMaybe<Scalars['String']>;
  comment: InputMaybe<Scalars['String']>;
  companyName: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['String']>;
  dead: InputMaybe<Scalars['Boolean']>;
  description: InputMaybe<Scalars['String']>;
  endDate: InputMaybe<Scalars['String']>;
  forks: InputMaybe<Scalars['Float']>;
  id: InputMaybe<Scalars['String']>;
  language: InputMaybe<Scalars['String']>;
  license: InputMaybe<Scalars['String']>;
  logo: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  openSource: InputMaybe<Scalars['String']>;
  project: InputMaybe<Scalars['String']>;
  repository: InputMaybe<Scalars['String']>;
  socialDiscord: InputMaybe<Scalars['String']>;
  socialLinkedIn: InputMaybe<Scalars['String']>;
  socialTwitter: InputMaybe<Scalars['String']>;
  stars: InputMaybe<Scalars['Float']>;
  status: InputMaybe<Scalars['String']>;
  subcategory: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  telegram: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['String']>;
  watchers: InputMaybe<Scalars['Float']>;
  website: InputMaybe<Scalars['String']>;
  websiteFunctionalLightningRelated: InputMaybe<Scalars['String']>;
  yearFounded: InputMaybe<Scalars['Float']>;
};


export type QueryBackupArgs = {
  _filter: InputMaybe<Scalars['JSON']>;
  _order_by: InputMaybe<Scalars['JSON']>;
  _page: InputMaybe<Scalars['JSON']>;
  _page_size: InputMaybe<Scalars['JSON']>;
  assignedTo: InputMaybe<Scalars['String']>;
  categories: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categoriesCopy: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category: InputMaybe<Scalars['String']>;
  comment: InputMaybe<Scalars['String']>;
  companyName: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['String']>;
  dead: InputMaybe<Scalars['Boolean']>;
  description: InputMaybe<Scalars['String']>;
  endDate: InputMaybe<Scalars['String']>;
  forks: InputMaybe<Scalars['Float']>;
  id: InputMaybe<Scalars['String']>;
  language: InputMaybe<Scalars['String']>;
  license: InputMaybe<Scalars['String']>;
  logo: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  openSource: InputMaybe<Scalars['String']>;
  projectProduct: InputMaybe<Scalars['String']>;
  repository: InputMaybe<Scalars['String']>;
  socialDiscord: InputMaybe<Scalars['String']>;
  socialLinkedIn: InputMaybe<Scalars['String']>;
  socialTwitter: InputMaybe<Scalars['String']>;
  stars: InputMaybe<Scalars['Float']>;
  status: InputMaybe<Scalars['String']>;
  subcategory: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  telegram: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['String']>;
  watchers: InputMaybe<Scalars['Float']>;
  website: InputMaybe<Scalars['String']>;
  websiteFunctionalLightningRelated: InputMaybe<Scalars['String']>;
  yearFounded: InputMaybe<Scalars['Float']>;
};


export type QueryCategoriesArgs = {
  _filter: InputMaybe<Scalars['JSON']>;
  _order_by: InputMaybe<Scalars['JSON']>;
  _page: InputMaybe<Scalars['JSON']>;
  _page_size: InputMaybe<Scalars['JSON']>;
  description: InputMaybe<Scalars['String']>;
  example: InputMaybe<Scalars['String']>;
  featured: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  importedTableCopy: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  importedTableCopy2: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name: InputMaybe<Scalars['String']>;
  projectProductFromFeatured: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategoryListArgs = {
  _filter: InputMaybe<Scalars['JSON']>;
  _order_by: InputMaybe<Scalars['JSON']>;
  _page: InputMaybe<Scalars['JSON']>;
  _page_size: InputMaybe<Scalars['JSON']>;
  data: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description: InputMaybe<Scalars['String']>;
  icon: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  projectFromData: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProjectsArgs = {
  _filter: InputMaybe<Scalars['JSON']>;
  _order_by: InputMaybe<Scalars['JSON']>;
  _page: InputMaybe<Scalars['JSON']>;
  _page_size: InputMaybe<Scalars['JSON']>;
  categories: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categoriesCopy: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category: InputMaybe<Scalars['String']>;
  categoryList: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  comment: InputMaybe<Scalars['String']>;
  companyName: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['String']>;
  dead: InputMaybe<Scalars['Boolean']>;
  description: InputMaybe<Scalars['String']>;
  discord: InputMaybe<Scalars['String']>;
  endDate: InputMaybe<Scalars['String']>;
  forks: InputMaybe<Scalars['Float']>;
  id: InputMaybe<Scalars['String']>;
  language: InputMaybe<Scalars['String']>;
  license: InputMaybe<Scalars['String']>;
  linkedIn: InputMaybe<Scalars['String']>;
  logo: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  openSource: InputMaybe<Scalars['String']>;
  project: InputMaybe<Scalars['String']>;
  repository: InputMaybe<Scalars['String']>;
  stars: InputMaybe<Scalars['Float']>;
  status: InputMaybe<Scalars['String']>;
  subcategory: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  telegram: InputMaybe<Scalars['String']>;
  twitter: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['String']>;
  watchers: InputMaybe<Scalars['Float']>;
  website: InputMaybe<Scalars['String']>;
  websiteFunctionalLightningRelated: InputMaybe<Scalars['String']>;
  yearFounded: InputMaybe<Scalars['Float']>;
};


export type QueryTagsArgs = {
  _filter: InputMaybe<Scalars['JSON']>;
  _order_by: InputMaybe<Scalars['JSON']>;
  _page: InputMaybe<Scalars['JSON']>;
  _page_size: InputMaybe<Scalars['JSON']>;
  description: InputMaybe<Scalars['String']>;
  example: InputMaybe<Scalars['String']>;
  featured: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  importedTableCopy: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  importedTableCopy2: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name: InputMaybe<Scalars['String']>;
  projectProductFromFeatured: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ApiTesting = {
  __typename?: 'apiTesting';
  assignedTo: Maybe<Scalars['String']>;
  categories: Maybe<Array<Maybe<Categories>>>;
  categoriesCopy: Maybe<Array<Maybe<Tags>>>;
  category: Maybe<Scalars['String']>;
  comment: Maybe<Scalars['String']>;
  companyName: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['String']>;
  dead: Maybe<Scalars['Boolean']>;
  description: Maybe<Scalars['String']>;
  endDate: Maybe<Scalars['String']>;
  forks: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['String']>;
  language: Maybe<Scalars['String']>;
  license: Maybe<Scalars['String']>;
  logo: Maybe<Array<Maybe<Scalars['JSON']>>>;
  openSource: Maybe<Scalars['String']>;
  project: Maybe<Scalars['String']>;
  repository: Maybe<Scalars['String']>;
  socialDiscord: Maybe<Scalars['String']>;
  socialLinkedIn: Maybe<Scalars['String']>;
  socialTwitter: Maybe<Scalars['String']>;
  stars: Maybe<Scalars['Float']>;
  status: Maybe<Scalars['String']>;
  subcategory: Maybe<Array<Maybe<Scalars['String']>>>;
  telegram: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['String']>;
  watchers: Maybe<Scalars['Float']>;
  website: Maybe<Scalars['String']>;
  websiteFunctionalLightningRelated: Maybe<Scalars['String']>;
  yearFounded: Maybe<Scalars['Float']>;
};

export type Backup = {
  __typename?: 'backup';
  assignedTo: Maybe<Scalars['String']>;
  categories: Maybe<Array<Maybe<Categories>>>;
  categoriesCopy: Maybe<Array<Maybe<Tags>>>;
  category: Maybe<Scalars['String']>;
  comment: Maybe<Scalars['String']>;
  companyName: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['String']>;
  dead: Maybe<Scalars['Boolean']>;
  description: Maybe<Scalars['String']>;
  endDate: Maybe<Scalars['String']>;
  forks: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['String']>;
  language: Maybe<Scalars['String']>;
  license: Maybe<Scalars['String']>;
  logo: Maybe<Array<Maybe<Scalars['JSON']>>>;
  openSource: Maybe<Scalars['String']>;
  projectProduct: Maybe<Scalars['String']>;
  repository: Maybe<Scalars['String']>;
  socialDiscord: Maybe<Scalars['String']>;
  socialLinkedIn: Maybe<Scalars['String']>;
  socialTwitter: Maybe<Scalars['String']>;
  stars: Maybe<Scalars['Float']>;
  status: Maybe<Scalars['String']>;
  subcategory: Maybe<Array<Maybe<Scalars['String']>>>;
  telegram: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['String']>;
  watchers: Maybe<Scalars['Float']>;
  website: Maybe<Scalars['String']>;
  websiteFunctionalLightningRelated: Maybe<Scalars['String']>;
  yearFounded: Maybe<Scalars['Float']>;
};

export type Categories = {
  __typename?: 'categories';
  description: Maybe<Scalars['String']>;
  example: Maybe<Scalars['String']>;
  featured: Maybe<Array<Maybe<Projects>>>;
  icon: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  importedTableCopy: Maybe<Array<Maybe<ApiTesting>>>;
  importedTableCopy2: Maybe<Array<Maybe<Backup>>>;
  name: Maybe<Scalars['String']>;
  projectProductFromFeatured: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CategoryList = {
  __typename?: 'categoryList';
  data: Maybe<Array<Maybe<Projects>>>;
  description: Maybe<Scalars['String']>;
  icon: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  projectFromData: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Projects = {
  __typename?: 'projects';
  categories: Maybe<Array<Maybe<Categories>>>;
  categoriesCopy: Maybe<Array<Maybe<Tags>>>;
  category: Maybe<Scalars['String']>;
  categoryList: Maybe<Array<Maybe<CategoryList>>>;
  comment: Maybe<Scalars['String']>;
  companyName: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['String']>;
  dead: Maybe<Scalars['Boolean']>;
  description: Maybe<Scalars['String']>;
  discord: Maybe<Scalars['String']>;
  endDate: Maybe<Scalars['String']>;
  forks: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['String']>;
  language: Maybe<Scalars['String']>;
  license: Maybe<Scalars['String']>;
  linkedIn: Maybe<Scalars['String']>;
  logo: Maybe<Array<Maybe<Scalars['JSON']>>>;
  openSource: Maybe<Scalars['String']>;
  project: Maybe<Scalars['String']>;
  repository: Maybe<Scalars['String']>;
  stars: Maybe<Scalars['Float']>;
  status: Maybe<Scalars['String']>;
  subcategory: Maybe<Array<Maybe<Scalars['String']>>>;
  telegram: Maybe<Scalars['String']>;
  twitter: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['String']>;
  watchers: Maybe<Scalars['Float']>;
  website: Maybe<Scalars['String']>;
  websiteFunctionalLightningRelated: Maybe<Scalars['String']>;
  yearFounded: Maybe<Scalars['Float']>;
};

export type Tags = {
  __typename?: 'tags';
  description: Maybe<Scalars['String']>;
  example: Maybe<Scalars['String']>;
  featured: Maybe<Array<Maybe<Projects>>>;
  icon: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  importedTableCopy: Maybe<Array<Maybe<ApiTesting>>>;
  importedTableCopy2: Maybe<Array<Maybe<Backup>>>;
  name: Maybe<Scalars['String']>;
  projectProductFromFeatured: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SearchProjectsQueryVariables = Exact<{
  category: InputMaybe<Scalars['String']>;
  pageSize: InputMaybe<Scalars['JSON']>;
  page: InputMaybe<Scalars['JSON']>;
}>;


export type SearchProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'projects', id: string | null, project: string | null, category: string | null, subcategory: Array<string | null> | null, logo: Array<any | null> | null, yearFounded: number | null } | null> | null };

export type ExplorePageQueryVariables = Exact<{
  page: InputMaybe<Scalars['JSON']>;
  pageSize: InputMaybe<Scalars['JSON']>;
}>;


export type ExplorePageQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'projects', id: string | null, project: string | null, category: string | null, logo: Array<any | null> | null, yearFounded: number | null, websiteFunctionalLightningRelated: string | null, companyName: string | null, website: string | null, description: string | null, repository: string | null, status: string | null, dead: boolean | null, twitter: string | null, linkedIn: string | null, telegram: string | null, language: string | null, updatedAt: string | null, createdAt: string | null, discord: string | null, stars: number | null } | null> | null };


export const SearchProjectsDocument = gql`
    query SearchProjects($category: String, $pageSize: JSON, $page: JSON) {
  projects(category: $category, _page_size: $pageSize, _page: $page) {
    id
    project
    category
    subcategory
    logo
    yearFounded
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
 *      category: // value for 'category'
 *      pageSize: // value for 'pageSize'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useSearchProjectsQuery(baseOptions?: Apollo.QueryHookOptions<SearchProjectsQuery, SearchProjectsQueryVariables>) {
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
export const ExplorePageDocument = gql`
    query ExplorePage($page: JSON, $pageSize: JSON) {
  projects(_page: $page, _page_size: $pageSize) {
    id
    project
    category
    logo
    yearFounded
    websiteFunctionalLightningRelated
    companyName
    website
    description
    repository
    status
    dead
    twitter
    linkedIn
    telegram
    language
    updatedAt
    createdAt
    discord
    stars
  }
}
    `;

/**
 * __useExplorePageQuery__
 *
 * To run a query within a React component, call `useExplorePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useExplorePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExplorePageQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useExplorePageQuery(baseOptions?: Apollo.QueryHookOptions<ExplorePageQuery, ExplorePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExplorePageQuery, ExplorePageQueryVariables>(ExplorePageDocument, options);
      }
export function useExplorePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExplorePageQuery, ExplorePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExplorePageQuery, ExplorePageQueryVariables>(ExplorePageDocument, options);
        }
export type ExplorePageQueryHookResult = ReturnType<typeof useExplorePageQuery>;
export type ExplorePageLazyQueryHookResult = ReturnType<typeof useExplorePageLazyQuery>;
export type ExplorePageQueryResult = Apollo.QueryResult<ExplorePageQuery, ExplorePageQueryVariables>;