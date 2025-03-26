import Logo from "../assets/LogoAgendaedu.png"
import React from "react";

const HeaderEdu = () => {
  return (
    <header className="page-header">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/tarefas">Tarefas</a></li>
          <li><a href="/perfil">Perfil</a></li>
          <li><a className="sair" href="/sair">Sair</a></li>
        </ul>
      </nav>
      <div className="user-info">
        <span>Olá, Victtoria Correia!</span>
      </div>
    </header>
  );
};

export default HeaderEdu;
