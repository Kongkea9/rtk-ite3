import { createSlice } from "@reduxjs/toolkit";

type CounterType = {
  value: number;
};

// initialstate
const initialState: CounterType = {
  value: 0,
};

// createSlice
const counterSlide = createSlice({
  name: "counter",
  initialState,
  reducers:{
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    }
  }
})


export const {incremented, decremented, reset } = counterSlide.actions;


export default counterSlide.reducer;