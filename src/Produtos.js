import React from 'react';

const ProductDetails = ({ product, onBack, addToCart }) => {
  return (
    <div className="container mt-5">
      <button className="btn btn-secondary mb-3" onClick={onBack}>
        Voltar
      </button>
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} className="img-fluid" alt={product.title} />
        </div>
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <p>Categoria: {product.category}</p>
          <p>R$: {product.price}</p>
          <p>Avaliação: {product.rating.rate}</p>
          <p>{product.description}</p>
          <button
            className="btn btn-primary mt-3"
            onClick={() => addToCart(product)}
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
