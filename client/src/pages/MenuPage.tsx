import { useGetRestaurant } from "@/api/RestaurantSearchApi";
import LoadingState  from "@/components/Loader";
import { useParams } from "react-router-dom"
import { Card } from "@/components/ui/card";
import { IndianRupee, WatchIcon } from "lucide-react";
import MenuCard from "@/components/MenuCard";

export const MenuPage=()=>
{
    // const items=useAppSelector(state=>state.cart.items);
   
    const {restaurantId}=useParams();
    const {restaurant,isLoading}= useGetRestaurant(restaurantId);
  
    if(isLoading)
        return <LoadingState/>
    
   
return(
    <>
    <div className="mt-32 flex justify-center">
        <Card className="w-3/2 p-4 flex gap-4">
    <p className="text-3xl font-semibold">{restaurant?.restaurantName}</p>
    <div>
    <p className="text-sm font-semibold flex items-center">
       <IndianRupee color="green" size={17}/>{restaurant?.deliveryPrice}/Person</p>
    
    <p className="text-sm font-semibold flex items-center">
       <WatchIcon color="green" className="size-4"/> {restaurant?.estimatedDeliveryTime}mins</p>

    </div>
        </Card>
    </div>

    <div className="mt-4">
      <p className="text-center text-xl font-semibold italic text-orange-400">  Menu</p>
      <div className="mt-4 w-full p-2 flex flex-col items-center gap-4 sm:justify-center">
       {
restaurant?.menuItems.map((item)=>{
    return (
       <MenuCard item={item} restaurant={restaurant}/>
    )
})
       }
       </div>
    </div>
    </>
)
}