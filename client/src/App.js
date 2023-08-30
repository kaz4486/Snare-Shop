import { Route, Routes } from 'react-router-dom';

import './styles/bootstrap.scss';
import './styles/global.scss';

import Home from './components/pages/Home/Home';
import Product from './components/pages/Product/Product';
import Cart from './components/pages/Cart/Cart';
import NotFound from './components/pages/NotFound/NotFound';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Checkout from './components/pages/Checkout/Checkout';
import SearchedProducts from './components/views/SearchedProducts/SearchedProducts';
import Products from './components/pages/Products/Products';

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="products/find/:searchPhrase"
          element={<SearchedProducts />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
