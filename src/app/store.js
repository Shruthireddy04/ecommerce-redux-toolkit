import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from '../features/Slider/SliderSlice';
import productReduces from '../features/Products/ProductSlice';
import cartReducer from '../features/Cart/CartSlice';
import authReducer from '../features/Auth/AuthSlice';

export const store = configureStore({
	reducer: {
		slider: sliderReducer,
		products: productReduces,
		cart: cartReducer,
		user: authReducer,
	},
});
