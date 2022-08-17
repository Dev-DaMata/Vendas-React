import React from 'react'
import Label from '../Label/Label'

const Forms = () => {
  return (
    <div>
        <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta eaque exercitationem quaerat excepturi minima odit, quo delectus dicta iusto tenetur reprehenderit aliquid fugiat vitae maiores possimus numquam hic error quasi.</p>
        </div>
        <div>
            <form action="">
                <Label texto={"Escreva o seu nome"}/>
                <input type="text" placeholder='Nome' />
                <Label texto={"Escreva o seu E-mail"}/>
                <input type="text" />
            </form>
        </div>
    </div>
  )
}

export default Forms