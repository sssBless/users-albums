import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import { HomePage, quoteLoader } from "./pages/HomePage/HomePage";
import { Layout } from "./components/Layout";
import { UsersPage, usersLoader } from "./pages/UsersPage/UsersPage";
import { UserPage, userLoader } from "./pages/UserPage/UserPage";
import { AlbumsPage, albumsLoader } from "./pages/AlbumsPage/AlbumsPage";
import { AlbumPage, dataLoader } from "./pages/AlbumPage/AlbumPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} loader={quoteLoader} />
      <Route
        path="/users"
        element={<UsersPage />}
        loader={usersLoader}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/users/:id"
        element={<UserPage />}
        loader={userLoader}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/albums"
        element={<AlbumsPage />}
        loader={albumsLoader}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/albums/:id"
        element={<AlbumPage />}
        loader={dataLoader}
        errorElement={<ErrorPage />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
