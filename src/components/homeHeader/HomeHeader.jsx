import React from "react";
import "../homeHeader/HomeHeader.scss";
import { icons } from '../../assets/icons.jsx'
export const HomeHeader = () => {
  return (
    <div className="top__bar">

      {/* Start top bar info */}
      <div className="header__info">
        <p>
          Bienvenido. Usted puede <a> iniciar sesión</a> o
          <a> crear una cuenta</a>
        </p>
      </div>
      <div className="sesion">
        <span className="user__icon">{icons.user}</span>
        <span></span>
      </div>
      <div className="config">
        <span className="config__icon">{icons.config}</span>
        <span></span>
      </div>

      {/* Start top bar shopping bag */}
      <div className="shopping__bag">
        <a href="">
          <span className="shopping__bag">{icons.shoppingBag}</span>
          <span>0 artículos (s) - 💲 0.00</span>
        </a>
      </div>
    </div>
  );
};
