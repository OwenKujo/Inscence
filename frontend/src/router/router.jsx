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
      ]
    },
  ]);

  export default router;