import { Container } from 'react-bootstrap';
import styles from '../NotFound/NotFound.module.scss';

const NotFound = () => {
  return (
    <Container className="text-center">
      <img
        src={`${process.env.PUBLIC_URL}/images/404Image.jpg`}
        alt="404 not found"
        className={styles.img_not_found}
      />
      <br />
      <a href="https://www.freepik.com/free-vector/404-error-with-cute-animal-concept-illustration_8030429.htm#query=404%20not%20found&position=34&from_view=keyword">
        Image by storyset
      </a>
    </Container>
  );
};

export default NotFound;
