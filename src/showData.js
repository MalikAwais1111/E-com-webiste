import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./newfetch";

const AllData = () => {
    const url = 'https://dummyjson.com/products';
    const { data, isPending, error } = useQuery({
        queryKey: ['alldata'],
        queryFn: () => fetchData(url),
    });

    return (
        <div className="data">
            {error && <div>{error}</div>}
            {isPending && <div className="loadingdiv">Loading......</div>}
            {data && data.map((product) => (
                <div className="main-product-div" key={product.id}>
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
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default AllData;
