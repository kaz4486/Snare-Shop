import clsx from 'clsx';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

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
          <Nav.Link as={NavLink} to="/" className={clsx(styles.link, 'mx-4')}>
            Home
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/cart"
            className={clsx(styles.link, 'mx-4')}
          >
            Cart
          </Nav.Link>
          <Row className={styles.icon_div}>
            <Col>
              <FontAwesomeIcon icon={faPhoneAlt} className={styles.icon} />
            </Col>
            <Col>
              <p className={styles.phone_number}> 258-515-978</p>
            </Col>
          </Row>
        </Nav>
      </Container>
    </Navbar>
  );
};

// Header.propTypes = {
//     NavBar: PropTypes.func,
//   };

export default Header;
