import { Order, Restaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";

const BASE_URL=import.meta.env.VITE_ORDER_BASE_URL;

export const useGetOrder=(orderId:string|undefined)=>{
const getOrder=async():Promise<Order>=>{
    const response=await fetch(`${BASE_URL}/order/${orderId}`);
    if(!response.ok) {
                    throw new Error('Failed to get Order');

    }
    return response.json();
}
const {data:order}=useQuery("fetchOrder",getOrder,{enabled:!!orderId});
return {order};
}
export const useGetAllOrder=()=>{
    const {getAccessTokenSilently}=useAuth0();

const getOrders=async():Promise<Order[]>=>{
        const authToken=await getAccessTokenSilently();

    const response=await fetch(`${BASE_URL}/order`,
        {
         method:'GET',
        headers:{
            Authorization: `Bearer ${authToken}`,
        }    
        }
    );
    if(!response.ok) {
                    throw new Error('Failed to get Order');

    }
    return response.json();
}
const {data:orders,isLoading}=useQuery("fetchOrder",getOrders);
return {orders,isLoading};
}
export const useGetRestaurantOrder=(restId:string|undefined)=>{

    const getOrder=async():Promise<Order>=>{
        const response=await fetch(`${BASE_URL}/order/restaurant/${restId}`);
        if(!response.ok){
                            throw new Error('Failed to get Order');
        }
        return response.json();
    }
    const {data:restuarants,isLoading}=useQuery('fetchRestOrder',getOrder);
    return {restuarants,isLoading};
}