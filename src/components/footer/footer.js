import React from "react";

import './footer.css';


export const Footer = ({className}) => {
  return (
    <div>
      <footer className={className}>
        <p> Desenvolvido por
          Jennifer Pessoa <a href="https://github.com/jenniferpessoa" target="_blank"> <i className="fab fa-github"></i></a> <a href="https://www.linkedin.com/in/jennifer-pessoa/" target="_blank" > <i className="fab fa-linkedin"></i></a> e
          Juliana Monteiro <a href="https://github.com/JulianaMonteiro4" target="_blank"> <i className="fab fa-github"></i></a> <a href="https://www.linkedin.com/in/-juliana-monteiro/" target="_blank" > <i className="fab fa-linkedin"></i></a>
        </p>
      </footer>
    </div>

  )
}

