import { Suspense } from "react";
import { Await, NavLink, defer, useLoaderData } from "react-router-dom";
import { API } from "../../utils/API";
import { Box, Container, Typography } from "@mui/material";

const AlbumPage = () => {
  const { album, user, photos } = useLoaderData();

  return (
    <Container sx={{ marginBottom: "3vw" }}>
      <Suspense fallback={<h2>Album data loading...</h2>}>
        <Await resolve={album}>
          {(resolvedAlbum) => (
            <Typography sx={{ fontWeight: "bolder", fontSize: "2.5rem" }}>
              {resolvedAlbum.title}
            </Typography>
          )}
        </Await>
      </Suspense>
      <Suspense fallback={<h2>User data loading...</h2>}>
        <Await resolve={user}>
          {(resolvedUser) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "5vh"
              }}
            >
              <Typography sx={{ fontSize: "1.5rem" }}>Created by:</Typography>
              <NavLink to={`/users/${resolvedUser.id}`}>
                <Typography sx={{ fontSize: "1.4rem", marginLeft: "1vw" }}>
                  {resolvedUser.name}
                </Typography>
              </NavLink>
            </Box>
          )}
        </Await>
      </Suspense>

      <Suspense fallback={<h2>Photos from album loading...</h2>}>
        <Await resolve={photos}>
          {(resolvedPhotos) => (
            <Box
              component={"div"}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1vw",
                justifyContent: "center"
              }}
            >
              {resolvedPhotos.map((photo) => (
                <Box
                  component="img"
                  src={photo.url}
                  alt={photo.title}
                  key={photo.id}
                  sx={{
                    width: "28vw",
                    height: "28vw"
                  }}
                />
              ))}
            </Box>
          )}
        </Await>
      </Suspense>
    </Container>
  );
};

const dataLoader = async ({ params: { id } }) => {
  const api = new API();
  const album = await api.getAlbum(id);
  const userId = album.userId;
  const user = await api.getUser(userId);
  const photos = await api.getPhotos(id);

  return defer({
    photos,
    id,
    user,
    album
  });
};

export { AlbumPage, dataLoader };
