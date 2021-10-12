import "../styles/entrega.scss";
import { useState } from "react";
import React from "react";
import ModalMontagemCasa from "./modal/modalMontagemCasa";
import ModalEntregaCasa from "./modal/ModalEntregaCasa";

export default function Entrega({setPagamento, setEntrega}) {
  
  const [CEP, setCEP] = useState(false);

  const [openModaMontagemCasa, setOpenModaMontagemCasa] = useState(false);
  const [openModaEntregaCasa, setOpenModaEntregaCasa] = useState(false);

  const [enderecoEscolhido, setEnderecoEscolhido]= useState(undefined);

  const handleClick = () =>{
    setPagamento(true)
    setEntrega(false)
  }

  const handleClickButtonCEP = (e) => {
    e.preventDefault()

    setCEP(true)
  }
  console.log(openModaEntregaCasa)

  return (
    <div>
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
      <form className="col-12">
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
                onClick={handleClickButtonCEP}
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
                  onClick={() => setOpenModaMontagemCasa(true)}
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

                <ModalMontagemCasa 
                open={openModaMontagemCasa} 
                setOpen={setOpenModaMontagemCasa}
                setEnderecoEscolhido={setEnderecoEscolhido}
                onClose={ () => setOpenModaMontagemCasa(false) } 
                />

                <ModalEntregaCasa
                open={openModaEntregaCasa}
                setOpen={setOpenModaEntregaCasa}
                setEnderecoEscolhido={setEnderecoEscolhido}
                onClose={ () => setOpenModaEntregaCasa(false) } 
                />

                <div className="card mt-3 card-entrega" onClick={() => alert("Serviço invalido")}>
                  <h5 className="card-header">
                    Entregar e montar em um Centro de Montagem
                  </h5>
                  <div className="card-body">
                    <h5 className="card-title">
                      Confira a disponibilidade dos serviços em cada centro de
                      montagem
                    </h5>
                    <div className="d-flex flex-row justify-content-between">
                      <p className="card-text">De 4 a 7 dias úteis</p>
                      <p className="card-text">R$34,90</p>
                    </div>
                  </div>
                </div>

                <div className="card mt-3 card-entrega" onClick={() => setOpenModaEntregaCasa(true)}>
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
