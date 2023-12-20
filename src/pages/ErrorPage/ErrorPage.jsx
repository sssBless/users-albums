import { Container, Typography } from '@mui/material';
import { NavLink, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Container sx={{ textAlign: 'center' }}>
      <Typography sx={{ fontSize: '2rem' }}>{error.status}</Typography>
      <Typography sx={{ fontSize: '2rem' }}>
        {error.statusText || 'Something goes wrong'}
      </Typography>
      <Typography sx={{ fontSize: '1.5rem' }}>
        {' '}
        Go to page <NavLink to='/'> home </NavLink>
      </Typography>
    </Container>
  );
};
export { ErrorPage };
