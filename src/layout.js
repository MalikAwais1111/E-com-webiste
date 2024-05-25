import React from 'react';
import { CartProvider } from "./context/context";
import NavBar from "./navbar";
import SideBar from "./sidebar";
import Srch from "./testt";
import Slider from './sliderimg';
import { useLocation } from 'react-router-dom';

const Layout = (props) => {
  const loc = useLocation();

  return (
    <div className="layout">
      <CartProvider>
        <div>
          <NavBar></NavBar>
        </div>
        <div className='slider'>
          {loc.pathname === '/' && <Slider></Slider>}
        </div>
        <div className="container2">
          <div>
            <SideBar></SideBar>
          </div>
          <div className="content">
            <div>
              <Srch></Srch>
            </div>
            {props.children}
          </div>
          <div>
          </div>
        </div>
      </CartProvider>
    </div>
  );
}

export default Layout;
