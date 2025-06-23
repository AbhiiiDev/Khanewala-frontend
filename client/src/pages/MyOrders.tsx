import { useGetAllOrder } from "@/api/OrderApi"
import Loader from "@/components/Loader";
import PastOrderCard from "@/components/OrderCard";
import { useEffect } from "react"

const MyOrders = () => {

   const {orders,isLoading} =useGetAllOrder();
    useEffect(()=>{
    },[])
    const sortedOrders=orders?.sort((a,b)=>new Date(b.createdAt).getTime()-new Date(a.createdAt).getTime())
    if(isLoading) return <Loader/>
  return (
    <div className="mt-32 min-h-[70vh]">
      <h2 className="text-xl font-bold mb-4 text-center">Past Orders</h2>
      <div className="flex flex-col gap-8 p-2">
{sortedOrders?.map((order)=>(
    <div>
  <PastOrderCard
  imageUrl={order.restaurant.imageUrl}
  restaurantName={order.restaurant.restaurantName}
  location={order.restaurant.city}
  orderId={order._id}
  orderStatus={order.paymentStatus}
  orderTime={order.createdAt}
  deliveryTime="Sun, Mar 2, 2025, 02:31 PM"
  items={order.items}
  totalPaid={order.total}
/>

        </div>
))}
      </div>
    </div>
  )
}

export default MyOrders
