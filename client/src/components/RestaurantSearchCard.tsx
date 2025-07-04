import { Restaurant } from "@/types"
import { Link } from "react-router-dom"
import { AspectRatio } from "./ui/aspect-ratio"
import { Banknote, Clock, Dot } from "lucide-react"

type Props={
restaurant:Restaurant
}



function RestaurantSearchCard({restaurant}:Props) {
  return (
    <Link to={`/detail/${restaurant._id}`} className="grid lg:grid-cols-[2fr_3fr] gap-5 group">
        <AspectRatio ratio={16/6}>
        <img src={restaurant.imageUrl} className="object-cover rounded-md w-full h-full"/>
        </AspectRatio>
    <div>
    <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:underline group-hover:text-orange-600">
          {restaurant.restaurantName}
        </h3>
        <div id="card-content" className="grid md:grid-cols-2 gap-2">
          <div className="flex flex-row flex-wrap">
            {restaurant.cuisines?.map((item, index) => (
              <span className="flex" key={index}>
                <span>{item}</span>
                {index < restaurant.cuisines.length - 1 && <Dot />}
              </span>
            ))}
          </div>
          <div className="flex gap-2  flex-col">
            <div className="flex gap-2">
              <Clock className="text-green-600"/>{restaurant.estimatedDeliveryTime} mins</div>
            <div className="flex gap-2"><Banknote /> Rs. {restaurant.deliveryPrice}</div>
          </div>
          </div>
        
    </div>
    </Link>
  )
}



export default RestaurantSearchCard

