import { Suspense } from "react";
import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { API } from "../../utils/API";
import {
  Container,
  List,
  ListItem,
  ListItemAvatar,
  Typography
} from "@mui/material";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";

const AlbumsPage = () => {
  const { albums } = useLoaderData();

  return (
    <Container>
      <Typography variant="h1" sx={{ fontSize: "3.8rem", marginBottom: "3vw" }}>
        Albums
      </Typography>
      <Suspense
        fallback={<Typography variant="h2">Albums loading...</Typography>}
      >
        <Await resolve={albums}>
          {(resolvedAlbums) => (
            <List>
              {resolvedAlbums.map((album) => (
                <ListItem key={album.id} sx={{ fontSize: "2rem" }}>
                  <ListItemAvatar>
                    <PhotoLibraryIcon />
                  </ListItemAvatar>
                  <Link to={`/albums/${album.id}`}>{album.title}</Link>
                </ListItem>
              ))}
            </List>
          )}
        </Await>
      </Suspense>
    </Container>
  );
};

const albumsLoader = async () => {
  const api = new API();
  const albums = await api.getAlbums();
  return defer({ albums });
};

export { AlbumsPage, albumsLoader };
