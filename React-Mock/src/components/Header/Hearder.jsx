import React from "react";
import S from "./Hearder.module.css";
const Hearder = () => {
  return (
    <header className={S.Hearder}>
        <h3 >Uma seleção de produtos</h3>
        <h1>especial para você</h1>
        <p>
          Todos os produtos desta lista foram selecionados a partir de sua
          navegação. Aproveite!
        </p>
    </header>
  );
};

export default Hearder;
