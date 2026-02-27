import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";  // 👈 change here

import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      <button
        onClick={() => dispatch(addItem(product))}  // 👈 change here
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;