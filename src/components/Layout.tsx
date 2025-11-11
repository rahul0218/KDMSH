import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="font-inter bg-background-main text-text-main">
      <div className="bg-primary-light">
        <p className="text-center text-sm text-primary py-2 px-4">
          Welcome to KDMSH: Your partners in health. | For 24/7 Emergency: 03371200000
        </p>
      </div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
