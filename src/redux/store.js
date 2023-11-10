import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

export const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
