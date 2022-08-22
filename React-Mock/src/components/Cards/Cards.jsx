import React from 'react'
import S from './Cards.module.css'
const Cards = ({imagem, titulo, descricao, precoAntes, precoAtual, precoParcela, numParcela}) => {
  return (
    <div className={S.card}>
      <img src={imagem} alt="" className={S.img}/>
      <h4>{titulo}</h4>
      <p>{descricao}</p>
      <p>De: R${precoAntes}</p>
      <h3>Por: R${precoAtual}</h3>
      <p>ou {numParcela}x de R${precoParcela}</p>
      
      <button className={S.button}>Comprar</button>
    </div>
  )
}

export default Cards