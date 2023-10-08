import { configureStore } from "@reduxjs/toolkit";
import auth from "./authentication";

export const store = configureStore({
  reducer: {
    auth: auth,
  },
});
