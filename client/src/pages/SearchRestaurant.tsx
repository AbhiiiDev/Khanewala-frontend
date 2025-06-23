import SearchResultInfo from "@/components/SearchResultInfo";
import { useParams } from "react-router-dom";
import { useSearchRestaurants } from "@/api/RestaurantSearchApi";
import RestaurantSearchCard from "@/components/RestaurantSearchCard";
import SearchBar, { searchForm } from "@/components/SearchBar";
import { useState } from "react";
import CuisineFilter from "@/components/CuisineFilter";
import LoadingState  from "@/components/Loader";

export type SearchState={
  searchQuery: string,
  page: number,
  selectedCuisines: string[],
  sortOptions: string,
}
export default function SearchRestaurantCity() {
  const { city } = useParams();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  
  
  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
    page: 1,
    selectedCuisines: [],
    sortOptions: "bestMatch",
  });
  
  const { results, isLoading } = useSearchRestaurants(searchState,city);
  if (isLoading) {
 return <LoadingState/>
  }
  if(!results?.data|| !city){
    return <div className="flex justify-center items-center min-h-screen">
<h2>Sorry! No restaurants found !</h2>
    </div>
  }

  const setSearchQuery = (searchFormData: searchForm) => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,
    }));
  };
  const setSelectedCuisines = (selectedCuisines: string[]) => {
    setSearchState((prevState) => ({
      ...prevState,
      selectedCuisines,
      page: 1,
    }));
  };
  
  const searchReset=()=>{
    setSearchState((prevState)=>({
      ...prevState,
      searchQuery:"",
      page:1,
    }))
  }
  return (
    <div className="mt-32 mb-8 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div id="cuisine_list">
        <CuisineFilter
          selectedCuisines={searchState.selectedCuisines}
          isExpanded={isExpanded}
          onChange={setSelectedCuisines}
          onExpandedClick={() =>
            setIsExpanded((prevIsExpanded) => !prevIsExpanded)
          }
        />
      </div>
      <div id="main_content" className="flex flex-col gap-5">
        <div>
          <SearchBar
            placeHolder="search by cuisine or name"
            onSubmit={setSearchQuery}
            searchQuery={searchState.searchQuery}
            onReset={searchReset}

          />
        </div>
        <div className="flex justify-between">
          <SearchResultInfo total={results?.data?.length} city={city} />
          sort options
        </div>
        <div className="flex gap-3 flex-col">
          {/* Search Result Card */}
          {results?.data.map((restaurant, index) => (
            <RestaurantSearchCard key={index} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
}
