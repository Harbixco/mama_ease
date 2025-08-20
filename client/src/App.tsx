import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Splash, Login, Signup, Verify, VerifySuccesful, EnableLocation } from "./components";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Splash />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
      {
      path: "/verify",
      element: <Verify />,
    },
     {
      path: "/verify-succesful",
      element: <VerifySuccesful />,
    },
      {
      path: "/enable-location",
      element: <EnableLocation />,
    },
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;
