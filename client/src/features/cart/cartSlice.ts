import { CartState, MenuItem, Restaurant } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:CartState={
    restaurant:undefined,
    items:[]
}

export const cartSlice=createSlice({
    name:'Cart',
    initialState,
    reducers:{
        setRestaurant(state,action:PayloadAction<Restaurant>){
            if(state.restaurant?._id!== action.payload._id)
            {
                state.restaurant=action.payload;
                state.items=[];
            }
        },
        addToCart(state,action:PayloadAction<MenuItem>) {
            const item=action.payload;
            const existingItem = state.items.find((i) => i._id === item._id);

            if(existingItem)
            {
                existingItem.quantity+=1;
            }
            else {
                state.items.push({
                    ...item,
                    quantity:1
                })
            }
        },
        decreaseQuantity(state,action:PayloadAction<string>){
            const item=action.payload;
            const existingItem = state.items.find((i) => i._id === action.payload);
            if (existingItem) {
              if (existingItem.quantity === 1) {
                state.items = state.items.filter((i) => i._id !== item);
              } else {
                existingItem.quantity -= 1;
              }
            }
        },
        clearCart(state){
            state.items=[],
            state.restaurant=undefined
        }
    }
})
export const {setRestaurant,addToCart,decreaseQuantity,clearCart}=cartSlice.actions;

export default cartSlice.reducer;