import "../styles/entrega.scss";
import { useState } from "react";
import ProgressBar from "./FormAccount/ProgressBar";
import React from "react";
import Modal from "./modal/modal";

export default function Entrega({setPagamento, setEntrega}) {
  
  const [CEP, setCEP] = useState(false);

  const [openModaCasa, setOpenModaCasa] = useState(false);

  const [enderecoEscolhido, setEnderecoEscolhido]= useState(undefined);

  const handleClick = () =>{
    setPagamento(true)
    setEntrega(false)
  }

  return (
    <div>
      <ProgressBar />
      {/* <div className="d-flex flex-column escolha-itens">
          <h3 className="fw-bold">Escolha uma opção de entrega </h3>

          <div className=" d-flex flex-column mt-5">
            <label>Informe o seu CEP</label>
            <div className="d-flex flex-row input">
              <input
                type="number"
                name="CEP"
                placeholder="Insira seu CEP"
                required
              />

              <button
                className="button-cep"
                onClick={e => setCEP(true)}
              >
                Calcular entrega
              </button>

            </div>
          </div>
          </div> */}
      <form className="col-12 col-lg-8 ">
        <div className="d-flex flex-column escolha-itens">
          <h3 className="fw-bold">Escolha uma opção de entrega </h3>

          <div className=" d-flex flex-column mt-5">
            <label>Informe o seu CEP</label>
            <div className="d-flex flex-row input">
              <input
                type="number"
                name="CEP"
                placeholder="Insira seu CEP"
                required
              />

              <span
                className="button-cep"
                onClick={e => setCEP(true)}
              >
                Calcular entrega
              </span>

            </div>
          </div>

          <div className="w-full flex justify-between items-center">

            {CEP ? (
              <div>
                <h3 className="fw-bold mt-5">Tipos de entrega disponíveis</h3>

                <div
                  className="card mt-3 card-entrega"
                  onClick={() => setOpenModaCasa(true)}
                >
                  <h5 className="card-header">Montagem Móvel</h5>
                  <div className="card-body">
                    <h5 className="card-title">
                      Agende sua entrega com a PneuStore Móvel
                    </h5>
                    {
                    enderecoEscolhido?<div><p>endereço:rua teste 176</p></div> 
                    : <p className="card-text">Confira opções</p>
                    } 
                  </div>
                  
                </div>

                <Modal 
                open={openModaCasa} 
                setOpen={setOpenModaCasa}
                setEnderecoEscolhido={setEnderecoEscolhido}
                onClose={ () => setOpenModaCasa(false) } 
                />

                <div className="card mt-3 card-entrega">
                  <h5 className="card-header">
                    Entregar e montar em um Centro de Montagem
                  </h5>
                  <div className="card-body">
                    <h5 className="card-title">
                      Confira a disponibilidade dos serviços em cada centro de
                      montagem
                    </h5>
                    <div className="d-flex flex-row qz-between">
                      <p className="card-text">De 4 a 7 dias úteis</p>
                      <p className="card-text">R$34,90</p>
                    </div>
                  </div>
                </div>

                <div className="card mt-3 card-entrega">
                  <h5 className="card-header">Entregar no meu endereço</h5>
                  <div className="card-body">
                    <h5 className="card-title">Norma</h5>
                    <div className="d-flex flex-row justify-content-between">
                      <p className="card-text">De 4 a 7 dias úteis</p>
                      <p className="card-text">R$34,90</p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 mb-3 d-flex justify-content-center">
                  <button onClick={handleClick}  className="button-cep">
                    Continuar
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </form>
    </div>
  );
}
