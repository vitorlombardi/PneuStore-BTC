import '../styles/cupom.scss'
import { useState } from 'react'
import React from 'react'


export default function Cupom() {
	const [codigo, setCodigo] = useState('')

	function handleSubmit(event){
		event.preventDefault()
		const valor = event.target.cupom.value
		setCodigo(valor)
	}
	
	return (
		<div className='cupom'>
			<form action="" onSubmit={handleSubmit}>
				<label htmlFor="">Código de desconto</label>
				<div className="field">
					<input type="text" name="cupom" placeholder="Insira seu cupom de desconto" />
					<button type="submit" className="cupom-button">Aplicar</button>
				</div>
			</form>	
		</div>
	)
}
