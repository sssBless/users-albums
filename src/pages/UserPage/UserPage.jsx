import { Suspense } from "react";
import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { API } from "../../utils/API";
import {
  Container,
  ListItem,
  ListItemAvatar,
  Typography,
  List,
  Box
} from "@mui/material";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";

const UserPage = () => {
  const { user, userAlbums } = useLoaderData();
  if (!user || !userAlbums) {
    return <NotFoundPage />;
  }
  return (
    <Container>
      <Suspense fallback={<h2>User data loading...</h2>}>
        <Await resolve={user}>
          {(resolvedUser) => (
            <Box sx={{ marginBottom: "2rem" }}>
              <Typography variant="h4">{resolvedUser.name}</Typography>
              <Typography>Username: {resolvedUser.username}</Typography>

              <Typography>
                Email: <Link>{resolvedUser.email}</Link>
              </Typography>

              <Typography>Phone: {resolvedUser.phone}</Typography>
              <Typography>
                Website: <Link>{resolvedUser.website}</Link>
              </Typography>
            </Box>
          )}
        </Await>
      </Suspense>
      <Typography sx={{ fontSize: "2rem" }}>User albums</Typography>
      <Suspense fallback={<h2>User albums loading...</h2>}>
        <Await resolve={userAlbums}>
          {(resolvedAlbums) => (
            <List>
              {resolvedAlbums.map((album) => (
                <ListItem key={album.id}>
                  <ListItemAvatar>
                    <PhotoLibraryIcon />
                  </ListItemAvatar>
                  <Link to={`/albums/${album.id}`}>
                    <Typography>{album.title}</Typography>
                  </Link>
                </ListItem>
              ))}
            </List>
          )}
        </Await>
      </Suspense>
    </Container>
  );
};

const userLoader = async ({ params: { id } }) => {
  const api = new API();
  const userAlbums = await api.getUserAlbums(id);
  const user = await api.getUser(id);
  return defer({ userAlbums, user });
};

export { UserPage, userLoader };
