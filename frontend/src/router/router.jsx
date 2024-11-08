import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Community from "../page/Community";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/community",
          element: <Community/>
        },
        {
          path: "/search",
          element: <Community/>
        },
        {
          path: "/messages",
          element: <Community/>
        },
        {
          path: "/profile",
          element: <Community/>
        },
      ]
    },
  ]);

  export default router;