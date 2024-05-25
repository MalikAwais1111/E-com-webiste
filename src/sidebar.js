import { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
    const [cname, setcname] = useState('sidebarb');
    const cchange = () => {
        if (cname === 'sidebarb') {
            setcname('sidebar');
        } else {
            setcname('sidebarb');
        }
    };
    
    return (
        <div className={cname}>
            <h3 onClick={cchange} className>Catagory</h3>
            <div><Link to="/smartphones">Smart-phones</Link></div>
            <div><Link to="/laptop">Laptops</Link></div>
            <div><Link to="/lighting">Lighting</Link></div>
            <div><Link to="/skincare">Skin Care</Link></div>
            <div><Link to="/menwatches">Men Watches</Link></div>
            <div><Link to="/womenwatches">Women Watches</Link></div>
        </div>
    );
};

export default SideBar;
