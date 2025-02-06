// src/App.js
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';
import { useAuth0 } from '@auth0/auth0-react';
import { Navbar, Sidebar, Footer, ScrollToTop, Loading, Newsletter } from './components';
import Error from './pages/Error';

// Lazy-loaded pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const SingleProduct = lazy(() => import('./pages/SingleProduct'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const SuccessfulPayment = lazy(() => import('./pages/SuccessfulPayment'));
const Shipping = lazy(() => import('./pages/Shipping'));
const Profile = lazy(() => import('./pages/Profile'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Layout>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<SingleProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/shipping" element={<Shipping />} />
              {/* Protected routes */}
              <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
              <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
              <Route path="/successful_payment" element={<SuccessfulPayment />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

// Private route component for authenticated users
const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (!isAuthenticated) {
    loginWithRedirect();
    return <Loading />;
  }

  return <>{children}</>;
};

// Enhanced Layout component with personalized elements
const Layout = ({ children }) => {
  const { user } = useAuth0();

  return (
    <>
      <ScrollToTop />
      <Navbar user={user} />
      <Sidebar />
      <main className="content-wrapper">
        <div className="welcome-banner">
          {user && <p>Welcome back, {user.given_name || user.nickname}! 👋</p>}
        </div>
        {children}
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default App;
