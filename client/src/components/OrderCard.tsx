import { FC } from "react"
import { Button } from "@/components/ui/button"

interface OrderItem {
  name: string
  quantity: number
}

interface PastOrderCardProps {
  imageUrl: string
  restaurantName: string
  location: string
  orderId: string
  orderTime: string
  deliveryTime: string
  items: OrderItem[]
  totalPaid: number
  orderStatus:string
}

const PastOrderCard: FC<PastOrderCardProps> = ({
  imageUrl,
  restaurantName,
  location,
  orderId,
  orderTime,
  deliveryTime,
  items,
  totalPaid,
  orderStatus
}) => {
  return (
    <div className="border rounded-md shadow p-4 w-full max-w-3xl mx-auto bg-white">

      <div className="flex gap-4">
        <img
          src={imageUrl}
          alt="Food"
          className="w-[120px] h-[120px] object-cover rounded"
        />

        <div className="flex-1">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-semibold">{restaurantName}</h3>
              <p className="text-sm font-semibold text-muted-foreground">{location}</p>
              <p className="text-sm text-gray-500">
                ORDER #{orderId} | {orderTime}
              </p>
              <button className="text-orange-600 font-semibold text-sm mt-1">
                VIEW DETAILS
              </button>
            </div>
            <div className="text-sm text-right">
              <p className="text-gray-600">{orderStatus} on {deliveryTime}</p>
              <span className="text-black text-sm bg-green-500 rounded-full p-1">✔</span>
            </div>
          </div>

          <hr className="my-2" />

          <div className="flex justify-between flex-wrap items-start text-sm">
            <p className="text-gray-800 font-bold max-w-md">
              {items.map((item, index) => (
                <span key={index}>
                  {item.name} x {item.quantity}
                  {index !== items.length - 1 && ", "}
                </span>
              ))}
            </p>
            <p className="font-semibold whitespace-nowrap">Total Paid: ₹{totalPaid}</p>
          </div>

          <div className="flex gap-4 mt-3">
            <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
              REORDER
            </Button>
            <Button size="sm" variant="outline">HELP</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PastOrderCard
