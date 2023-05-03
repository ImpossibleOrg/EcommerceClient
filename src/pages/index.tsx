import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { withLazy } from 'shared/lib';

import { Admin } from './admin';
import { Layout } from './layout';

const Home = lazy(() => import('./home'));
const Catalog = lazy(() => import('./catalog'));
const Product = lazy(() => import('./product'));
const Cart = lazy(() => import('./cart'));
const NotFound = lazy(() => import('./not-found'));

export const Routing = () => (
  <Routes>
    <Route path={'/'} element={<Layout />}>
      <Route index element={withLazy(<Home />)} />
      <Route path={'catalog'} element={withLazy(<Catalog />)} />
      <Route path={'product/:id'} element={withLazy(<Product />)} />
      <Route path={'admin/*'} element={<Admin />} />
      <Route path={'cart'} element={withLazy(<Cart />)} />
      <Route path={'*'} element={withLazy(<NotFound />)} />
    </Route>
  </Routes>
);
