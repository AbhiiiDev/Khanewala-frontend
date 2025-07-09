export type User = {
    _id: string;
    email: string;
    name: string;
    addressLine1: string;
    city: string;
    country: string;
    role:string;
  };
export type UserResponse={
  currentUser:User;
  restaurantId:string;
}
  
  export type MenuItem = {
    _id: string;
    name: string;
    price: number;
  };
  

  export type Restaurant = {
    _id: string;
    user: string;
    restaurantName: string;
    city: string;
    country: string;
    deliveryPrice: number;
    estimatedDeliveryTime: number;
    cuisines: string[];
    menuItems: MenuItem[];
    imageUrl: string;
    lastUpdated: string;
  };
  export type PendingRestaurant = {
    _id: string;
    user: User;
    restaurantName: string;
    city: string;
    country: string;
    deliveryPrice: number;
    estimatedDeliveryTime: number;
    cuisines: string[];
    menuItems: MenuItem[];
    imageUrl: string;
    lastUpdated: string;
    isApproved:string;
  };

  export type Results={
    data:Restaurant[];
    pagination:{
      total:number;
      page:number;
      pages:number;

    }
  }
  export type RestaurantSearchResponse = {
    data: Restaurant[];
    pagination: {
      total: number;
      page: number;
      pages: number;
    };
  };

export type CartItem= MenuItem & {
  quantity:number;
}

export type CartState = {
  restaurant: Restaurant | undefined;
  items: CartItem[];
};
export type Order={
  _id:string;
  user:User;
  restaurant:Restaurant;
items:CartItem[];
total:number;
status:string;
paymentStatus:string;
paymentIntentId?:string;
createdAt:string;
updatedAt:string;
}