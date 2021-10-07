import React from 'react'
import '../styles/formPagamento.scss'
import ProgressBar from './FormAccount/ProgressBar'

export default function FormPagamento({setResumo, setPagamento}) {

    const handleClick = () => {
        setPagamento(false)
        setResumo(true)

    }
    return(
        <>
            <ProgressBar />
            <div className='form-pagamento'>
                <form className='col-12 col-lg-8 '>
                    <div className=' d-flex flex-column'>
                        <h3 className='fw-bold'>detalhes do pagamento</h3>
                        <div className='d-flex flex-column mt-3'>
                            <label htmlFor="">nome do titular</label>
                            <input className='mt-1' type="text" required/>
                        </div>

                        <div className='d-flex flex-column mt-3'>
                            <label htmlFor="">número do cartão</label>
                            <input className='mt-1' type="number" required
                            />
                        </div>
                        <div className=' d-flex flex-row mt-3'>
                            <div className='d-flex flex-column mt-3'>
                                <label htmlFor="">Vencimento</label>
                                <input className='mt-1' type="text" placeholder='MM/AA'  required/>
                            </div>

                            <div className='d-flex flex-column mt-3 CVV'>
                                <label htmlFor="">CVV</label>
                                <input className='mt-1 '  type="number"  required/>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <b>Clique aqui</b> para opções de parcelamento
                        </div>
                        <button onClick={handleClick} className='mt-3 botao' >Continuar</button>
                    </div>
                </form>
            </div>
        </>
    )
}