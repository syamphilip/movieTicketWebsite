import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

import FirebaseSlice from "./FirebaseSlice";
import APIDataSlice from "./APIDataSlice";
import UserStatusSlice from "./IsUserLoggedSlice";
import BookingSlice from "./BookingSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  firebaseUser: FirebaseSlice,
  APIData: APIDataSlice,
  UserStatus: UserStatusSlice,
  UserMovie: BookingSlice,
});

const presistReduce = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: presistReduce,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
