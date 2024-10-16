import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./reducers/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </StrictMode>
);
