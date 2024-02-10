// App.js
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import MyAccount from './components/MyAccount';
import Login from './components/Login';
import Header from './components/Header/Header';

// Importamos componentes lazy
const ProductsDetail = React.lazy(() => import("./components/ProductsDetail/ProductsDetail"));
const Products = React.lazy(() => import("./components/Products/Products"));
const NotFound = React.lazy(() => import("./components/NotFound"));

// Contexto de login
export const AuthContext = React.createContext({ user: null });

function App() {
  // Estado del login
  const [authInfo, setAuthInfo] = React.useState({ user: null });
  const [favoriteProduct, setFavoriteProduct] = React.useState(null); // Estado para el producto favorito
  
  return (
    <AuthContext.Provider value={{ ...authInfo, favoriteProduct, setFavoriteProduct }}>
      <div className="app">
        <BrowserRouter>
          <Header></Header>
          <Routes>
            {/* Rutas cargadas normal (no lazy) */}
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/login' element={<Login login={setAuthInfo}></Login>}></Route>
            <Route path='/my-account' element={<MyAccount></MyAccount>}></Route>

            {/* Rutas cargadas de forma lazy */}
            <Route path='/productos' element={<React.Suspense fallback={<p>Cargando...</p>}> <Products></Products> </React.Suspense>}></Route>
            <Route path='/producto-detalle/:id' element={<React.Suspense fallback={<p>Cargando...</p>}> <ProductsDetail></ProductsDetail> </React.Suspense>}></Route>

            {/* Paginas no encontradas */}
            <Route path="*" element={<React.Suspense fallback={<p>Cargando...</p>}> <NotFound></NotFound> </React.Suspense>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
