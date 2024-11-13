// router.jsx
import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Community from "../page/Community";
import Search from "../page/Search";
import Messages from "../page/Messages";
import Profile from "../page/Profile";
import App from "../App";

import My_favorite from "../page/page_of_recommend/My_favorite";
import About_You_test from "../page/page_of_recommend/About_You_test";
import About_You from "../page/About_You";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/community",
        element: <Community />
      },
      {
        path: "/search",
        element: <Search />
      },
      {
        path: "/messages",
        element: <Messages />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/about_you",
        element: <About_You_test/>
      },
      {
        path: "/about_you/laem_ka_beach",
        element: <About_You/>
      },
      {
        path: "/my_favorite",
        element: <My_favorite/>
      },
    ]
  }
]);

export default router;