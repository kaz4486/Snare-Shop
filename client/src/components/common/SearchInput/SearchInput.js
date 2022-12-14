import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import clsx from 'clsx';
import styles from '../SearchInput/SearchInput.module.scss';

const SearchInput = () => {
  const navigate = useNavigate();

  const [searchPhrase, setSearchPhrase] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/products/find/${searchPhrase}`);
  };

  return (
    <Container>
      <Form onSubmit={handleSearchSubmit}>
        <Row className="my-3">
          <Col xs={4} md={4} className={styles.icon_column}>
            <FontAwesomeIcon icon={faSearch} />
          </Col>
          <Col
            xs={8}
            md={4}
            className="d-flex justify-content-end align-items-center"
          >
            <Form.Control
              type="text"
              value={searchPhrase}
              placeholder="find product..."
              onChange={(e) => setSearchPhrase(e.target.value)}
            ></Form.Control>
          </Col>
          <Col xs={12} md={4} className={styles.search_button}>
            <Button type="submit" children="Search" />
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default SearchInput;
