import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
      ]
    },
  ]);

  export default router;