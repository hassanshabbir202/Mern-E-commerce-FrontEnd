import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkOutShippingData : [],
  checkOutNameAndAdress: [],
  idValue : ""
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    checkOutShippingData : (state , action) => {
        state.checkOutShippingData.push(action.payload);
    },
     nameandAdressFunction: (state , action) => {
       state.checkOutNameAndAdress.push(action.payload)
     },
     idValue : (state , action) => {
      state.idValue = action.payload;
     }
  },
});

// Action creators are generated for each case reducer function
export const { checkOutShippingData , nameandAdressFunction , idValue } = checkoutSlice.actions;

export default checkoutSlice.reducer;
