// Desc: Slice for initiating payment
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaymentState {
  payload: any;
  paymentFor: string | null;
  payButtonClicked: boolean | string;
  status: string | null;
}

const initialState: PaymentState = {
  payload: null,
  paymentFor: null,
  payButtonClicked: false,
  status: null,
};

const initiatePayment = createSlice({
  name: "initiatePayment",
  initialState,
  reducers: {
    push(state, action: PayloadAction<{ payload: any; paymentFor: string }>) {
      state.payload = action.payload.payload;
      state.paymentFor = action.payload.paymentFor;
    },
    updateStatus(state, action: PayloadAction<string | null>) {
      state.status = action.payload;
    },
    clearPayState(state) {
      state.paymentFor = null;
      state.payload = null;
    },
    validateFormFields(state) {
      state.payButtonClicked = Date.now().toString();
    },
    updateFormFieldState(state, action: PayloadAction<any>) {
      const statetmp = state.payload;

      statetmp[action.payload.field] = action.payload.value;
      state.payload = statetmp;
    },
  },
});

export const { push, clearPayState, updateStatus, validateFormFields } =
  initiatePayment.actions;
export default initiatePayment.reducer;
