import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import boulderReducer from './boulder.slice';

export const store = configureStore({
  reducer: {
    boulder: boulderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
