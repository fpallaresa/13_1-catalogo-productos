import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../product-list";
import "./Products.css"

const Products = () => {
  return (
    <div className="products">
      <h1 className="products__title">Productos</h1>
      <div className="products__list">
        {products.map((product) => (
          <div className="products__item" key={product.id}>
            <img className="products__image" src={product.image} alt={product.name} />
            <h3 className="products__name">{product.name}</h3>
            <Link to={`/producto-detalle/${product.id}`}>Ver Producto</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
