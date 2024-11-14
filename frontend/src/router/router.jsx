import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home";
import Community from "../page/Community";
import Search from "../page/Search";
import Messages from "../page/Messages";
import Profile from "../page/AccountProfile";
import My_favorite from "../page/page_of_recommend/My_favorite";
import About_You_test from "../page/page_of_recommend/About_You_test";
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
import PinPage from "../page/community/PinPage";
import { UserProvider } from "../context/UserContext"; // Import UserProvider
import Account from "../page/AccountProfile";
import UserProfile from "../page/UserProfile";

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

      // Protected Routes with UserProvider and PinProvider
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <UserProvider>
              <PinProvider>
                <Home />
              </PinProvider>
            </UserProvider>
          </ProtectedRoute>
        ),
      },
      {
        path: "/community",
        element: (
          <ProtectedRoute>
            <UserProvider>
              <PinProvider>
                <Community />
              </PinProvider>
            </UserProvider>
          </ProtectedRoute>
        ),
      },
      {
        path: "/search",
        element: (
          <ProtectedRoute>
            <UserProvider>
              <PinProvider>
                <Search />
              </PinProvider>
            </UserProvider>
          </ProtectedRoute>
        ),
      },
      {
        path: "/messages",
        element: (
          <ProtectedRoute>
            <UserProvider>
              <PinProvider>
                <Messages />
              </PinProvider>
            </UserProvider>
          </ProtectedRoute>
        ),
      },
      {
        path: "/accountprofile",
        element: (
          <ProtectedRoute>
            <UserProvider>
              <PinProvider>
                <Account/>
              </PinProvider>
            </UserProvider>
          </ProtectedRoute>
        ),
      },
      {
        path: "/user/:id",
        element: (
          <ProtectedRoute>
            <UserProvider>
              <PinProvider>
                <UserProfile/>
              </PinProvider>
            </UserProvider>
          </ProtectedRoute>
        ),
      },
      {
        path: "/about_you",
        element: (
          <ProtectedRoute>
            <UserProvider>
              <PinProvider>
                <About_You_test />
              </PinProvider>
            </UserProvider>
          </ProtectedRoute>
        ),
      },
      {
        path: "/about_you/laem_ka_beach",
        element: (
          <ProtectedRoute>
            <UserProvider>
              <PinProvider>
                <Laem_Ka_Beach />
              </PinProvider>
            </UserProvider>
          </ProtectedRoute>
        ),
      },
      {
        path: "/about_you/thanon_talang",
        element: (
          <ProtectedRoute>
            <UserProvider>
              <PinProvider>
                <Thanon_Talang />
              </PinProvider>
            </UserProvider>
          </ProtectedRoute>
        ),
      },
      {
        path: "/about_you/dibuk_restaurant",
        element: (
          <ProtectedRoute>
            <UserProvider>
              <PinProvider>
                <Dibuk_Restaurant />
              </PinProvider>
            </UserProvider>
          </ProtectedRoute>
        ),
      },
      {
        path: "/about_you/on_on_hotel",
        element: (
          <ProtectedRoute>
            <UserProvider>
              <PinProvider>
                <On_On_Hotel />
              </PinProvider>
            </UserProvider>
          </ProtectedRoute>
        ),
      },
      {
        path: "/my_favorite",
        element: (
          <ProtectedRoute>
            <UserProvider>
              <PinProvider>
                <My_favorite />
              </PinProvider>
            </UserProvider>
          </ProtectedRoute>
        ),
      },
      {
        path: "/achievement",
        element: (
          <ProtectedRoute>
            <UserProvider>
              <PinProvider>
                <AchievementScreen />
              </PinProvider>
            </UserProvider>
          </ProtectedRoute>
        ),
      },
      {
        path: "/create",
        element: (
          <ProtectedRoute>
            <UserProvider>
              <PinProvider>
                <Create />
              </PinProvider>
            </UserProvider>
          </ProtectedRoute>
        ),
      },
      {
        path: "/pin/:id",
        element: (
          <ProtectedRoute>
            <UserProvider>
              <PinProvider>
                <PinPage />
              </PinProvider>
            </UserProvider>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
