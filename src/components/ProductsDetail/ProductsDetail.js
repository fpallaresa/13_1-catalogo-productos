import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../product-list";
import { AuthContext } from "../../App";
import "./ProductsDetail.css"

const ProductsDetail = () => {
  const { id } = useParams();
  const { setFavoriteProduct } = React.useContext(AuthContext);
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const handleFavorite = () => {
    setFavoriteProduct(product);
  };

  return (
    <div className='products-detail'>
      <h1 className="product__title">Detalle de producto</h1>
      <img className="product__image" src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Precio: {product.price}</p>
      <p>{product.description}</p>
      <button onClick={handleFavorite}>Marcar como favorito</button>
    </div>
  );
};

export default ProductsDetail;
