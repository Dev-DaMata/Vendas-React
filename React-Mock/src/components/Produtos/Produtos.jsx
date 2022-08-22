import React from "react";
import S from "./Produtos.module.css";
import Cards from "../Cards/Cards";
import { useState } from "react";
import { useEffect } from "react";
const arr = []

const Produtos = () => {
  
const [prod, setProd] = useState([])
const [pag, setPag ] = useState(1)

async function handleApi()  {
  const response = await fetch(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${pag}`)
  const json = await response.json()
  arr.push(json.products)
  setProd(arr)
  console.log(json);
}

useEffect(()=>{
handleApi()
},[pag])

  return (
    <div className={S.pai}>
      <div className={S.linha}>
        <hr className={S.hr} />
        <h2>Sua seleção especial</h2>
        <hr className={S.hr} />
      </div>
      <div className={S.cardsNofinal}>
      {prod.map((div, index)=>{
        return(
          <div className={S.cardsNofinal} key={index}>
            {div.map((prod)=>{
              return(
                <Cards key={prod.id}
                imagem={prod.image}
                titulo={prod.name}
                descricao={prod.description}
                precoAntes={prod.oldPrice}
                precoAtual={prod.price}
                precoParcela={prod.installments.value}
                numParcela={prod.installments.count}
                />
              )
            })}
          </div>
        )
      })}
      </div>
      <div className={S.botaoMostraMais}>
        <button onClick={()=>{
          setPag(pag+1)
        }}>Ainda mais produtos aqui!</button>
      </div>
      <div className={S.linha}>
        <hr className={S.hr2} />
        <h2>Compartilhe a novidade</h2>
        <hr className={S.hr2} />
      </div>
    </div>
  );
};

export default Produtos;
