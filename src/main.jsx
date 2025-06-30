import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import CreateTrip from "./pages/CreateTrip";
import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/clerk-react";
import SignInPage from "./components/auth/SignInPage";
import Authenticate from "./components/auth/Authenticate";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-trip",
    element: <Authenticate><CreateTrip /></Authenticate>,
  },
  {
    path:'/auth',
    element:<SignInPage />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      
      <RouterProvider router={router} />
      <Toaster />
    </ClerkProvider>
  </StrictMode>
);
