import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./fetchData";
import Typography from '@mui/material/Typography';
import { Cartcontext } from "./context/context";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./newfetch";

const AllData = () => {
    // const { error, isPending, data } = useFetch("https://dummyjson.com/products");

    // Use the useContext hook to get the context value
    // console.log(srchitm);
    const url = 'https://dummyjson.com/products';
    const {data,isPending, error} = useQuery({
        queryKey: ['alldata'],
        queryFn: ()=>fetchData(url),
    })
    // const { setdata,data:data1  } = useContext(Cartcontext);
    // console.log(itm);
    // const savedata = (product) => {
    //     const temp = data1.map((d) => {
    //         if (d.id === product.id) {
    //             return { ...d, count: d.count + 1 };
    //         } else {
    //             return d;
    //         }
    //     });
    //         const productInCart = temp.some((d) => d.id === product.id);
    
    //     if (!productInCart) {
    //         temp.push({ ...product, count: 1 });
    //     }
    
    //     setdata(temp);
    //     alert("Added to cart");

    // };

    return ( 
        <div className="data">
            {error && <div>{error}</div>}
            {isPending && <div className="loadingdiv">Loading......</div>}
            {data && data.map((product) => (
                    <div className="main-product-div" key={product.id} divider>
                            <Link to={`/productdetails/${product.id}`}>
                        <div className="productinfo">
                            <div className="product-img">
                                <img src={product.thumbnail} alt={product.title} />
                            </div>
                            <div className="product-title">
                                <div className="title">
                                    {product.title}
                                </div>
                                <div className="price">PKR &nbsp;{product.price}</div>
                            </div>
                            {/* <div className="product-desc">
                                <Typography className="product-desc">{product.description}</Typography>
                            </div>
                            <div className="btn">
                                <button onClick={() => savedata(product)}>Add to Cart</button>
                            </div> */}
                        </div>
                             </Link>
                    </div>
                ))
            }
        </div>
    );
}

export default AllData;
