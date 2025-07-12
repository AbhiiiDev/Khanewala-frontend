import { useGetOrder } from "@/api/OrderApi";
import { useParams } from "react-router-dom"
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useAppDispatch } from "@/app/hooks";
import { clearCart } from "@/features/cart/cartSlice";

const OrderSummaryPage = () => {
    const {orderId}=useParams();
        const {order}=useGetOrder(orderId);

        const subTotal=order?.items.reduce((acc,item)=>acc+item.price*item.quantity,0);
        const dispatch=useAppDispatch()
        useEffect(()=>{
dispatch(clearCart());
        },[])
  return (
  <div className="mt-32 max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
      <div className="flex items-center gap-4 mb-6">
        <img src={order?.restaurant.imageUrl} alt="Restaurant" className="w-16 h-16 rounded-full" />
        <div>
          <h2 className="text-xl font-semibold">{order?.restaurant.restaurantName}</h2>
          <p className="text-sm text-muted-foreground">{"3h"}</p>
        </div>
        <Badge variant="outline" className={order?.paymentStatus==='paid'?"ml-auto bg-green-500":"bg-red-500"}>
          {order?.status}
        </Badge>
      </div>

      <Separator />

      <div className="mt-4">
        <h3 className="font-semibold text-lg mb-2">Order Details</h3>
        {order?.items.map((item, i) => (
          <div key={i} className="flex justify-between text-sm py-1">
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>₹{item.quantity * item.price}</span>
          </div>
        ))}
      </div>

      <Separator className="my-4" />

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subTotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Charges</span>
          <span>₹{order?.restaurant.deliveryPrice}</span>
        </div>
        <div className="flex justify-between">
          <span>Taxes</span>
          <span>₹{30}</span>
        </div>
        <div className="flex justify-between font-semibold text-base pt-2">
          <span>Total Paid</span>
          <span>₹{order?.total}</span>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="text-sm space-y-2">
        <p><span className="font-medium">Order ID:</span> {orderId}</p>
        <p><span className="font-medium">Delivered At:</span> {order?.restaurant.estimatedDeliveryTime}</p>
        <p><span className="font-medium">Payment Mode:</span> {"online"}</p>
        <p><span className="font-medium">Delivery Address:</span> {order?.user.addressLine1}</p>
      </div>

      <div className="mt-6 flex gap-3">
        <Button variant="outline">Need Help?</Button>
        <Button className="bg-orange-600 text-white hover:bg-orange-700">Reorder</Button>
      </div>
    </div>
  )
}

export default OrderSummaryPage
