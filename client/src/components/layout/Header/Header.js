import clsx from 'clsx';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container>
        <Navbar.Brand as={NavLink} to="/" className={styles.navbar_brand}>
          <img
            src={`${process.env.PUBLIC_URL}/images/brandLogo.png`}
            alt="brand logo"
          />
          SnareShop
        </Navbar.Brand>
        <Nav className={styles.nav}>
          <Nav.Link as={NavLink} to="/" className={clsx(styles.link, 'mx-5')}>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/cart" className={styles.link}>
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
