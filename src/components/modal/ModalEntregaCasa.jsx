import React, { useState } from "react";
import "../../styles/modal.scss";
import FormCriaEndereco from "./formCriaEndereco";

import casa from "../../img/casa_icon.png";

export default function ModalEntregaCasa({
  id = "modal",
  open,
  setOpen,
  setEnderecoEscolhido,
  onClose,
  enderecoApi,
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
                      {enderecoApi.address1 ? (
                        <div>
                          <input type="radio" name="id-endereco" />
                          <span>
                            <b>Endereço: </b>
                            {enderecoApi.address1}
                          </span>
                          <span>
                            <b>Bairro: </b>
                            {enderecoApi.address2}
                          </span>
                          <span>
                            <b>Uf: </b>
                            {enderecoApi.city}
                          </span>
                          <span>
                            <b>CEP: </b>
                            {enderecoApi.zipCode}
                          </span>
                        </div>
                      ) : (
                        <div
                          className="nao-tem-endereco d-flex flex-column"
                          onClick={() => setCriarEnderecos(!CriarEnderecos)}
                        >
                          <img src={casa} alt="icone de casa" width="100px" />
                          <span>adicionar um endereço</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-2 adicionar-endereco">
                    {enderecoApi.address1 ? (
                      <span
                        onClick={() => setCriarEnderecos(!CriarEnderecos)}
                        className="cria-novo-endereço"
                      >
                        Adicionar um novo endereço
                      </span>
                    ) : null}
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
                <div>
                  <FormCriaEndereco
                    setCriarEnderecos={setCriarEnderecos}
                    CriarEnderecos={CriarEnderecos}
                    enderecoApi={enderecoApi}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
