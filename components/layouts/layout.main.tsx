import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../nav/header';
import FooterNav from '../FooterComponent';

const MainLayout = ({ children }: { children: any }) => {
  return (
    <>
      <Header />
      <main id='content' role='main' className='dark:bg-slate-900 bg-gray-100'>
        <div className='max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8'>
          {children}
        </div>
      </main>
      <ToastContainer />
    </>
  );
};

export default MainLayout;
