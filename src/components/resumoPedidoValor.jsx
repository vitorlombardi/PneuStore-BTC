import React, { useEffect, useState } from "react";
import "../styles/resumoPedidoValor.scss";

export default function ResumoPedido({
  valorTotalCarrinho,
  temServico,
  temFrete,
  entregacasa,
}) {

  

  useEffect(() => {
    const local = () => {
      localStorage.removeItem("tipo-de-Entrega")
      localStorage.removeItem("frete")
    }
    local()
  },[])

  const [valorTotal, setValortotal] = useState(undefined);
  const [valoFrete, setValorFrete] = useState(0);
  const [valoServico, setValorServico] = useState(0);
  const [temValorServico, setTemValorServico] = useState(false)

  console.log(temServico);

  useEffect(() => {
    const carrinho = () => {
      const frete = localStorage.getItem("frete");
      const freteValor = JSON.parse(frete);

      const servico = localStorage.getItem("tipo-de-Entrega");
      const servicoTipo = JSON.parse(servico);
      console.log(servicoTipo);

      if (servicoTipo === "basico") {
        setValorServico(169);
        setTemValorServico(!temValorServico)

      }
      if (servicoTipo === "essencial") {
        setValorServico(189);
        setTemValorServico(!temValorServico)
      }

      if (servicoTipo === null || servicoTipo === undefined) {
        setValorServico(0);
        setTemValorServico(false)
      }

      setValorFrete(freteValor);
    };
    carrinho();
  }, [temServico, temFrete, entregacasa,]);

  useEffect(() => {
    const carrinho = () => {
      setValortotal(valorTotalCarrinho + valoFrete + valoServico);
    };
    carrinho();
  }, [valoFrete, valoServico, valorTotalCarrinho]);

  return (
    <div className="d-flex flex-column resumo-pedido">
      <div className="d-flex flex-row tipo-pedido">
        <p>
          <b>SubTotal:</b>
        </p>
        <p>R$ {valorTotalCarrinho},00</p>
      </div>
      {temFrete ? (
        <div className="d-flex flex-row tipo-pedido">
          <p>
            <b>Frete:</b>
          </p>
          <p>R$ {valoFrete},00</p>
        </div>
      ) : null}

      {temValorServico ? (
        <div className="d-flex flex-row mb-0 tipo-pedido tipo-info">
          <p>
            <b>Instalação em domicílio:</b>
          </p>
          <p>R${valoServico},00</p>
        </div>
      ) : null}

      <div className="d-flex flex-row tipo-pedido">
        <span>
          <b>Total:</b>
        </span>
        <span>
          <b>R$ {valorTotal},00</b>
        </span>
      </div>
    </div>
  );
}
