import { useGetRestaurantOrder } from '@/api/OrderApi'
import LoadingState from '@/components/Loader';
import { useParams } from 'react-router-dom'

const RestaurantOrderPage = () => {
    const {restId}=useParams();
    const {orders,isLoading}=useGetRestaurantOrder(restId);
    if(!orders) return (
        <div className='flex items-center justify-center min-h-[90vh]'>
            Sorry ! No Order Request Found
        </div>
    )
    if(isLoading)
        return <LoadingState/>
  return (
  <div className="mt-32 min-h-[70vh]">
      <div className="flex flex-col gap-8 p-2">
        </div>
        {orders?.map((order)=>(
            <div className='flex'>
                {order.items.map((cartItem)=>(
                    <div>
                        {cartItem.name}
                        </div>
                ))}{"  "} {order.total}
                </div>
        ))}
        </div>
  )
}

export default RestaurantOrderPage;
