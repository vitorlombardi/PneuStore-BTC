import { Container, Row, Col } from "reactstrap";
import "../styles/global.scss";
import "../styles/home.scss";
import Order from "./Order";
import Cupom from "./Cupom";
import ResumoPedidoValor from "./resumoPedidoValor";
import FormPagamento from "./formPagamento";
import Entrega from "./entrega";
import Header from "./Header";
import FormAccount from "./FormAccount/FormAccount";
import Resumo from "./resumo";
import ItemCarrinho from "./ItemCarrinho";
import React, { useEffect, useState } from "react";
import PneuList from "./PneuList";
import ProgressBar from "./FormAccount/ProgressBar";
import { Api } from "Api/Api";

export default function Home() {
  const [valorTotalCarrinho, setValorTotalCarrinho] = useState(undefined);
  const [mudaValor, setMudaValor] = useState(undefined);
  const [quantidateCarrinho, setQuantidateCarrinho] = useState(1);
  const [temFrete, setTemFrete] = useState(false);
  const [temServico, setTemServico] = useState(false);
  const [entregacasa, setEntregaCasa] = useState(false);

  const [pagamento, setPagamento] = useState(false);
  const [entrega, setEntrega] = useState(false);
  const [resumo, setResumo] = useState(false);
  const [Render, setRender] = useState(undefined);
  const [idBar, setIdbar] = useState("0");

  useEffect(() => {
    const render = () => {
      if (entrega) {
        return (
          <Entrega
            setPagamento={setPagamento}
            setEntrega={setEntrega}
            entrega={entrega}
            setIdbar={setIdbar}
            setTemFrete={setTemFrete}
            setTemServico={setTemServico}
            temServico={temServico}
            entregacasa={entregacasa}
            setEntregaCasa={setEntregaCasa}
          />
        );
      }

      if (pagamento) {
        return (
          <FormPagamento
            setResumo={setResumo}
            setPagamento={setPagamento}
            setIdbar={setIdbar}
          />
        );
      }

      if (resumo) {
        return <Resumo mudaValor={mudaValor} quantidateCarrinho={quantidateCarrinho}/>;
      } else {
        return <FormAccount setEntrega={setEntrega} setIdbar={setIdbar} />;
      }
    };
    setRender(render);
  }, [entrega, entregacasa, mudaValor, pagamento, quantidateCarrinho, resumo, temServico]);

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="display">
        <Container className="mt-4">
          <div className="bar">
            <ProgressBar idBar={idBar} />
          </div>
          <Row className="display-row">
            <Col>
              {/* <FormAccount />  */}
              {/* <FormPagamento/> */}
              {/* <Entrega /> */}
              {/* <Resumo/> */}
              {Render}
              {/* <PneuList /> */}
            </Col>

            <Col className="infos">
              <Order 
              setValorTotalCarrinho={setValorTotalCarrinho} 
              setQuantidateCarrinho={setQuantidateCarrinho}
              />
              <Cupom />
              <ResumoPedidoValor
                valorTotalCarrinho={valorTotalCarrinho}
                temServico={temServico}
                temFrete={temFrete}
                entregacasa={entregacasa}
                setMudaValor={setMudaValor}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
