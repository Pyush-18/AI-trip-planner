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
import ViewTrip from "./pages/ViewTrip";
import Hero from "./components/custom/Hero";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <SignInPage />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        index:true,
        element: <Hero />,
      },
      {
        path: "/create-trip",
        element: (
          <Authenticate>
            <CreateTrip />
          </Authenticate>
        ),
      },
      {
        path: "/view-trip/:tripId",
        element: <ViewTrip />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/auth">
      <RouterProvider router={router} />
      <Toaster />
    </ClerkProvider>
  </StrictMode>
);
