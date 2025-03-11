import { configureStore } from "@reduxjs/toolkit";

import currentServiceReducer from "./features/service/service-slice.ts";
import initiatePaymentReducer from "./features/initiate-payment/initiate-payment-slice.ts";

export const store = configureStore({
  reducer: {
    currentService: currentServiceReducer,
    initiatePayment: initiatePaymentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
