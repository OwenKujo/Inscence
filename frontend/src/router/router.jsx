import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home";
import Community from "../page/Community";
import Search from "../page/Search";
import Messages from "../page/Messages";
import Profile from "../page/Profile";
import My_favorite from "../page/page_of_recommend/My_favorite";
import About_You_test from "../page/page_of_recommend/About_You_test";
import About_You from "../page/About_You";
import Laem_Ka_Beach from "../page/page_of_recommend/page_of_about/Laem_Ka_Beach";
import Thanon_Talang from "../page/page_of_recommend/page_of_about/Thanon_Talang";
import Dibuk_Restaurant from "../page/page_of_recommend/page_of_about/Dibuk_Restaurant";
import On_On_Hotel from "../page/page_of_recommend/page_of_about/On_On_Hotel";
import Login from "../page/Login";
import SignIn from "../page/Signin";
import AchievementScreen from "../page/Achievement";
import Create from "../page/community/CreatePost";
import ProtectedRoute from "../components/ProtectedRoute"; // Import ProtectedRoute
import { PinProvider } from "../context/PinContext"; // Import PinProvider

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Public Routes
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },

      // Protected Routes
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <PinProvider>
              <Home />
            </PinProvider>
          </ProtectedRoute>
        ),
      },
      {
        path: "/community",
        element: (
          <ProtectedRoute>
            <PinProvider>
              <Community />
            </PinProvider>
          </ProtectedRoute>
        ),
      },
      {
        path: "/search",
        element: (
          <ProtectedRoute>
            <PinProvider>
              <Search />
            </PinProvider>
          </ProtectedRoute>
        ),
      },
      {
        path: "/messages",
        element: (
          <ProtectedRoute>
            <PinProvider>
              <Messages />
            </PinProvider>
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <PinProvider>
              <Profile />
            </PinProvider>
          </ProtectedRoute>
        ),
      },
      {
        path: "/about_you",
        element: (
          <ProtectedRoute>
            <PinProvider>
              <About_You_test />
            </PinProvider>
          </ProtectedRoute>
        ),
      },
      {
        path: "/about_you/laem_ka_beach",
        element: (
          <ProtectedRoute>
            <PinProvider>
              <Laem_Ka_Beach />
            </PinProvider>
          </ProtectedRoute>
        ),
      },
      {
        path: "/about_you/thanon_talang",
        element: (
          <ProtectedRoute>
            <PinProvider>
              <Thanon_Talang />
            </PinProvider>
          </ProtectedRoute>
        ),
      },
      {
        path: "/about_you/dibuk_restaurant",
        element: (
          <ProtectedRoute>
            <PinProvider>
              <Dibuk_Restaurant />
            </PinProvider>
          </ProtectedRoute>
        ),
      },
      {
        path: "/about_you/on_on_hotel",
        element: (
          <ProtectedRoute>
            <PinProvider>
              <On_On_Hotel />
            </PinProvider>
          </ProtectedRoute>
        ),
      },
      {
        path: "/my_favorite",
        element: (
          <ProtectedRoute>
            <PinProvider>
              <My_favorite />
            </PinProvider>
          </ProtectedRoute>
        ),
      },
      {
        path: "/achievement",
        element: (
          <ProtectedRoute>
            <PinProvider>
              <AchievementScreen />
            </PinProvider>
          </ProtectedRoute>
        ),
      },
      {
        path: "/create",
        element: (
          <ProtectedRoute>
            <PinProvider>
              <Create />
            </PinProvider>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
