import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducer/reducer";

const store: any = configureStore(
  {
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  }
);

export { store };
