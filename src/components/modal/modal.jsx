import React, { useState } from "react";
import "../../styles/modal.scss";

export default function Modal({
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
        <div id={id} className="Modal" onClick={handleClick}>
          <div className="info-Modal">
            {CriarEnderecos ? (
              <div className="enderecos">
                <div className="d-flex justify-content-between titulo">
                  <h3>Seus endereços</h3>
                  <span className="close" onClick={() => setOpen(false)}>
                    <b>X</b>
                  </span>
                </div>

                <div className="info-tela-endereco">
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
                        <b>bairro: </b>jardim teste
                      </span>
                      <span>
                        <b>uf: </b> SP
                      </span>
                      <span>
                        <b>CEP: </b>00000-000
                      </span>
                    </div>

                    <div className="endereco">
                      <input type="radio" name="id-endereco" />
                      <span>
                        <b>Endereço: </b>rua teste 16
                      </span>
                      <span>
                        <b>Complemento: </b>lado par
                      </span>
                      <span>
                        <b>bairro: </b>jardim teste
                      </span>
                      <span>
                        <b>uf: </b> SP
                      </span>
                      <span>
                        <b>CEP: </b>00000-000
                      </span>
                    </div>

                    <div className="endereco">
                      <input type="radio" name="id-endereco" />
                      <span>
                        <b>Endereço: </b>rua teste 16
                      </span>
                      <span>
                        <b>Complemento: </b>lado par
                      </span>
                      <span>
                        <b>bairro: </b>jardim teste
                      </span>
                      <span>
                        <b>uf: </b> SP
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
                      enviar para este endereço
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
                <div className="mt-2 d-flex justify-content-center">
                  <p>
                    <b>preencha os dados abaixo</b>
                  </p>
                </div>
                <div className="form-endereco">
                  <form>
                    <div>
                      <div className="d-flex flex-column">
                        <label htmlFor="">endereço</label>
                        <input
                          name="logradouro"
                          className="mt-1"
                          type="text"
                          required
                        />
                      </div>
                      <div className="d-flex flex-column mt-3">
                        <label htmlFor="">número</label>
                        <input
                          name="num"
                          className="mt-1"
                          type="text"
                          required
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-column mt-3">
                      <label htmlFor="">complemento(opcional)</label>
                      <input
                        name="complemento"
                        className="mt-1"
                        type="text"
                        required
                      />
                    </div>
                    <div className="d-flex flex-column mt-3">
                      <label htmlFor="">bairro</label>
                      <input
                        name="bairro"
                        className="mt-1"
                        type="text"
                        required
                      />
                    </div>
                    <div className="d-flex flex-column mt-3">
                      <label htmlFor="">cidade</label>
                      <input
                        name="cidade"
                        className="mt-1"
                        type="text"
                        required
                      />
                    </div>
                    <div className="d-flex flex-column mt-3">
                      <label htmlFor="">uf</label>
                      <input name="uf" className="mt-1" type="text" required />
                    </div>
                    <div className="d-flex flex-column mt-3">
                      <label htmlFor="">CEP</label>
                      <input name="cep" className="mt-1" type="text" required />
                    </div>

                    <button
                      className="mt-3 botao"
                      type="submit"
                      onClick={() => setCriarEnderecos(!CriarEnderecos)}
                    >
                      Salvar
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
