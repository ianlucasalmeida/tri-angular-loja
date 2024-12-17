import React from 'react';

export default function Card(props) {
  return (
    <div
      id="card"
      className="card m-2 align-items-center"
      style={{ width: 300, height: 600 }}
    >
      <img
        src={props.product.image}
        className="card-img-top img-fluid mt-3"
        alt={props.product.title}
        style={{ width: 200, height: 250 }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.product.title}</h5>
        <p className="card-text">Categoria: {props.product.category}</p>
        <p className="card-text">R$: {props.product.price}</p>
        <p className="card-text">Avaliação: {props.product.rating.rate}</p>
        <div className="d-flex justify-content-between w-100">
          <button
            className="btn btn-primary mt-3"
            onClick={() => props.addCarrinho(props.product)}
          >
            Adicionar ao Carrinho
          </button>
          <button
            className="btn btn-secondary mt-3"
            onClick={() => props.onVisaoProdutos(props.product)}
          >
            Visualizar Produto
          </button>
        </div>
      </div>
    </div>
  );
}
