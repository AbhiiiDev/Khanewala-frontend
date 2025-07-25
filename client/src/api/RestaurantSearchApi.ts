import { SearchState } from "@/pages/SearchRestaurant";
import { Restaurant, RestaurantSearchResponse } from "@/types";
import { useQuery } from "react-query";

const BASE_URL=import.meta.env.VITE_RES_BASE_URL;

export const useGetRestaurant=(restaurantId?:string
)=>{
    const getRestaurant=async():Promise<Restaurant>=>{
        const response=await fetch(`${BASE_URL}/restaurant/${restaurantId}`);
        if(!response.ok){
            throw new Error('Failed to get Restaurant');
        }

        return response.json();
    }

    const {data:restaurant,isLoading}=useQuery("fetchRestaurant",getRestaurant,{
        enabled: !!restaurantId
    })
return {restaurant,isLoading};
}
export const useSearchRestaurants = (
    searchState: SearchState,
    city?: string
  ) => {
    const createSearchRequest = async (): Promise<RestaurantSearchResponse> => {
      const params = new URLSearchParams();
      params.set("searchQuery", searchState.searchQuery);
      params.set("page", searchState.page.toString());
      params.set("selectedCuisines", searchState.selectedCuisines.join(","));
      params.set("sortOption", searchState.sortOptions);
      const response = await fetch(
        `${BASE_URL}/restaurant/search/${city}?${params.toString()}`
      );
  
      if (!response.ok) {
        throw new Error("Failed to get restaurant");
      }
  
      return response.json();
    };
    const { data: results, isLoading } = useQuery(
      ["searchRestaurants", searchState],
      createSearchRequest,
      { enabled: !!city }
    );
    return {
      results,
      isLoading,
    };
  };