import React from "react";
import { AuthContext } from "../App";
import { Navigate } from "react-router-dom"; 

const MyAccount = () => {
  const { user, favoriteProduct } = React.useContext(AuthContext);

  return (
    <div className="page">
      <h1>MyAccount</h1>
      {user ? (
        <div>
          <p>El usuario es: {user}</p>
          {favoriteProduct ? (
            <p>Su producto favorito es: {favoriteProduct.name}</p>
          ) : (
            <p>No hay producto favorito seleccionado</p>
          )}
        </div>
      ) : (
        <Navigate to="/login" replace={true}></Navigate>
      )}
    </div>
  );
};

export default MyAccount;
