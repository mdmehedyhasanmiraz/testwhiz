import Header from '../header/header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/footer'
import '../../index.css'

const Root = () => {
  return (
    <>
    <Header />
    <div className="mt-20">
      <Outlet />
    </div>
    <Footer />
    </>
  );
};

export default Root;