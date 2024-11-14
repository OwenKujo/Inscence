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
import Laem_Ka_Beach from "../page/page_of_recommend/page_of_about/Laem_Ka_Beach";
import Thanon_Talang from "../page/page_of_recommend/page_of_about/Thanon_Talang";
import Dibuk_Restaurant from "../page/page_of_recommend/page_of_about/Dibuk_Restaurant";
import On_On_Hotel from "../page/page_of_recommend/page_of_about/On_On_Hotel";
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
        element: <About_You_test/>
      },
      {
        path: "/about_you/laem_ka_beach",
        element: <Laem_Ka_Beach/>
      },
      {
        path: "/about_you/thanon_talang",
        element: <Thanon_Talang/>
      },
      {
        path: "/about_you/dibuk_restaurant",
        element: <Dibuk_Restaurant/>
      },
      {
        path: "/about_you/on_on_hotel",
        element: <On_On_Hotel/>
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