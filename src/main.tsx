import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";

const queryClient = new QueryClient(); // the cache + brain for all queries

// getElementById returns "HTMLElement | null". The "!" is a non-null
// assertion: YOU promise TS that #root exists (it does — it's in index.html).
// Without it, strict mode would force you to handle the null case.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
