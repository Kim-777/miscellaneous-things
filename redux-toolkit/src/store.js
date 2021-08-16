import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import usersReducer from './features/users/usersSlice';


export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
})
