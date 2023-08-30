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
import { HiDocumentText } from 'react-icons/hi';
import { GiReturnArrow } from 'react-icons/gi';

const Header = () => {
  return (
    <Navbar expand="lg" className={styles.navbar} variant="none">
      <div className={styles.container}>
        <Row>
          <Col sm={2} className=" align-self-center">
            <Navbar.Brand as={NavLink} to="/" className={styles.navbar_brand}>
              <img
                src={`${process.env.PUBLIC_URL}/images/brandLogo.png`}
                alt="brand logo"
              />
              SnareShop
            </Navbar.Brand>
          </Col>
          <Col sm={7} className="justify-content-right align-self-center">
            <Nav className={styles.nav}>
              <Nav.Link
                as={NavLink}
                to="/"
                className={clsx(styles.link, 'mx-2')}
              >
                <FontAwesomeIcon
                  icon={faHouse}
                  className={clsx(styles.icon, 'mx-2')}
                />
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/cart"
                className={clsx(styles.link, 'mx-2')}
              >
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className={clsx(styles.icon, 'mx-2')}
                />
                Cart
              </Nav.Link>
            </Nav>
            <div className={styles.icon_div}>
              <FontAwesomeIcon
                icon={faPhoneAlt}
                className={clsx(styles.icon)}
              />
              <span className={styles.phone_number}> 258-515-978</span>
            </div>
          </Col>
          <Col sm={3} className="p-0">
            <div className={styles.shop_bonuses}>
              <ul>
                <li>
                  <BiTimer />
                  <span>Szybka realizacja</span>
                </li>
                <li>
                  <HiDocumentText />
                  <span>Wystawiamy faktury 23%</span>
                </li>
                <li>
                  <GiReturnArrow />
                  <span>Zwrot do 14 dni</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </Navbar>
  );
};

// Header.propTypes = {
//     NavBar: PropTypes.func,
//   };

export default Header;
