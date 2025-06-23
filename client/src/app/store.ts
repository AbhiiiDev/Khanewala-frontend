import {combineReducers, configureStore} from '@reduxjs/toolkit';
import CartReducer from '../features/cart/cartSlice'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
const rootReducer=combineReducers({
    cart:CartReducer,
})
const persistConfig={
    key:'root',
    storage
}

const peristedReducer=persistReducer(persistConfig,rootReducer);

export const store=configureStore({
    reducer:peristedReducer
})
export const persistor=persistStore(store);
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store