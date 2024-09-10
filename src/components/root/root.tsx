import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import '../../index.css'

const Root = () => {
  return (
    <>
    <Header />
    <div className="mt-24">
      <Outlet />
    </div>
    <Footer />
    </>
  );
};

export default Root;