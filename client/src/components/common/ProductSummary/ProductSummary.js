import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductSummary = ({ id, name, mainPhoto, price }) => {
  return (
    <div>
      <Card key={id} className="align-items-center">
        <Card.Img
          variant="top"
          src={`${process.env.PUBLIC_URL}/images/products/${mainPhoto}`}
          alt="Product"
        ></Card.Img>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Link to={'/products/' + id}>
          <Button className="mb-2">View details</Button>
        </Link>
      </Card>
    </div>
  );
};

export default ProductSummary;
