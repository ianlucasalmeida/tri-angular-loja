import React from 'react';
import logo from './logo.png';

export default function Header(props) {
    return (
        <header className="bg-dark py-3">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <img src={logo} alt="Logo" className="img-fluid" style={{ width: 100, height: 80 }} />
                    <h2 className="text-primary ms-3">Tri-Angular</h2>
                </div>
                <button className="btn btn-primary" onClick={props.onViewCart}>
                    Ver Carrinho
                </button>
            </div>
        </header>
    );
}
