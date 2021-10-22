import React, { useEffect, useState } from "react";
import "../styles/resumo.scss";
import ResponsiveDialog from "./modal/modalFinalizaCompra";

export default function Resumo({ mudaValor, quantidateCarrinho }) {
  const [temCartao, setTemCartao] = useState(undefined);
  const [numeroCartao, setNumeroCartao] = useState(undefined);

  const [valorservico, setValorServico] = useState(undefined);
  const [tipoEntrega, setTipoEntrega] = useState(undefined);
  const [resumoEntrega, setResumoEntrega] = useState(undefined);

  const [totalPagar, setTotalPagar] = useState(undefined);

  const [itemCarrinho, setCarrinho] = useState(undefined);

  const [endereco, setEndereco] = useState(undefined);

  useEffect(() => {
    const cartao = () => {
      const storage = localStorage.getItem("pagamento");
      const pagamento = JSON.parse(storage);

      const numero = pagamento.numero.substring(14);
      setNumeroCartao(numero);

      setTemCartao(pagamento);
    };
    cartao();
  }, []);

  useEffect(() => {
    const item = () => {
      const storage = localStorage.getItem("pneuCarrinho");
      const item = JSON.parse(storage);

      setCarrinho(item);
    };
    item();
  }, []);

  useEffect(() => {
    const endereco = () => {
      const storage = localStorage.getItem("Endereço-de-Entrega");
      const item = JSON.parse(storage);

      setEndereco(item);
    };
    endereco();
  }, []);

  useEffect(() => {
    const entrega = () => {
      const storage = localStorage.getItem("tipo-de-Entrega");
      const entrega = JSON.parse(storage);
      console.log(entrega);

      if (entrega === null) {
        setValorServico(34);
        setTipoEntrega("Entregar no meu endereço");
        setResumoEntrega("De 4 a 7 dias úteis");
        return;
      }

      if (entrega === "basico") {
        setValorServico(169);
        setTipoEntrega("Combo Básico 1 ou 2 Pneus ");
        setResumoEntrega("Montagem + Balanceamento");
        return;
      }
      if (entrega === "essencial") {
        setValorServico(189);
        setTipoEntrega("Combo Essencial 1 ou 2 Pneus ");
        setResumoEntrega(
          "Montagem + Balanceamento + Alinhamento dianteiro do veículo"
        );
        return;
      }
    };
    entrega();
  }, []);

  useEffect(() => {
    const total = () => {
      setTotalPagar(mudaValor);
    };
    total();
  }, [mudaValor, totalPagar]);

  return (
    <>
      <div className="resumo">
        <h3 className="fw-bold">Resumo da compra</h3>

        <div className="cards-resumo">
          <div className="info mt-3 endereco">
            {endereco ? (
              <div>
                <span>
                  <b>Meu endereço</b>
                </span>
                <div className="d-flex flex-column">
                  <span>
                    <b>Endereço: </b>
                    {endereco.address1}
                  </span>
                  <span>
                    <b>Bairro: </b>
                    {endereco.address2}
                  </span>
                  <span>
                    <b>Uf: </b>
                    {endereco.city}
                  </span>
                  <span>
                    <b>CEP: </b>
                    {endereco.zipCode}
                  </span>
                </div>
              </div>
            ) : null}
            {tipoEntrega ? (
              <div className="info-instalacao">
                <span>
                  <b>{tipoEntrega}:</b>
                </span>
                <span>{resumoEntrega}</span>
              </div>
            ) : null}
          </div>

          {temCartao ? (
            <div className="info mt-3 pagamento">
              <span>
                <b>Detalhes do pagamento</b>
              </span>
              <div className="d-flex flex-column">
                <span>(Crédito) Visa ****{numeroCartao}</span>
                <span>Nome: {temCartao.nome}</span>
                <span>vencimento: {temCartao.vencimento}</span>
                <span>Em {temCartao.parcela}x no cartão</span>
              </div>
            </div>
          ) : null}

          {itemCarrinho ? (
            <div className="info mt-3 itens">
              <span>
                <b>Produtos comprados:</b>
              </span>
              <div className="d-flex flex-row ">
                <span>{itemCarrinho.nomePneu}</span>
                <span>x</span>
                <span>R$ {itemCarrinho.valorPneu},00</span>
              </div>
              <div className="d-flex quantidade">
                <p>
                  <b>Quantidade: {quantidateCarrinho}</b>
                </p>
              </div>
            </div>
          ) : null}

          {totalPagar ? (
            <div className="info mt-3 d-flex flex-column valor">
              <span>
                <b>Valor total:</b>
              </span>
              <span>R$ {totalPagar},00</span>
              <ResponsiveDialog />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
