import { createSlice } from "@reduxjs/toolkit";

//const initialState = [];
const initialState = JSON.parse(localStorage.getItem("cartList")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
      let data = JSON.stringify(state);
      localStorage.setItem("cartList", data);
    },
    remove(state, action) {
      let filterData = state.filter((item) => item.id !== action.payload);
      let restData = JSON.stringify(filterData);
      localStorage.setItem("cartList", restData);
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
