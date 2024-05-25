import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { Cartcontext } from "./context/context";
import { useDispatch, useSelector } from "react-redux";
import { searchitm } from "./features2/SearchSlice";

const NavBar = () => {
  const {  setitmsrch, itmsrch } = useContext(Cartcontext);
  const cartItems = useSelector((state) => state.cart.cart);
  const [itemtosearch, setitemtosearch] = useState('');
  // const [category, setcategory] = useState('');

  const cgry = ["smartphones", "laptops", "fragrances", "skincare", "groceries", "home-decoration", "furniture", "tops", "womens-dresses"];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlehome = () => {
    navigate('/');
    setcname('sidebarb');
  }

  const loc = useLocation();
  console.log(loc.pathname);

  const [countinge, setcountinge] = useState('counting1');
  const [cname, setcname] = useState('sidebarb');

  const hide = () => {
    setcname('sidebarb');
  }

  useEffect(() => {
    if (cartItems.length > 0) {
      setcountinge('counting');
    } else {
      setcountinge('counting1');
    }
  }, [cartItems.length]);

  const cchange = () => {
    if (cname === 'sidebarb') {
      setcname('sidebar')
    } else {
      setcname('sidebarb');
    }
  }

  // Define a function to check if a category is active
  const isCategoryActive = (categoryPath) => {
    return loc.pathname.startsWith(categoryPath);
  }

  const handlesearch = () => {
    if (itmsrch !== "") {
      dispatch(searchitm(itemtosearch));
      navigate('/searchedproduct');
    }
  }

  const handleKeyPress = (event) => {
    if (itmsrch !== "") {
      if (event.key === 'Enter') {
        dispatch(searchitm(itemtosearch));
        navigate('/searchedproduct');
      }
    }
  };

  return (
    <div className="navbar">
      <h2 onClick={cchange}><img className="burgur-menu" src="/images/burgur icon.png" alt="Menu" /></h2>
      <div className={cname}>
        <h3>Category</h3>
        {cgry && cgry.map((c) => {
          return <div className={isCategoryActive(`/${c}`) ? 'active' : ''}><Link onClick={() => hide()} to={`category/${c}`} >{c[0].toUpperCase()}{c.substring(1)}</Link></div>
        })}
      </div>
      <div className="logo">
        <img onClick={handlehome} src="/images/EC-website-final-logo-removebg-preview.png" alt="Logo" />
      </div>
      <div className="SearchBar">
        <input
          onKeyDown={handleKeyPress}
          value={itemtosearch}
          onChange={(e) => setitemtosearch(e.target.value)}
          type="text"
          placeholder="Search"
        />
        {setitmsrch(itemtosearch)}
        <button className="btnsearch" onClick={handlesearch}><img src="images/searchicon-removebg-preview.png" alt="Search" /></button>
      </div>
      <div className="cart">
        <Link className="homepage" to="/" onClick={hide}>Home</Link>
        <Link to="/cart" onClick={hide}>
          <img src="/images/cart-removebg-preview.png" alt="Cart" />
          <p className={countinge}>{cartItems.length}</p>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
