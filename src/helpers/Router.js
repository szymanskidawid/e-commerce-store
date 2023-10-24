import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Page from '../components/Page';
import ProductGrid from '../components/main-section/ProductGrid';
import BasketGrid from '../components/basket-section/BasketGrid';
import { useContext } from 'react';
import { BasketContext } from '../contexts/BasketContext';

const Router = ({ totalPrice }) => {
  const { basket } = useContext(BasketContext);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/products" />,
    },

    {
      path: '/products',
      element: (
        <Page basket={basket} totalPrice={totalPrice}>
          <ProductGrid />
        </Page>
      ),
    },

    {
      path: '/basket',
      element: (
        <Page basket={basket} totalPrice={totalPrice}>
          <BasketGrid basketTotalPrice={totalPrice()} />
        </Page>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
