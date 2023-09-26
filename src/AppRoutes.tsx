import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import PhotoAlbum from "./pages/PhotoAlbum";
import AddUser from "./pages/AddUser";
import ErrorBoundary from "./pages/ErrorBoundary";

export enum AppRoute {
  ROOT = "/",
  HOME = "",
  TASK_1 = "/task-1",
  TASK_2 = "/task-2",
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={AppRoute.ROOT} element={<Root />} ErrorBoundary={(error) => {
      // log error, in this case just log in console
      console.error(error);
      return (<ErrorBoundary />)
    }}>
      <Route path={AppRoute.HOME} element={<Home />} />
      <Route path={AppRoute.TASK_1} element={<PhotoAlbum />} />
      <Route path={AppRoute.TASK_2} element={<AddUser />} />

    </Route>
  )
);

const AppRoutes = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRoutes;