import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ServiceState {
  currentService: "airtime" | "data" | "electricity" | "cable" | null;
  topType: any;
}

const initialState: ServiceState = {
  currentService: null,
  topType: null,
};

const currentServiceSlice = createSlice({
  name: "currentService",
  initialState,
  reducers: {
    changeService(state, action: PayloadAction<any>) {
      state.currentService = action.payload;
    },
    changeServiceTopType(state, action: PayloadAction<any>) {
      state.topType = action.payload;
    },
  },
});

export const { changeService, changeServiceTopType } =
  currentServiceSlice.actions;
export default currentServiceSlice.reducer;
