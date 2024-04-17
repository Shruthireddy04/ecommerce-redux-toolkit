import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cart: [],
		totalAmount: 0,
		noOfItems: 0,
	},
	reducers: {
		addCart(state, action) {
			const product = action.payload;
			const exist = state.cart.find(
				(item) =>
					item.id === product.id &&
					item.color === product.color &&
					item.size === product.size
			);
			if (exist) {
				exist.quantity++;
				exist.totalPrice += product.price;
				state.noOfItems++;
				state.totalAmount += product.price;
			} else {
				state.cart.push({
					id: product.id,
					price: product.price,
					size: product.size,
					quantity: 1,
					img: product.img,
					totalPrice: product.price,
					name: product.name,
					text: product.text,
					color: product.color,
				});
				state.noOfItems++;
				state.totalAmount += product.price;
			}
		},
		removeFromCart(state, action) {
			const product = action.payload;
			const exist = state.cart.find(
				(item) =>
					item.id === product.id &&
					item.color === product.color &&
					item.size === product.size
			);
			if (exist.quantity === 1) {
				state.cart = state.cart.filter(
					(item) =>
						item.id !== product.id ||
						item.color !== product.color ||
						item.size !== product.size
				);
				// exist.quantity++;
				// exist.totalPrice += product.price;
				state.noOfItems--;
				state.totalAmount -= product.price;
			} else {
				exist.quantity--;
				exist.totalPrice -= product.price;

				state.noOfItems--;
				state.totalAmount -= product.price;
			}
		},
	},
});

export const { addCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
