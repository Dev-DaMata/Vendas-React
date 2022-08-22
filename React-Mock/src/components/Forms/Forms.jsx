import React from 'react'
import { useState } from 'react'
import Label from '../Label/Label'
import S from './Forms.module.css'

const Forms = () => {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [cpf, setCpf] = useState("")
  const inputName = (e)=>{
    setNome(e.target.value)
    console.log(nome);
  }
  const inputEmail = (e)=>{
    setEmail(e.target.value)
    console.log(email);
  }
  const inputCpf = (e)=>{
    setCpf(e.target.value)
    console.log(cpf);
  }
  const resultadoForms = (e)=>{
    e.preventDefault()
    console.log(nome, email, cpf);
  }
  return (
    <div className={S.pai}>
        <div className={S.texto} >
          <h2>Ajude o algorítimo a ser mais certeiro </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend. Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus.</p>
        </div>
        <div className={S.Header}>
            <form action="">
                <Label texto={"Escreva o seu nome"}/>
                <input type="text" placeholder='Nome' required className={S.campo} onChange={inputName} /><br/>
                <Label texto={"Escreva o seu E-mail"}/>
                <input type="email"  placeholder='E-mail' required className={S.campo} onChange={inputEmail} /><br/>
                <Label texto={"Escreva o seu CPF"}/>
                <input type="number"  placeholder='CPF' required className={S.campo} onChange={inputCpf} /><br/>
                <div className={S.radio}>
                <Label texto={"Masculino"}/>
                <input type="radio"></input>
                <Label texto={"Feminino"}/>
                <input type="radio"></input>
                </div>
                <button onClick={resultadoForms}>Enviar</button>
            </form>
        </div>
    </div>
  )
}

export default Forms
