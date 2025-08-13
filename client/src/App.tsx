import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Splash } from "./components";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Splash />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
