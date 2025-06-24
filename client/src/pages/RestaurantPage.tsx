import { useCreateRestaurantRequest, useGetApproval, useGetRestaurantRequest, useGetStatusRestaurant, useUpdateRestaurantRequest } from '@/api/MyRestaurantApi'
import CreateRestaurantForm from '@/forms/restaurant-form/CreateRestaurantForm'
import RestaurantStatus from './RestaurantStatusPage';

export default function RestaurantPage() {

const {restaurant,isLoading:isGetLoading}=useGetRestaurantRequest();
const {PendingRestaurant}=useGetStatusRestaurant();
const {requestApproval}=useGetApproval();
const {createRestaurant,isLoading:isCreateLoading}=useCreateRestaurantRequest();
const {updateRestaurant,isLoading:isUpdateLoading}=useUpdateRestaurantRequest();

let isEditing=false;
if(restaurant){
  isEditing=true;
}
if(PendingRestaurant?.isApproved==="pending")
  return (
<RestaurantStatus/>
  )
else
isEditing=false;
  return (
<CreateRestaurantForm  restaurant={restaurant} isLoading={isEditing? isUpdateLoading:isCreateLoading} onSave={isEditing? updateRestaurant:requestApproval}/>
  )
}
