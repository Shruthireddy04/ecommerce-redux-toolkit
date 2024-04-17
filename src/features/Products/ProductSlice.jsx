import { createSlice } from '@reduxjs/toolkit';
import { storeData } from '../../assets/data/dummyData';

export const productsSlice = createSlice({
	name: 'products',
	initialState: {
		products:
			JSON.parse(sessionStorage.getItem('filteredProducts')) || storeData,
		singleProduct:
			JSON.parse(sessionStorage.getItem('singleProduct')) || storeData,
	},
	reducers: {
		filterProducts(state, action) {
			const filteredProducts = storeData?.filter((ele, index) => {
				return ele.type === action.payload;
			});
			sessionStorage.setItem(
				'filteredProducts',
				JSON.stringify(filteredProducts)
			);
			state.products = filteredProducts;
		},
		singleProduct(state, action) {
			const filteredProducts = storeData?.filter((ele, index) => {
				return ele.id === action.payload;
			});
			sessionStorage.setItem('singleProduct', JSON.stringify(filteredProducts));
			state.singleProduct = filteredProducts;
		},
	},
});

export const { filterProducts, singleProduct } = productsSlice.actions;
export default productsSlice.reducer;
