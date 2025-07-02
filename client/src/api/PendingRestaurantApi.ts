import { PendingRestaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "sonner";

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
export const useApprovePendingList=()=>{
    const queryClient = useQueryClient();

    const {getAccessTokenSilently}=useAuth0();
    const approvePendingRequest=async (pendId:string)=>{
        const authToken=await getAccessTokenSilently();
const response=await fetch(`${BASE_URL}/restaurant/approve/${pendId}`,{
    method:'PUT',
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
    const {mutateAsync:approvePending}=useMutation({mutationFn:approvePendingRequest,onSuccess:()=>{  
        toast.success('Restaurant Approved')
            queryClient.invalidateQueries('getPendingList') // Invalidate list

    },
    onError:()=>{
        toast.error('Error approving Restaurant')

    }
});
  
    return {approvePending};

}
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
    const {data:pendingRestaurants,isLoading}=useQuery('getPendingList',getPendingList,{
         staleTime: 1000 * 60 * 5,        // ✅ 5 minutes (data considered "fresh")
      cacheTime: 1000 * 60 * 10,       // ✅ 10 minutes in background
      refetchOnWindowFocus: false,    // ✅ Don’t refetch when tab regains focus
      refetchOnMount: false    
    });

    return {pendingRestaurants,isLoading};
}