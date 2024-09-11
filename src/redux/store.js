import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

// export const store = configureStore({
//   reducer,
// });

const persistConfig = {
  key: "root",
  storage,
  whitelist:['auth', 'profile'],
}

const persistedReducer = persistReducer(persistConfig, reducer) 

export const store = configureStore({
  reducer: persistedReducer,

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(rtkMiddlewares),
});