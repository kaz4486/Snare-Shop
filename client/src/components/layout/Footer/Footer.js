import { Container, Row, Col } from 'react-bootstrap';
import styles from '../Footer/Footer.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <footer
    id="sticky-footer"
    className={clsx('py-4 mt-5 bg-grey', styles.footer)}
  >
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <h4 className={styles.header}>Questions? Contact us</h4>

          <Row className={styles.icon_div}>
            <Col xs={4} className="p-0">
              <FontAwesomeIcon
                icon={faPhoneAlt}
                className={clsx(styles.icon, 'mx-2')}
              />
            </Col>
            <Col xs={8} className="p-0">
              <p className={styles.phone_number}> 258-515-978</p>
            </Col>
          </Row>
          <Row className={styles.icon_div}>
            <Col xs={4} className="p-0">
              <FontAwesomeIcon
                icon={faMailBulk}
                className={clsx(styles.icon, 'mx-2')}
              />
            </Col>
            <Col xs={8} className="p-0">
              <p className={styles.phone_number}>snare-shop@xyz.com</p>
            </Col>
          </Row>
        </Col>

        <Col xs={12} md={4}>
          <h4 className={styles.header}>Informations</h4>
          <Row>
            <Col xs={6} className="d-flex align-self-start p-0">
              <ul className={styles.list}>
                <li>
                  <a href="#">Our shops</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
            </Col>
            <Col xs={6} className="d-flex align-self-start p-0">
              <ul className={styles.list}>
                <li>
                  <a href="#">Rules and regulations</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>{' '}
                </li>
                <li>
                  <a href="#">Localizations</a>
                </li>
                <li>
                  <a href="#">Work with us</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={4}>
          <h4 className={styles.header}>Customer service</h4>
          <Row>
            <Col xs={6} className="d-flex align-self-start p-0">
              <ul className={styles.list}>
                <li>
                  <a href="#">Shopping</a>
                </li>
                <li>
                  <a href="#">Payments</a>
                </li>
                <li>
                  <a href="#">Complaints</a>
                </li>
              </ul>
            </Col>
            <Col xs={6} className="d-flex align-self-start p-0">
              <ul className={styles.list}>
                <li>
                  <a href="#">Returns</a>
                </li>
                <li>
                  <a href="#">Shipment</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Work with us</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="text-center">
        <img
          src={`${process.env.PUBLIC_URL}/images/brandLogo.png`}
          alt="brand logo"
        />{' '}
        <br />
        <small>Copyright &copy; SnareShop 2022</small>
      </div>
    </Container>
  </footer>
);

export default Footer;
