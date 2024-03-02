// app/store.js

import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import navigationReducer from './navigationSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    navigation: navigationReducer,
    // Другие срезы, если есть
  },
});
