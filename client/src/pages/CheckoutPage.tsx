import { useAppSelector } from '@/app/hooks'
import { CheckoutButton } from '@/components/CheckoutButton';
import CheckoutItemCard from '@/components/CheckoutItemCard';
import { IndianRupee } from 'lucide-react';

const CartPage = () => {
    const items=useAppSelector(state=>state.cart.items);
    const restaurant=useAppSelector(state=>state.cart.restaurant);
    if(items.length===0) return <div className='mt-10 min-h-[90vh] flex items-center justify-center'>Ooops!! Your Cart is Empty</div>

    const Itemtotal=items.reduce((acc,item)=> acc+item.price* item.quantity,0);
    const deliveryPrice=restaurant?.deliveryPrice;
    const payable=Itemtotal+deliveryPrice!;

  return (
    <div className='min-h-[90vh] flex flex-col mt-40 items-center'>
    <div className='flex flex-col items-center gap-2 w-1/2'>
      {items.map((item)=>(
        <CheckoutItemCard item={item} key={item._id}/>
      ))}
    </div>
      <div className='w-[30%] mt-2 text-sm'>
        <h2 className='font-bold'>Bill details:</h2>
        <div className='mt-2 flex flex-col gap-1'>

        <div className='flex gap-3 justify-between'>
          <span>
          Item Total: 
          </span>
          <span className='flex items-center'> <IndianRupee color="green" size={14}/>{Itemtotal}</span> 
          </div>
        <div className='flex gap-3 justify-between'>
          <span>Delivery Fee: </span>
            <span className='flex items-center'>      <IndianRupee color="green" size={14}/> {deliveryPrice} </span></div>
        <hr className='border-2 border-black mt-2'/>
        <div className='flex gap-3 justify-between font-bold'>
          <span>Payable Total : </span>
            <span className='flex items-center'>      <IndianRupee color="green" size={14}/> {payable} </span></div>
        </div>
      </div>
      <div className='mt-4'>
      <CheckoutButton/>
      </div>
    </div>
  )
}

export default CartPage
