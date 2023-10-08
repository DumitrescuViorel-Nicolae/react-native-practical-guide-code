import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    isAuthenticated: false,
  },

  reducers: {
    authenticate: (state, action) => {
      (state.isAuthenticated = true), (state.token = action.payload.token);
    },

    logout: (state, action) => {
      (state.isAuthenticated = false), (state.token = "");
    },
  },
});

export default authSlice.reducer;
export const authenticate = authSlice.actions.authenticate;
export const logout = authSlice.actions.logout;
