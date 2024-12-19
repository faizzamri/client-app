import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Landing, Register, Login, DashboardLayout, Error } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />
  },
  {
    path: "/landing",
    element: <Landing />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/dashboardLayout",
    element: <DashboardLayout />
  },
  {
    path: "/error",
    element: <Error />
  }
]);

const App = () => {
  return (<RouterProvider router={router} />);
}
export default App;