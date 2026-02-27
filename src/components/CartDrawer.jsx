import { useSelector } from "react-redux";

const CartDrawer = () => {
  const items = useSelector((state) => state.cart.items);

  console.log("Cart Items:", items);

  return (
    <div style={{ padding: "20px", background: "#fff" }}>
      <h2>Cart</h2>

      {items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        items.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <p>₹{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CartDrawer;