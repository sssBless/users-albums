import { NavLink } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
const NotFoundPage = () => {
  return (
    <Container sx={{ textAlign: 'center' }}>
      <Typography sx={{ fontSize: '2rem' }}>404</Typography>
      <Typography sx={{ fontSize: '2rem' }}>Page not found</Typography>
      <Typography sx={{ fontSize: '1.5rem' }}>
        {' '}
        Go to page <NavLink to='/'> home </NavLink>
      </Typography>
    </Container>
  );
};
export { NotFoundPage };
