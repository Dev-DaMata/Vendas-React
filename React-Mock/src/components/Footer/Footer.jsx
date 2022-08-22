import React from 'react'
import { useState } from 'react'
import Label from '../Label/Label'
import S from "./Footer.module.css"

const Footer = () => {
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const inputName = (e)=>{
        setNome(e.target.value)
        console.log(nome);
    }
    const inputEmail = (e)=>{
        setEmail(e.target.value)
        console.log(email);
    }
    const botaoEnvia = (e)=>{
        e.preventDefault()
        console.log(nome, email);
    }
  return (
    <div>
        <p className={S.p}>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
        <div className={S.formDoAmigo}>
            <div>
            <form  action="">
                <Label texto={"Nome do seu amigo:"}/>
                <input type="text" placeholder='Nome' required onChange={inputName} />
                
            </form>
            </div>
            <div>
                <form action="">
                <Label texto={"E-mail:"}/>
                <input type="email" placeholder='email' required onChange={inputEmail} />
                </form>
            </div>
        </div>
        <div className={S.botaoDeEnviar}>
        <button onClick={botaoEnvia} >Enviar agora</button>
        </div>
        <footer className={S.Hearder}>
        <p>Testando suas habilidades em HTML,</p>
        <p>CSS e JS. Linx Impulse</p>
        <p>2019</p>  
    </footer>
    </div>
  )
}

export default Footer