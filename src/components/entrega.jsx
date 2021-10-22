import "../styles/entrega.scss";
import { useEffect, useState } from "react";
import React from "react";
import ModalMontagemCasa from "./modal/modalMontagemCasa";
import ModalEntregaCasa from "./modal/ModalEntregaCasa";
import { ViaCep } from "../Api/ViaCep";
import MaskedInput from "react-text-mask";

import van from "../img/icone_van.png";
import roda from "../img/chave-de-rodas.png";
import casa from "../img/casa_icon.png";
import { Api } from "Api/Api";

export default function Entrega({
  setPagamento,
  setEntrega,
  entrega,
  setIdbar,
  setTemFrete,
  setTemServico,
  temServico,
  entregacasa,
  setEntregaCasa,
}) {
  const [tipoModal, setTipoModal] = useState("");
  const [apareceBotao, setApareceBotao] = useState(false);

  const [dadosClient, setDadosCliente] = useState(undefined);
  const [mudaDados, setMudaDados] = useState(false);

  const [CEP, setCEP] = useState(false);
  const [endereco, setEndereco] = useState(undefined);

  const [openModaMontagemCasa, setOpenModaMontagemCasa] = useState(false);
  const [openModaEntregaCasa, setOpenModaEntregaCasa] = useState(false);

  const [enderecoApi, setEnderecoApi] = useState(undefined);

  const [modalMontagemSelecionado, setmodalMontagemSelecionado] =
    useState(false);
  const [modalCasaSelecionado, setmodalCasaSelecionado] = useState(false);

  const [classMontagem, setClassMontagem] = useState("");
  const [classCasa, setClassCasa] = useState("");

  useEffect(() => {
    const setClassName = () => {
      if (modalMontagemSelecionado) {
        setClassMontagem("true");
        setClassCasa("");
      }

      if (modalCasaSelecionado) {
        setClassMontagem("");
        setClassCasa("true");
      }
    };
    setClassName();
  }, [modalCasaSelecionado, modalMontagemSelecionado]);

  useEffect(() => {
    if (entrega) {
      const storage = localStorage.getItem("Login");
      console.log(storage);

      const dataCliente = async () => {
        try {
          const response = await Api.buildAppGetRequestToken(
            Api.readClient(),
            true
          );

          const result = await response.json();

          const filter = result.results.filter(
            (cliente) => cliente.email === `${storage}`
          );
          // @ts-ignore
          setDadosCliente(filter);
          console.log(filter);
        } catch (error) {
          console.log({ error: error });
        }
      };
      dataCliente();
    }
  }, [entrega, mudaDados]);

  const handleClick = () => {
    setPagamento(true);
    setEntrega(false);
    setIdbar("2");
  };

  useEffect(() => {
    const pegaEndereco = () => {
      if (dadosClient) {
        // @ts-ignore
        setEnderecoApi(...dadosClient);
      }
    };
    pegaEndereco();
  }, [dadosClient, mudaDados]);

  const handleClickButtonCEPValida = async (e) => {
    e.preventDefault();

    const cepInput = e.target.cep.value;

    if (cepInput.length !== 9) {
      return alert("CEP inválido");
    }

    const cep = cepInput.replace("-", "");

    try {
      const res = await ViaCep.buildAppGetRequest(ViaCep.buscaCep(cep));
      const resultado = await res.json();
      localStorage.setItem("CEP", JSON.stringify(resultado));

      if (resultado.erro) {
        return alert("CEP inválido");
      }

      setEndereco(resultado);
      setCEP(true);

      setTemFrete(true);
      localStorage.setItem("frete", JSON.stringify(34));
    } catch (error) {
      console.log({ error: error });
      return alert("CEP inválido");
    }
  };

  const handleClickModalMontagem = () => {
    setTipoModal("montagem");
    setOpenModaMontagemCasa(true);
    setApareceBotao(true);
  };

  const handleClickModalCasa = () => {
    setTipoModal("casa");
    setOpenModaEntregaCasa(true);
    setApareceBotao(true);
  };

  return (
    <div>
      {/* <form className="col-12" onSubmit={handleClickButtonCEPValida}> */}
      <div className="d-flex flex-column escolha-itens">
        <h3 className="fw-bold">Escolha uma opção de entrega </h3>

        <div className=" d-flex flex-column mt-5">
          <form onSubmit={handleClickButtonCEPValida}>
            <label>Informe o seu CEP</label>
            <div className="d-flex flex-row input">
              <MaskedInput
                guide={false}
                mask={[/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
                type="text"
                name="cep"
                placeholder={"Digite o cep"}
                minLength={8}
              />

              <button className="button-cep">Calcular entrega</button>
            </div>
          </form>
        </div>

        <div className="w-full flex justify-between items-center">
          {CEP ? (
            <div>
              <h3 className="fw-bold mt-5">Tipos de entrega disponíveis</h3>

              <div
                className={`card mt-3 card-entrega selecionado-${classMontagem}`}
                onClick={handleClickModalMontagem}
              >
                <div
                  className={`card-header header-${classMontagem} d-flex justify-content-between`}
                >
                  <h5 className="card-info-header">Montagem Móvel</h5>
                  <img
                    src={van}
                    alt="Icone a van montagem movel"
                    width="75px"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Agende sua entrega com a PneuStore Móvel
                  </h5>
                  <br />
                  <p className="card-text">Confira opções</p>
                  <br />
                </div>
              </div>

              <ModalMontagemCasa
                open={openModaMontagemCasa}
                setOpen={setOpenModaMontagemCasa}
                onClose={() => setOpenModaMontagemCasa(false)}
                enderecoApi={enderecoApi}
                tipoModal={tipoModal}
                mudaDados={mudaDados}
                setMudaDados={setMudaDados}
                setmodalMontagemSelecionado={setmodalMontagemSelecionado}
                setmodalCasaSelecionado={setmodalCasaSelecionado}
                setTemServico={setTemServico}
                temServico={temServico}
              />

              <ModalEntregaCasa
                open={openModaEntregaCasa}
                setOpen={setOpenModaEntregaCasa}
                enderecoApi={enderecoApi}
                onClose={() => setOpenModaEntregaCasa(false)}
                mudaDados={mudaDados}
                setMudaDados={setMudaDados}
                tipoModal={tipoModal}
                setmodalMontagemSelecionado={setmodalMontagemSelecionado}
                setmodalCasaSelecionado={setmodalCasaSelecionado}
                setTemServico={setTemServico}
                temServico={temServico}
                entregacasa={entregacasa}
                setEntregaCasa={setEntregaCasa}
              />

              <div
                className="card mt-3 card-entrega card-1"
                onClick={() => alert("Serviço invalido")}
              >
                <div className="card-header d-flex justify-content-between header-1">
                  <h5 className="card-info-header">
                    Entregar e montar em um Centro de Montagem
                  </h5>
                  <img src={roda} alt="Icone a uma roda" width="60px" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Confira a disponibilidade dos serviços em cada centro de
                    montagem
                  </h5>
                  <div className="d-flex flex-row justify-content-between">
                    <p className="card-text">De 4 a 7 dias úteis</p>
                    <p className="card-text">R$34,00</p>
                  </div>
                </div>
              </div>

              <div
                className={`card mt-3 card-entrega card-2 selecionado-${classCasa}`}
                onClick={handleClickModalCasa}
              >
                <div
                  className={`card-header header-${classCasa} d-flex justify-content-between header-2`}
                >
                  <h5 className="card-info-header">Entregar no meu endereço</h5>
                  <img src={casa} alt="Icone a uma roda" width="60px" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Normal</h5>
                  <div className="d-flex flex-row justify-content-between">
                    <p className="card-text">De 4 a 7 dias úteis</p>
                    <p className="card-text">R$34,00</p>
                  </div>
                </div>
              </div>

              <div className="mt-3 mb-3 d-flex justify-content-center">
                {apareceBotao ? (
                  <button onClick={handleClick} className="button-cep">
                    Continuar
                  </button>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
