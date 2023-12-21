import { configureStore } from "@reduxjs/toolkit";
import { weddingSlice } from "./wedding/weddingSlice";

export const store = configureStore({
  reducer: {
    weddings: weddingSlice.reducer,
  },
});
