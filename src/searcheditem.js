import useFetch from "./fetchData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SearchedItem = () => {
  const itmsrch = useSelector((state) => state.search.search);
  const [chngclass, setchngclass] = useState('data');
  const { error, isPending, data } = useFetch(`https://dummyjson.com/products/search?q=${itmsrch}`);

  useEffect(() => {
    if (data === "") {
      setchngclass('data2');
    } else {
      setchngclass('data');
    }
  }, [data]);

  return (
    <div className={chngclass}>
      {isPending && <div>Loading.....</div>}
      {error && <div>{error}</div>}
      {data === "" ? (
        <div className="norecord">No record
          <img src="/images/norecordimg.png" alt="No record" />
        </div>
      ) : (
        data.map((product) => {
          return (
            <div className="main-product-div" key={product.id} divider="true">
              <Link to={`/productdetails/${product.id}`}>
                <div className="productinfo">
                  <div className="product-img">
                    <img src={product.thumbnail} alt={product.title} />
                  </div>
                  <div className="product-title">
                    <div className="title">
                      {product.title}
                    </div>
                    <div className="price">PKR &nbsp;
                      {product.price}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )
        })
      )}
    </div>
  );
}

export default SearchedItem;
