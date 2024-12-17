import React from 'react';

const Carrinho = ({ cart, onBack }) => {
  return (
    <div className="container mt-5">
      <button className="btn btn-secondary mb-3" onClick={onBack}>
        Voltar
      </button>
      <h1>Meu Carrinho</h1>
      {cart.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <div className="row">
          {cart.map((item, index) => (
            <div key={index} className="col-md-4 d-flex justify-content-center">
              <div
                id="card"
                className="card m-3 align-items-center"
                style={{ width: 300, height: 600 }}
              >
                <img
                  src={item.image}
                  className="card-img-top img-fluid mt-3"
                  alt={item.title}
                  style={{ width: 200, height: 300 }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">Categoria: {item.category}</p>
                  <p className="card-text">R$: {item.price}</p>
                  <p className="card-text">Avaliação: {item.rating.rate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carrinho;
