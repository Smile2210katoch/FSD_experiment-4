import React, { useState } from "react";
import "../App.css";

const productsData = [
  // ================= ELECTRONICS =================
  {
    id: 1,
  name: "Wireless Headphones",
  price: 2499,
  category: "electronics",
  image:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",

  },
  {
    id: 2,
    name: "Smart Watch",
    price: 3299,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
  name: "Bluetooth Speaker",
  price: 1799,
  category: "electronics",
  image:
    "https://images.unsplash.com/photo-1583225214464-9296029427aa?auto=format&fit=crop&w=500&q=80",

  },
  {
    id: 4,
  name: "DSLR Camera",
  price: 45999,
  category: "electronics",
  image:
    "https://images.unsplash.com/photo-1519183071298-a2962eadc62c?auto=format&fit=crop&w=500&q=80",

  },
  {
    id: 5,
    name: "Laptop",
    price: 58999,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
  },

  // ================= FASHION =================
  {
    id: 6,
    name: "Blue Jeans",
    price: 1299,
    category: "fashion",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 7,
    name: "T-Shirt",
    price: 599,
    category: "fashion",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    name: "Leather Jacket",
    price: 2499,
    category: "fashion",
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    name: "Sneakers",
    price: 3199,
    category: "fashion",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 10,
    name: "Sunglasses",
    price: 899,
    category: "fashion",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80",
  },

  // ================= HOME =================
  {
    id: 11,
    name: "Table Lamp",
    price: 899,
    category: "home",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 12,
    name: "Wall Clock",
    price: 699,
    category: "home",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 13,
    name: "Cushion Set",
    price: 499,
    category: "home",
    image:
      "https://images.unsplash.com/photo-1582582429416-5f8baf0f88ae?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 14,
    name: "Flower Vase",
    price: 649,
    category: "home",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 15,
    name: "Coffee Mug",
    price: 349,
    category: "home",
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=500&q=80",
  },

  // ================= ACCESSORIES =================
  {
    id: 16,
    name: "Backpack",
    price: 1499,
    category: "fashion",
    image:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 17,
    name: "Power Bank",
    price: 1299,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1612444530581-2f3cbbd2e3c3?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 18,
    name: "Gaming Mouse",
    price: 999,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1616627457892-6f6e3e2c8e5a?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 19,
    name: "Keyboard",
    price: 1499,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 20,
    name: "Office Chair",
    price: 4999,
    category: "home",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=500&q=80",
  },

  // ================= MORE =================
  {
    id: 21,
    name: "Fitness Band",
    price: 2199,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 22,
    name: "Formal Shirt",
    price: 999,
    category: "fashion",
    image:
      "https://images.unsplash.com/photo-1593032465171-f73aee4d8a3b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 23,
    name: "Bed Sheet",
    price: 1399,
    category: "home",
    image:
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 24,
    name: "Tablet",
    price: 22999,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 25,
    name: "Perfume",
    price: 1799,
    category: "fashion",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80",
  },

  // ================= FINAL =================
  {
    id: 26,
    name: "Mixer Grinder",
    price: 3499,
    category: "home",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 27,
    name: "Earbuds",
    price: 1999,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 28,
    name: "Hoodie",
    price: 1599,
    category: "fashion",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 29,
    name: "Curtains",
    price: 1899,
    category: "home",
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 30,
    name: "Tripod Stand",
    price: 1199,
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1519181245277-cffeb31da2fb?auto=format&fit=crop&w=500&q=80",
  },
];
const Shop = () => {
  const [category, setCategory] = useState("all");

  const filteredProducts =
    category === "all"
      ? productsData
      : productsData.filter(
          (item) => item.category === category
        );

  return (
    <div className="shop-container">
      <h1>🛍️ MyShop Store</h1>

      <div className="category-btns">
        <button onClick={() => setCategory("all")}>All</button>
        <button onClick={() => setCategory("electronics")}>
          Electronics
        </button>
        <button onClick={() => setCategory("fashion")}>
          Fashion
        </button>
        <button onClick={() => setCategory("home")}>Home</button>
      </div>

      <div className="products-grid">
        {filteredProducts.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;