// router.jsx
import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Community from "../page/Community";
import Search from "../page/Search";
import Messages from "../page/Messages";
import Profile from "../page/Profile";
import App from "../App";
import About_You from "../page/page_of_recommend/About_You";
import My_favorite from "../page/page_of_recommend/My_favorite";
import Login from "../page/Login";
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
        element: <About_You/>
      },
      {
        path: "/my_favorite",
        element: <My_favorite/>
      },
      {
        path: "/Login",
        element: <Login/>
      }
    ]
  }
]);

export default router;