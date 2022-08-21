import { useDispatch } from "react-redux";
import {
  addItemsToCart,
  removeItemsFromCart,
} from "../../redux-actions/cartActions";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";

const CartItem = ({
  name,
  brand,
  image,
  price,
  quantity,
  stock,
  productId,
}) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const increaseQuantity = (productId, quantity, stock) => {
    const newQty = quantity + 1;
    if (quantity >= stock) {
      enqueueSnackbar("Maximum Quantity Reached", { variant: "info" });
      return;
    }
    dispatch(addItemsToCart(productId, newQty));
  };

  const decreaseQuantity = (productId, quantity) => {
    const newQty = quantity - 1;
    if (quantity <= 1) return;
    dispatch(addItemsToCart(productId, newQty));
  };
  const removeCartItem = (productId) => {
    dispatch(removeItemsFromCart(productId));
  };

  return (
    <div className='product-cartCard-wrapper'>
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <div className='remove-btn'>
          <button onClick={() => removeCartItem(productId)}> X </button>
        </div>
        <Link to={`/product/${productId}`}>
          <div className='product-image'>
            <img src={image} alt={name} />
          </div>
        </Link>
        <Link to={`/product/${productId}`}>
          <div className='product-name'>
            <p>{name.length > 42 ? `${name.substring(0, 42)}...` : name}</p>
          </div>
        </Link>
      </div>
      <div className='quantity-indicators'>
        <span style={{ width: "30px" }}>
          <p>{quantity}</p>
        </span>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "10px",
          }}
        >
          <button onClick={() => increaseQuantity(productId, quantity, stock)}>
            ˄
          </button>
          <button onClick={() => decreaseQuantity(productId, quantity)}>
            ˅
          </button>
        </span>
      </div>
      <div className='price-indicator'>
        <span> ₹ {price * quantity}</span>
      </div>
    </div>
  );
};

export default CartItem;
