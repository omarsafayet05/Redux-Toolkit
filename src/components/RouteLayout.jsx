import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import store from "../store/store";
import { Provider } from "react-redux";

const RouteLayout = () => {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RouteLayout;
