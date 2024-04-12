import { Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

function Navigation() {
  return (
    <Box p={4} bg="gray.100">
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </Box>
  );
}

export default Navigation;