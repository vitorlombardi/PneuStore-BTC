import React from 'react'
import '../styles/resumo.scss'
import ProgressBar from './FormAccount/ProgressBar'


export default function Resumo(){

    return(
        <>
            <ProgressBar />
            <div className='mr-3 resumo'>
                <h3 className='fw-bold'>Resumo da compra</h3>
                
                <div className='cards-resumo'>
                    <div className='info mt-3 endereco'>
                        <span><b>Entrega no meu endereço</b></span>
                        <div className="d-flex flex-column">
                            <span>Estrada Joaquim Cardoso Filho 3250</span>
                            <span>Jardim São Marcos</span>
                            <span>Itapecerica da Serra - SP</span>
                            <span>CEP: 06872200</span>
                        </div>

                        <div className="info-instalacao">
                            <span><b>Instalação em domicílio:</b></span>
                            <span>
                                Combo Básico 1 ou 2 Pneus 
                                (Aro 12 - 16) no dia 30/09 com preferência 
                                para o período da tarde.
                            </span>
                        </div>

                    </div>
                
                    <div className='info mt-3 pagamento'>
                        <span><b>detalhes do pagamento</b></span>
                        <div className="d-flex flex-column">
                            <span>(Crédito) Visa ****9999</span>
                            <span>Nome: Jorginho Silva</span>
                            <span>vencimento: xx/xxxx</span>
                        </div>
                    </div>

                    <div className='info mt-3 itens'>
                        <span><b>produtos comprados:</b></span>
                        <div className='d-flex flex-row '>
                            <span>Pneu Continental aro '16  * 205/55R16 91w run flat</span>
                            <span>x</span>
                            <span>R$350,00</span>
                        </div>
                        <div className='d-flex flex-row '>
                            <span>Pneu Continental aro '16  * 205/55R16 91w run flat</span>
                            <span>x</span>
                            <span>R$350,00</span>
                        </div>
                    </div>

                    <div className='info mt-3 d-flex flex-column valor'>
                        <span><b>Valor total:</b></span>
                        <span>R$1.103,90</span>
                        <button className="button-confirma">Confirmar compra</button>
                    </div>
                </div>

                
            </div>
        </>
    )
}




