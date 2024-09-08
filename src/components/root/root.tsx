import Header from '../header/header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/footer'
import '../../index.css'

const Root = () => {
  return (
    <><Header></Header><Outlet></Outlet><Footer></Footer></>
  );
};

export default Root;