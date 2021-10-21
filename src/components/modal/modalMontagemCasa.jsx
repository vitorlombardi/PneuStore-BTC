import React, { useState } from "react";
import Calendar from "react-calendar";
import "../../styles/modal.scss";
import "react-calendar/dist/Calendar.css";
import FormCriaEndereco from "./formCriaEndereco";

export default function Modal({
  id = "modal",
  open,
  setOpen,
  onClose,
}) {
  const [escolha, SetEscolha] = useState(true);
  const [CriarEnderecos, setCriarEnderecos] = useState(true);
  const [value, onChange] = useState(new Date());

  const handleClick = (e) => {
    if (e.target.id === id) onClose();
  };

  return (
    <>
      {open ? (
        <div id={id} className="Modal" onClick={handleClick}>
          <div className="info-Modal">
            {CriarEnderecos ? (
              <div className="escolhas">
                <div className="d-flex justify-content-between titulo">
                  <h3>Instalação em Domicílio</h3>
                  <span className="close" onClick={() => setOpen(false)}>
                    <b>X</b>
                  </span>
                </div>
                <div className="servicos">
                  <div className="passo d-flex">
                    <div className="passo-numero">
                      <p>
                        <b>1</b>
                      </p>
                    </div>
                    <div className="passo-str">
                      <p>
                        <b>Passo</b>
                      </p>
                    </div>
                  </div>
                  <div className="passo-titulo">
                    <h3>Escolha um serviço</h3>
                  </div>
                  <div className="lista">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <p>
                          <b>Serviços de montagem</b>
                        </p>
                      </li>
                      <li className="list-group-item">
                        <div className="list-info">
                          <div className="d-flex flex-column combo">
                            <span>
                              <b>Combo Básico 1 ou 2 Pneus</b>
                            </span>
                            <span>Montagem + Balanceamento</span>
                          </div>
                          <span>R$ 169,90</span>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                              defaultChecked
                            />
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="list-info">
                          <div className="d-flex flex-column ">
                            <span>
                              <b>Combo Essencial 1 ou 2 Pneus</b>
                            </span>
                            <span>
                              Montagem + Balanceamento + Alinhamento dianteiro
                              do veículo
                            </span>
                          </div>
                          <span>R$ 189,90</span>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="agendamento">
                  <div className="passo d-flex">
                    <div className="passo-numero">
                      <p>
                        <b>2</b>
                      </p>
                    </div>
                    <div className="passo-str">
                      <p>
                        <b>Passo</b>
                      </p>
                    </div>
                  </div>
                  <div className="calendario">
                    <div className="passo-titulo">
                      <h3>Agende a data</h3>
                    </div>
                    <div>
                      <Calendar onChange={onChange} value={value} />
                    </div>
                  </div>
                </div>

                <div className="info-tela-endereco">
                  <div className="passo d-flex">
                    <div className="passo-numero">
                      <p>
                        <b>3</b>
                      </p>
                    </div>
                    <div className="passo-str">
                      <p>
                        <b>Passo</b>
                      </p>
                    </div>
                  </div>
                  <div className="passo-titulo">
                    <h3>Escolha um endereço</h3>
                  </div>
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
