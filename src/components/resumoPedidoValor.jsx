import React from 'react'
import '../styles/resumoPedidoValor.scss'

export default function ResumoPedido() {
	return (
		<div className='d-flex flex-column resumo-pedido'>

            <div className='d-flex flex-row tipo-pedido'>
                <p><b>subTotal:</b></p>
                <p>R$900,00</p>
            </div>
            <div className='d-flex flex-row tipo-pedido'>
                <p><b>Frete:</b></p>
                <p>R$34,00</p>
            </div>
            <div className='d-flex flex-row mb-0 tipo-pedido tipo-info'>
                <p><b>Instalação em domicílio:</b></p>
                <p>R$169,90</p>
            </div>
            <div className='d-flex flex-row tipo-pedido tipo-pedido-info'>
                <p>Combo Básico 1 ou 2 Pneus (Aro 12 - 16) no dia 30/09 com preferência para o período da tarde</p>
            </div>
            <div className='d-flex flex-row tipo-pedido'>
                <span><b>Total:</b></span>
                <span><b>R$1.103,90</b></span>
            </div>
                
		</div>
	)
}

