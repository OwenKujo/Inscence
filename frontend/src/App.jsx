import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { UserData } from "./context/UserContext";

const App = () => {
  const { isAuth, user } = UserData();

  return (
    <div className="min-h-screen flex">
      {isAuth && <Navbar user={user} />}
      <main className="flex-1 ">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
