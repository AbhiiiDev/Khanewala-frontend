import { CartItem } from '@/types';
import { Card } from './ui/card';
import { IndianRupee } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import ButtonCounter from './ButtonCounter';
import { addToCart, decreaseQuantity, setRestaurant } from '@/features/cart/cartSlice';

type Props = {
  item: CartItem;
};

const CheckoutItemCard = ({ item }: Props) => {
  const quantity = useAppSelector((state) => {
    const found = state.cart.items.find((i) => i._id === item._id);
    return found?.quantity || 0;
  });
  const restaurant=useAppSelector((state)=> state.cart.restaurant);
  const dispatch=useAppDispatch();
          const handleAddtoCart=()=>{
            if(!restaurant) return;
              dispatch(setRestaurant(restaurant));
              dispatch(addToCart(item))
          }
          const handleDecrease=()=>{
              dispatch(decreaseQuantity(item._id))
          }

  return (
    <Card className="bg-white w-full min-h-20 max-w-md p-4 shadow-sm hover:shadow-md rounded-xl transition-shadow duration-300 border">
      <div className=" flex justify-between items-center">
        <div className='w-[50%]'>
          <p className="text-lg font-semibold text-gray-800">{item.name}</p>
          {quantity > 1 && (
            <p className="text-sm text-gray-500">x {quantity}</p>
          )}
        </div>
        <ButtonCounter onClickMinus={handleDecrease} onClickPlus={handleAddtoCart} quantity={quantity}/>
        <div className="flex items-center gap-1 text-green-600 font-bold text-md">
          <IndianRupee size={18} />
          <span>{quantity * item.price}</span>
        </div>
      </div>
    </Card>
  );
};

export default CheckoutItemCard;
