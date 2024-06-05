import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./cartSlice";

const Store = configureStore({
  reducer: {
    cart: CardSlice,
  },
});

export default Store;
