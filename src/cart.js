import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, removefromcart } from "./features2/CartSlice";
 

const Cart = () => {
  
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleDecrement = (productId, productCount) => {
    if (productCount > 1) {
      dispatch(decrement({id: productId}));
    } else {
      dispatch(removefromcart(productId));
    }
  };

  const handleIncrement = (productId) => {
    dispatch(increment({ id: productId }));
  };

  const handleDelete = (productId) => {
    dispatch(removefromcart(productId));
  };

  const calculateTotalPrice = () => {
    return cartItems?.reduce((total, product) => total + product.price * product.count, 0) || 0;
  };

  return (
    <div className="cartdata1">
      <div className="datadiv">
        <h1>Cart Data</h1>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((product, index) => (
            <div className="allcartdata" key={product.id}>
              <div className="numb">{index + 1}</div>
              <div className="productinfodiv">
                <div className="ptitle">{product.title}</div>
                <div className="pprice">{"PKR "}{product.price}</div>
              </div>
              <div className="decrement" onClick={() => handleDecrement(product.id, product.count)}>
                <button className="dbtn">-</button>
              </div>
              <div className="count">{product.count}</div>
              <div className="increment" onClick={() => handleIncrement(product.id)}>
                <button className="ibtn">+</button>
              </div>
              <div className="datadelete">
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-record-message">No items</div>
        )}
      </div>

      <div className="calculate">
        <h2>Total amount: {"PKR "}{calculateTotalPrice()}</h2>
      </div>
      <div className="bynow">
        <button onClick={() => alert("Order placed")}>Buy Now</button>
      </div>
    </div>
  );
};

export default Cart;
