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
        <div >
          <button  className={S.botao}>Conheça a Linx</button>
          <button  className={S.botao}>Ajude o algorítmo</button>
          <button  className={S.botao}>Seus produtos</button>
          <button  className={S.botao}>Compartilhe</button>
        </div>
    </header>
  );
};

export default Hearder;
