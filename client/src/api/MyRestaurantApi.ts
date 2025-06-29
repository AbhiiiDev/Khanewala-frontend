import { PendingRestaurant, Restaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";



const BASE_URL=import.meta.env.VITE_RES_BASE_URL;


export const useGetRestaurantRequest=()=>{

    
const {getAccessTokenSilently}=useAuth0();

const getRestaurantRequest=async():Promise<Restaurant>=>{
    const authToken=await getAccessTokenSilently();

    const response=await fetch(`${BASE_URL}/restaurant`,{
        method:'GET',
        headers:{
            Authorization: `Bearer ${authToken}`,
        }
    });
    if(!response.ok)
    {
        throw new Error('failed to get restaurant');
    }
    return response.json();
};

const {data:restaurant,isLoading}=useQuery("fetchRestaurant",getRestaurantRequest)

return { restaurant,isLoading};

}

export const useGetStatusRestaurant=()=>{
const {getAccessTokenSilently}=useAuth0();

    const getStatus=async():Promise<PendingRestaurant>=>{
    const authToken=await getAccessTokenSilently();
const response=await fetch(`${BASE_URL}/restaurant/status`,{
 method:'GET',
        headers:{
            Authorization: `Bearer ${authToken}`,
        }
})
if(!response.ok) throw new Error("Unable to fetch status");
return response.json();
    };

    const {data:PendingRestaurant,isLoading}=useQuery("fetchStatus",getStatus)
    return {PendingRestaurant,isLoading}
}

export const useGetApproval=()=>{
  const {getAccessTokenSilently}=useAuth0();
    const createPendingRestaurantRequest=async (restaurantFormData:FormData):Promise<PendingRestaurant>=>{
        const authToken=await getAccessTokenSilently();

        const response=await fetch(`${BASE_URL}/restaurant/approval`,
            {
                method:"POST",
                headers:{
                    Authorization: `Bearer ${authToken}`,
                },
                body:restaurantFormData
            }
        );
        if(!response.ok){
            throw new Error('Failed to create restaurant'); 
        }
        return response.json();
    };
    const {mutateAsync:requestApproval,
        isLoading,isError,isSuccess
    }=useMutation(createPendingRestaurantRequest);

    if(isSuccess)
        {
            toast.success('restaurant created')
        }

            if(isError)
    {
    toast.error('error occured while upadting restaurant');
}


    return {
        requestApproval,isLoading,isError,isSuccess
    }
    
 
}

export const useCreateRestaurantRequest=()=>
       
    {

const {getAccessTokenSilently}=useAuth0();

    const createRestaurantRequest=async (restaurantFormData:FormData):Promise<Restaurant>=>{
        const authToken=await getAccessTokenSilently();

        const response=await fetch(`${BASE_URL}/restaurant`,
            {
                method:"POST",
                headers:{
                    Authorization: `Bearer ${authToken}`,
                },
                body:restaurantFormData
            }
        );


        if(!response.ok){
            throw new Error('Failed to create restaurant'); 
        }
        return response.json();
    };
    const {mutateAsync:createRestaurant,
        isLoading,isError,isSuccess
    }=useMutation(createRestaurantRequest);

    if(isSuccess)
        {
            toast.success('restaurant created')
        }

            if(isError)
    {
    toast.error('error occured while upadting restaurant');
}


    return {
        createRestaurant,isLoading,isError,isSuccess
    }
    
 
  

}

export const useUpdateRestaurantRequest=()=>{
    const {getAccessTokenSilently}=useAuth0();

    const updateRestaurantRequest=async(restaurantFormData:FormData) =>{
        const authToken=await getAccessTokenSilently();
const response=await fetch(`${BASE_URL}/restaurant`,
    {
        method:"PUT",
        headers:{
            Authorization:  `Bearer ${authToken}`,
        },
        body:restaurantFormData
    }
);

if(!response.ok){
    throw new Error('failed to update restaurnat');
}

return response.json();
    };

    const {mutateAsync:updateRestaurant,isError,isLoading,isSuccess}=useMutation(updateRestaurantRequest);


    if(isSuccess){
        toast.success('restaurant updated');
    }
    if(isError){
        toast.error(error.toString());
    }

    return{
        updateRestaurant,isLoading
    }
}

export const useGetPendingRestaurant=()=>{
    const {getAccessTokenSilently}=useAuth0();

    const getPendingRestaurant=async():Promise<PendingRestaurant>=>{
        const authToken=await getAccessTokenSilently();
const response=await fetch(`${BASE_URL}/restaurant/pending`,{
      method:'GET',
headers:{
    Authorization:`Bearer ${authToken}`,
}
});
if(!response.ok) throw new Error('failed to fetch restaurant') ;
return response.json();
    }


    const {data:PendingRestaurant,isLoading}=useQuery('fetchPendingRestaurant',getPendingRestaurant);
    return {PendingRestaurant,isLoading};
}