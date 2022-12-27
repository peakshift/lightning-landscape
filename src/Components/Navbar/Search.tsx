import { ReactNode, useRef, useState } from "react";
import {
  Hits,
  SearchBox,
  useInstantSearch,
} from "react-instantsearch-hooks-web";

import { Projects } from "src/graphql";
import { openModal } from "react-url-modal";
import { useClickOutside, useDebouncedCallback } from "@react-hookz/web";

export default function Search() {
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null!);

  const debouncedSearch = useDebouncedCallback(
    (query: string, search: (v: string) => void) => search(query),
    [],
    300
  );
  useClickOutside(searchContainerRef, () => {
    // setTimeout(() => setShowSearchResults(false), 100);
  });

  return (
    <div className="relative grow max-w-[420px]" ref={searchContainerRef}>
      <SearchBox
        autoFocus
        placeholder="Search projects"
        classNames={{
          root: "relative",
          input: "rounded pl-32 w-full",
          reset: "hidden",
          loadingIndicator: "hidden",
          submit:
            "absolute left-16 top-1/2 -translate-y-1/2 -translate-x-1/2 text-body2",
        }}
        onFocus={() => setShowSearchResults(true)}
        queryHook={debouncedSearch}
      />
      {showSearchResults && (
        <EmptyQueryBoundary fallback={null}>
          <div className="absolute top-[calc(100%+16px)] w-full bg-white border border-gray-200 p-16 rounded shadow-lg max-h-[400px] overflow-y-scroll no-scroll">
            <NoResultsBoundary
              fallback={
                <p className="text-center text-gray-600">
                  No Results found here
                </p>
              }
            >
              <Hits hitComponent={Hit} />
            </NoResultsBoundary>
          </div>
        </EmptyQueryBoundary>
      )}
    </div>
  );
}

type SearchProject = Pick<
  Projects,
  | "id"
  | "title"
  | "tags"
  | "description"
  | "status"
  | "license"
  | "website"
  | "yearFounded"
> & {
  category: NonNullable<Projects["categoryList"]>[number] | null;
  logo: string | null;
};

function Hit({ hit }: { hit: SearchProject }) {
  const clickProject = () => {
    openModal({
      name: "projectDetails",
      params: {
        projectId: hit.id,
      },
    });
  };

  return (
    <button
      className="hover:bg-gray-50 p-12 text-left w-full flex gap-12 items-center"
      onClick={clickProject}
    >
      <div className="justify-around items-start min-w-0 flex-1 hover:cursor-pointer">
        <p className="text-body4 w-full font-bold overflow-ellipsis overflow-hidden whitespace-nowrap">
          {hit?.title}
        </p>
        <p className="text-body5 text-gray-600 font-light mt-4">
          {hit.category?.name}
        </p>
        {/* <span className="chip-small bg-warning-50 text-yellow-700 font-light text-body5 py-[3px] px-10"> <MdLocalFireDepartment className='inline-block text-fire transform text-body4 align-middle' /> {numberFormatter(project?.votes_count)} </span> */}
      </div>
    </button>
  );
}

const NoResultsBoundary = ({
  children,
  fallback,
}: {
  children: ReactNode;
  fallback: ReactNode;
}) => {
  const { results, indexUiState } = useInstantSearch();

  const isQueryEmpty = !indexUiState.query;

  if (isQueryEmpty) return null;

  // The `__isArtificial` flag makes sure not to display the No Results message
  // when no hits have been returned yet.
  if (!results.__isArtificial && results.nbHits === 0) {
    return (
      <>
        {fallback}
        <div hidden>{children}</div>
      </>
    );
  }

  return <>{children}</>;
};

const EmptyQueryBoundary = ({
  children,
  fallback,
}: {
  children: ReactNode;
  fallback: ReactNode;
}) => {
  const { indexUiState } = useInstantSearch();

  const isQueryEmpty = !indexUiState.query;

  if (isQueryEmpty) return <>{fallback}</>;

  return <>{children}</>;
};
