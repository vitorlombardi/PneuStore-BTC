import React, { useState } from "react";
import "../../styles/modal.scss";
import FormCriaEndereco from "./formCriaEndereco";

export default function ModalEntregaCasa({
  id = "modal",
  open,
  setOpen,
  setEnderecoEscolhido,
  onClose,
}) {
  const [CriarEnderecos, setCriarEnderecos] = useState(true);

  const handleClick = (e) => {
    if (e.target.id === id) onClose();
  };

  return (
    <>
      {open ? (
        <div id={id} className="Modal " onClick={handleClick}>
          <div className="info-modal-entrega-endereco">
            {CriarEnderecos ? (
              <div>
                <div className="d-flex justify-content-between titulo">
                  <h3>Entregar no meu endereço</h3>
                  <span className="close" onClick={() => setOpen(false)}>
                    <b>X</b>
                  </span>
                </div>
                <div className="escolha-endereco">
                  <div className="mt-1 endereco-info">
                    <div className="endereco">
                      <input type="radio" name="id-endereco" />
                      <span>
                        <b>Endereço: </b>rua teste 16
                      </span>
                      <span>
                        <b>Complemento: </b>lado par
                      </span>
                      <span>
                        <b>Bairro: </b>jardim teste
                      </span>
                      <span>
                        <b>Uf: </b> SP
                      </span>
                      <span>
                        <b>CEP: </b>00000-000
                      </span>
                    </div>
                  </div>
               

                  <div className="mt-2 adicionar-endereco">
                    <span
                      onClick={() => setCriarEnderecos(!CriarEnderecos)}
                      className="cria-novo-endereço"
                    >
                      Adicionar um novo endereço
                    </span>
                  </div>

                  <div className="button">
                    <button
                      className="mt-2 botao-confirmar"
                      onClick={() => setOpen(!open)}
                    >
                      Enviar para este endereço
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="form-info">
                <div className="d-flex justify-content-between titulo">
                  <h3>
                    <b>Adicionar um novo endereço</b>
                  </h3>
                  <span className="close" onClick={() => setOpen(false)}>
                    <b>X</b>
                  </span>
                </div>
                <FormCriaEndereco 
                setCriarEnderecos={setCriarEnderecos}
                CriarEnderecos={CriarEnderecos} 
                />
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
