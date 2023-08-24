import clsx from 'clsx';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faHouse,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { BiTimer } from 'react-icons/bi';

const Header = () => {
  return (
    <Navbar expand="lg" className={styles.navbar} variant="none">
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
            <FontAwesomeIcon
              icon={faHouse}
              className={clsx(styles.icon, 'mx-2')}
            />
            Home
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/cart"
            className={clsx(styles.link, 'mx-4')}
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              className={clsx(styles.icon, 'mx-2')}
            />
            Cart
          </Nav.Link>
          <Row className={styles.icon_div}>
            <Col className="p-0">
              <FontAwesomeIcon
                icon={faPhoneAlt}
                className={clsx(styles.icon, 'mx-2')}
              />
            </Col>
            <Col className="p-0">
              <p className={styles.phone_number}> 258-515-978</p>
            </Col>
          </Row>
        </Nav>
        <div className={styles.shop_bonuses}>
          <ul>
            <li>
              <BiTimer />
              <span> Szybka realizacja</span>
            </li>
            <li>
              <span>Wystawiamy faktury 23%</span>
            </li>
            <li>
              {' '}
              <span>Zwrot do 14 dni</span>
            </li>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
};

// Header.propTypes = {
//     NavBar: PropTypes.func,
//   };

export default Header;
