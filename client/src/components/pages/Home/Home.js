import SearchInput from '../../common/SearchInput/SearchInput';
import Products from '../../features/Products/Products';
import BestSellers from '../../views/BestSellers/BestSellers';
import Brands from '../../views/Brands/Brands';
import Sale from '../../views/Sale/Sale';

const Home = () => {
  return (
    <div>
      <SearchInput />
      <BestSellers />
      <Sale />
      <Brands />
    </div>
  );
};

export default Home;
