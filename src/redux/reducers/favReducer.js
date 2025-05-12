// FavReducer
import {createSlice} from '@reduxjs/toolkit';

const favReducerSlice = createSlice({
  name: 'favReducer',
  initialState: {value: 0},
  reducers: {
    setFavProduct: (state, action) => {
      state.isUserLogin = [...state.favProductData, action];
    },
  },
});

export const {setFavProduct} = favReducerSlice.actions;
export default favReducerSlice.reducer;
