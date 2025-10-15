import { Header } from '../components';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />

      <main className='container flex'>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
