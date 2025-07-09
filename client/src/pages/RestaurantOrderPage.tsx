import { useGetRestaurantOrder } from '@/api/OrderApi'
import LoadingState from '@/components/Loader';
import { useParams } from 'react-router-dom'

const RestaurantOrderPage = () => {
    const {restId}=useParams();
    const {restuarants,isLoading}=useGetRestaurantOrder(restId);
    if(!restuarants) return (
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
        {restuarants?.items.map((item)=>(
            <div className='flex'>
                {item.name}{"  "} {item.quantity}
                </div>
        ))}
        </div>
  )
}

export default RestaurantOrderPage;
