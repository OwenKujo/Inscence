// router.jsx
import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Community from "../page/Community";
import Search from "../page/Search";
import Messages from "../page/Messages";
import Profile from "../page/Profile";
import App from "../App";
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
        // path: "/about_you", 
        path: "/about_you",
        element: <About_You />
      }
    ]
  }
]);

export default router;