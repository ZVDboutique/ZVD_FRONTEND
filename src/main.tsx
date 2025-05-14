import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AppContextProvider } from "./Utils/appContext.tsx";

createRoot(document.getElementById("root")!).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
