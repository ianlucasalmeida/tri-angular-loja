import React, { useEffect, useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Handle';
import Footer from './Footer';
import Card from './Card';
import ProductDetails from './Produtos';
import Cart from './Carrinho';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao buscar produtos');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleViewCart = () => {
    setShowCart(true);
  };

  const handleBackToProductsFromCart = () => {
    setShowCart(false);
  };

  return (
    <div>
      <Header onViewCart={handleViewCart} />
      <div className="container mt-5">
        {loading ? (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Carregando...</span>
            </div>
            <p>Carregando produtos...</p>
          </div>
        ) : error ? (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        ) : showCart ? (
          <Cart cart={cart} onBack={handleBackToProductsFromCart} />
        ) : selectedProduct ? (
          <ProductDetails product={selectedProduct} onBack={handleBackToProducts} addToCart={addToCart} />
        ) : (
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-md-3 d-flex justify-content-center">
                <Card product={product} addToCart={addToCart} onViewProduct={handleViewProduct} />
              </div>
            ))}
          </div>
        )}
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
