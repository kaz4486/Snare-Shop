import Products from '../../features/Products/Products';
import BestSellers from '../../views/BestSellers/BestSellers';
import Brands from '../../views/Brands/Brands';
import Sale from '../../views/Sale/Sale';

const Home = () => {
  return (
    <div>
      <BestSellers />
      <Sale />
      <Brands />
    </div>
  );
};

export default Home;
