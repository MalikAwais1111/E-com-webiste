import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addtocart } from "./features2/CartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const [isPending, setisPending] = useState(true);
  const [error, seterror] = useState(null);
  const [data1, setdata1] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();

  const useFetch = (id) => {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch("https://dummyjson.com/products/" + id);
          if (!res.ok) {
            throw Error("No record");
          }
          const data1 = await res.json();
          setdata1(data1);
          setisPending(false);
          seterror(null);
        } catch (err) {
          if (err.name === "AbortError") {
          } else {
            setisPending(false);
            seterror(err.message);
          }
        }
      };

      fetchData();
    }, [id]);
  };

  useFetch(id);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const addingtocart = () => {
    dispatch(addtocart(data1));
    alert("Added to cart");
  };

  return (
    <div className="pdetails">
      {isPending && <div>Loading.....</div>}
      {error && (
        <div className="norecord">
          {error}
          <img src="/images/norecordimg.png" alt="No Record" />
        </div>
      )}
      {data1 && (
        <article>
          <div className="maindivPD">
            <div className="PimagesMain">
              <div className="Pimg">
                <img src={selectedImage || data1.thumbnail} alt="" />
              </div>
              <div className="Pimages">
                {data1.images.map((image) => (
                  <img
                    className={selectedImage === image ? 'active' : ''}
                    src={image}
                    onClick={() => handleImageClick(image)}
                    key={image}
                    alt=""
                  />
                ))}
              </div>
            </div>
            <div className="ProductInfo">
              <div className="PTitle">
                <h4>
                  {data1.title} {'( '}{data1.brand} {' )'}
                </h4>
                <h5>{data1.rating} &#9734; &#9733; &#9733; &#9733; &#9733;</h5>
              </div>
              <div className="PPrice">
                <p>
                  {'PKR '}{data1.price} {'('} {' Stock  '}{data1.stock} {')'}
                </p>
              </div>
              <div className="Pdesc">
                <p>{data1.description}</p>
              </div>
              <div className="addcart">
                <button onClick={addingtocart}>Add to cart</button>
              </div>
            </div>
          </div>
        </article>
      )}
    </div>
  );
};

export default ProductDetails;
