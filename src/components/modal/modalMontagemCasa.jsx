import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "../../styles/modal.scss";
import "react-calendar/dist/Calendar.css";
import FormCriaEndereco from "./formCriaEndereco";

import casa from "../../img/casa_icon.png";

export default function Modal({
  id = "modal",
  open,
  setOpen,
  onClose,
  enderecoApi,
  tipoModal,
  mudaDados,
  setMudaDados,
}) {
  const [escolha, SetEscolha] = useState(undefined);
  const [CriaEnderecoMontagem, setCriaEnderecoMontagem] = useState(true);
  const [enderecoEscolhido, setEnderecoEscolhido] = useState(undefined);
  const [value, onChange] = useState(new Date(2021, 10, 26));

  console.log(value)

  const handleClick = (e) => {
    if (e.target.id === id) onClose();
  };


  useEffect(() => {
    const mudancaEndereco = () => {
      const address1 = enderecoApi.address1;
      const address2 = enderecoApi.address2;
      const city = enderecoApi.city;
      const zipCode = enderecoApi.zipCode;

      const endEscolhido = {
        address1,
        address2,
        city,
        zipCode,
      };

      setEnderecoEscolhido(endEscolhido);
    };
    mudancaEndereco();
  }, [enderecoApi, mudaDados]);


  const handleClickSalvaEndereco = () => {


    if(!enderecoEscolhido){
      return alert("Selecione um endereço para continuar")
    }

    if(!value){
      return alert("Selecione a data do agendameto para continuar")
    }

    if(!escolha){
      return alert("Selecione um serviço para continuar")
    }

    localStorage.setItem(
      "Endereço-de-Entrega",
      JSON.stringify(enderecoEscolhido)
    );

    localStorage.setItem(
      "data-de-entrega",
      JSON.stringify(value)
    );

    localStorage.setItem(
      "tipo-de-Entrega",
      JSON.stringify(escolha)
    );

    setOpen(!open);
  };

  return (
    <>
      {open ? (
        <div id={id} className="Modal" onClick={handleClick}>
          <div className="info-Modal">
            {CriaEnderecoMontagem ? (
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
                          <div className="form-check" >
                            <input
                              className="form-check-input"
                              type="radio"
                              name="servico"
                              value="basico"
                              id="flexRadioDefault1"
                              onChange={e => SetEscolha(e.target.value)}
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
                          <div className="form-check" >
                            <input
                              className="form-check-input"
                              type="radio"
                              name="servico"
                              value="essencial"
                              id="flexRadioDefault1"
                              onChange={e => SetEscolha(e.target.value)}
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
                      <Calendar 
                      onChange={onChange} 
                      value={value}
                      minDate={new Date(2021, 10, 26)}
                      />
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
                          onClick={() =>
                            setCriaEnderecoMontagem(!CriaEnderecoMontagem)
                          }
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
                        onClick={() =>
                          setCriaEnderecoMontagem(!CriaEnderecoMontagem)
                        }
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
                <FormCriaEndereco
                  setCriaEnderecoMontagem={setCriaEnderecoMontagem}
                  CriaEnderecoMontagem={CriaEnderecoMontagem}
                  tipoModal={tipoModal}
                  enderecoApi={enderecoApi}
                  mudaDados={mudaDados}
                  setMudaDados={setMudaDados}
                />
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
