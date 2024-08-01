import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
const initialState = {
  selectedAccount: "Customer",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSelectedAccount: (state, { payload }) => {
      state.selectedAccount = payload;
    },
  },
});

export const { setSelectedAccount } = authSlice.actions;
export default authSlice.reducer;
export const getSelectedAccount = (state) => state?.auth.selectedAccount;
