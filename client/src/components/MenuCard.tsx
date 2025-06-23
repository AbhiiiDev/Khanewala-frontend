import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { Card } from './ui/card'
import { MenuItem, Restaurant } from '@/types'
import { addToCart, decreaseQuantity, setRestaurant } from '@/features/cart/cartSlice';
import { Button } from "@/components/ui/button";
import { IndianRupee } from "lucide-react";
import ButtonCounter from "./ButtonCounter";

type Props={
    item:MenuItem;
    restaurant:Restaurant;
}
const MenuCard = ({item,restaurant}:Props) => {
    const dispatch=useAppDispatch();
        const handleAddtoCart=()=>{
            dispatch(setRestaurant(restaurant));
            dispatch(addToCart(item))
        }
        const handleDecrease=()=>{
            dispatch(decreaseQuantity(item._id))
        }
        const quantity=useAppSelector((state)=>{
            const found=state.cart.items.find((i)=>i._id===item._id);
            return found?.quantity || 0;
        })
  return (
    <Card className="w-[30%] h-32">
    <div className="flex-col p-4 text-base font-semibold w-52">
    <p className="text-gray-600">{item.name}</p>
    <p className="flex items-center"> <IndianRupee color="green" size={17}/> {item.price}</p>
    </div>
    <div className="flex justify-center ">
    {quantity === 0 ? (
        <Button variant="outline" className="w-1/4 text-orange-500 font-bold text-lg" onClick={handleAddtoCart}>Add</Button>
      ) : (
      <ButtonCounter onClickMinus={handleDecrease} onClickPlus={handleAddtoCart} quantity={quantity}/>
      )}
   
    </div>
    </Card>
  )
}

export default MenuCard
