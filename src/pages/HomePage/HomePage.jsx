import { Await, defer, useLoaderData } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";
import { API } from "../../utils/API";
import { Suspense } from "react";

const HomePage = () => {
  const { quote } = useLoaderData();
  return (
    <Container sx={{ textAlign: "center" }}>
      <Typography variant="h2" sx={{ marginBottom: "2rem" }}>
        This is home page
      </Typography>
      <Typography variant="h4">Quote of the day</Typography>
      <Suspense fallback={<h2>Quote loading...</h2>}>
        <Await resolve={quote}>
          {(resolvedQuote) => (
            <Box sx={{ marginTop: "2rem" }}>
              <Typography sx={{ fontSize: "1.5rem" }}>
                {resolvedQuote.quote}
              </Typography>
              <Typography sx={{ fontSize: "1.2rem", fontWeight: "700" }}>
                {resolvedQuote.author}
              </Typography>
            </Box>
          )}
        </Await>
      </Suspense>
    </Container>
  );
};

const quoteLoader = async () => {
  const api = new API();
  const quote = api.getQuote();
  return defer({ quote });
};

export { HomePage, quoteLoader };
