import {createSlice} from '@reduxjs/toolkit';

const userLoginReducerSlice = createSlice({
  name: 'userLoginReducer',
  initialState: {loginData: false},
  reducers: {
    isUserLogin: (state, action) => {
      state.loginData = action?.payload;
    },
  },
});

export const {isUserLogin} = userLoginReducerSlice.actions;
export default userLoginReducerSlice.reducer;
