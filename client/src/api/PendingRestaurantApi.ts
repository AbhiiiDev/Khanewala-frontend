import { PendingRestaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";

const BASE_URL=import.meta.env.VITE_RES_BASE_URL;

// export const useApprovePendingRestaurant=()=>{
//     const {getAccessTokenSilently}=useAuth0();
//     const approvePending=async ()=>{
//         const authToken=await getAccessTokenSilently();
// const response=await fetch(`${BASE_URL}/restaurant/approve`,{
//     method:'POST',
//     headers:{
//         Authorization:`Bearer ${authToken}`
//     }
// });

//     }
// }
export const useGetPendingList=()=>{
    const {getAccessTokenSilently}=useAuth0();
    const getPendingList=async ():Promise<PendingRestaurant[]>=>{
        const authToken=await getAccessTokenSilently();
const response=await fetch(`${BASE_URL}/restaurant/allpending`,{
    method:'GET',
    headers:{
        Authorization:`Bearer ${authToken}`
    }
});
if(!response.ok)
{
      throw new Error('failed to get restaurant'); 
}
return response.json();
    }
    const {data:pendingRestaurants,isLoading}=useQuery('getPendingList',getPendingList);

    return {pendingRestaurants,isLoading};
}