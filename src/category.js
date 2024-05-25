import { useParams,Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./newfetch";

const Category = () => {
    const {category} = useParams();
    // const ctgry = useSelector((state)=>state.category.category);
    const url = `https://dummyjson.com/products/category/${category}`;
    const {data, isPending, error} = useQuery({
        queryKey: [category],
        queryFn: ()=>fetchData(url)
    })

    return ( 
        <div className="data">
            {error && <div>{error}</div>}
            {isPending && <div className="loadingdiv">Loading......</div>}
            {data && 
                data.map((product) =>{
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
                            </div></Link>
                        
                            </div>)
                })
            }
        </div>
     );
}
 
export default Category;