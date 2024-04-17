import { createSlice } from '@reduxjs/toolkit';
import { sliderData } from '../../assets/data/dummyData';

export const sliderSlice = createSlice({
	name: 'slider',
	initialState: {
		value: 0,
	},
	reducers: {
		prevSlide(state) {
			state.value =
				state.value - 1 >= 0 ? state.value - 1 : sliderData.length - 1;
		},
		nextSlide(state) {
			state.value = state.value + 1 < sliderData.length ? state.value + 1 : 0;
		},
		dotSlide(state, action) {
			state.value = action.payload;
		},
	},
});

export const { prevSlide, nextSlide, dotSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
