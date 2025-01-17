import {  Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import AuthCallbackPage from './pages/AuthCallbackPage';
import ProtectedRoute from './auth/ProtectedRoute';
import UserProfilePage from './pages/UserProfilePage';
import ManageRestaurantPage from './pages/ManageRestaurantPage';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';
import OrderStatusPage from './pages/OrderStatusPage';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/"
        element={
          <Layout showHero>
            <HomePage />
          </Layout>
        }
      />

      <Route path="auth-callback" element={<AuthCallbackPage />} />
      <Route
        path="search/:city"
        element={
          <Layout showHero={false}>
            <SearchPage />
          </Layout>
        }
      />
      <Route
        path="detail/:restaurantId"
        element={
          <Layout showHero={false}>
            <DetailPage />
          </Layout>
        }
      />
      <Route element={<ProtectedRoute />}>
              <Route path="user-profile" element={
                <Layout showHero={false}>
                  <UserProfilePage />
                </Layout>
              } />

         <Route
          path="order-status"
          element={
            <Layout showHero={false}>
              <OrderStatusPage />
            </Layout>
          }
        />     
        <Route
          path="manage-restaurant"
          element={
            <Layout showHero={false}>
              <ManageRestaurantPage />
            </Layout>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;










