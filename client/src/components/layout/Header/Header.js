import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" variant="light">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          SnareShop
        </Navbar.Brand>
        <Nav className="d-flex justify-conent-end">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/cart">
            Cart
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

// Header.propTypes = {
//     NavBar: PropTypes.func,
//   };

export default Header;
