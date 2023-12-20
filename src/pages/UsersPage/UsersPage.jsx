import { Suspense } from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { API } from "../../utils/API";
import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  Typography
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const UsersPage = () => {
  const { users } = useLoaderData();
  if (!users) {
    return <NotFoundPage />;
  }
  return (
    <Container>
      <Typography variant="h1" sx={{ fontSize: "2.8rem", marginBottom: "2vw" }}>
        Users
      </Typography>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={users}>
          {(resolvedUsers) => (
            <List>
              {resolvedUsers.map((user) => (
                <ListItem key={user.id}>
                  <ListItemIcon>
                    <AccountCircleIcon sx={{ fontSize: "2.8rem" }} />
                  </ListItemIcon>
                  <Link to={`/users/${user.id}`}>
                    <Typography sx={{ fontSize: "1.5rem" }}>
                      {user.name}
                    </Typography>
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

const usersLoader = async () => {
  const api = new API();
  const users = await api.getUsers();

  return defer({
    users
  });
};

export { UsersPage, usersLoader };
