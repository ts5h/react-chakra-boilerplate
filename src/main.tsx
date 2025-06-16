import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/styles/global/index.scss";
import { Provider } from "@/components/ui/provider";
import App from "@/App";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
createRoot(rootElement).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
);
