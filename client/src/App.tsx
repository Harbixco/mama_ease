import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Splash, Login, Signup } from "./components";

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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
