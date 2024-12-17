import React from 'react';

export default function Footer(props) {
    return (
        <footer className="footer bg-dark text-white py-4">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="footer-left">
                    <h5 className="mb-3">Tri-Angular</h5>
                    <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
                </div>
                
                
            </div>
        </footer>
    );
}
