import useFetch from "./fetchData";
import { Cartcontext } from "./context/context";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Selector, useSelector } from "react-redux";

const SearchedItem = () => {
  
  // const {itmsrch,setdata,} = useContext(Cartcontext);
  const itmsrch = useSelector((state) =>state.search.search);
  const [chngclass,setchngclass] = useState('data');
  const {error, isPending, data} = useFetch(`https://dummyjson.com/products/search?q=${itmsrch}`);
  
  useEffect(()=>{
    if (data== "") {
      setchngclass('data2');
    } else {
      setchngclass('data');
    }
  },[data]);

  return ( 
    <div className={chngclass}>
      {isPending && <div>Loading.....</div>}
      {error && <div>{error}</div>}
      { data=="" ? (<div className="norecord">No record
      <img src="/images/norecordimg.png"></img></div> ): (data.map((product) =>{
                    return (<div className="main-product-div" key={product.id} divider>
                            <Link to={`/productdetails/${product.id}`}>
                            <div className="productinfo">
                                <div className="product-img">
                                <img src={product.thumbnail}></img>
                                </div>
                                <div className="product-title">
                                <div className="title">
                                    {product.title}
                                    </div>
                                    <div className="price">PKR &nbsp;
                                    {product.price}
                                    </div>
                                </div>
                                {/* <div className="product-desc">
                                <Typography className="product-desc" > {product.description}</Typography>
                                </div>
                                <div className="btn">
                                    <button onClick={() =>savedata(product)}>Add to Cart</button>
                                </div> */}
                            </div></Link>
                        
                            </div>)
                }))}
    </div>
   );
}
 
export default SearchedItem;
