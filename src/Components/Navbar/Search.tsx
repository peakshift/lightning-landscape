import { useState } from "react";
import { Hits, SearchBox } from "react-instantsearch-hooks-web";
import { Projects } from "src/graphql";
import { openModal } from "react-url-modal";
import { useDebouncedCallback } from "@react-hookz/web";

export default function Search() {
  const [showSearchResults, setShowSearchResults] = useState(false);

  const debouncedSearch = useDebouncedCallback(
    (query: string, search: (v: string) => void) => search(query),
    [],
    300
  );

  return (
    <div className="relative grow max-w-[420px]">
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
        onBlur={() => setTimeout(() => setShowSearchResults(false), 100)}
        queryHook={debouncedSearch}
      />
      {showSearchResults && (
        <div className="absolute top-[calc(100%+16px)] w-[max(100%,360px)] bg-white border border-gray-200 p-16 rounded shadow-lg max-h-[400px] overflow-y-scroll">
          <Hits hitComponent={Hit} />
        </div>
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
