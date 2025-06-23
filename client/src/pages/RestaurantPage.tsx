import { useCreateRestaurantRequest, useGetRestaurantRequest, useUpdateRestaurantRequest } from '@/api/MyRestaurantApi'
import CreateRestaurantForm from '@/forms/restaurant-form/CreateRestaurantForm'

export default function RestaurantPage() {

const {restaurant,isLoading:isGetLoading}=useGetRestaurantRequest();
const {createRestaurant,isLoading:isCreateLoading}=useCreateRestaurantRequest();
const {updateRestaurant,isLoading:isUpdateLoading}=useUpdateRestaurantRequest();

let isEditing=false;
if(restaurant){
  isEditing=true;
}
else
isEditing=false;
  return (
<CreateRestaurantForm  restaurant={restaurant} isLoading={isEditing? isUpdateLoading:isCreateLoading} onSave={isEditing? updateRestaurant:createRestaurant}/>
  )
}
