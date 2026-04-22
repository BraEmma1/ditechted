// src/layout/MainLayout.jsx
// Root layout wrapper — wraps all pages with Header + Footer

import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Page content injected here by React Router.
          pt-20 offsets the fixed 80px header so content is never hidden. */}
      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
