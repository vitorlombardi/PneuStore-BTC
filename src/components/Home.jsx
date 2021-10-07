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
import { render } from "react-dom";

export default function Home() {
  const [conta, setConta] = useState(true);
  const [pagamento, setPagamento] = useState(false);
  const [entrega, setEntrega] = useState(false);
  const [resumo, setResumo] = useState(false);


  const [Render, setRender]= useState(undefined)


  useEffect(()=>{
    const render = () => {

      if (entrega) {
        return <Entrega setPagamento={setPagamento} setEntrega={setEntrega} />;
      }
  
      if (pagamento) {
        return <FormPagamento setResumo={setResumo} setPagamento={setPagamento} />;
      }
  
      if (resumo) {
        return <Resumo />;
      } 
      
      else {
        return <FormAccount setEntrega={setEntrega} />;
      }
  
     
    };
    setRender(render)
  },[entrega, pagamento, resumo])

  return (
    <>
      <Row>
        <Header />
      </Row>
      <div className="display">
        <Container className="mt-4">
          <Row>
            <Col md="8">
              {/* <FormAccount />  */}
              {/* <FormPagamento/> */}
              {/* <Entrega /> */}
              {/* <Resumo/> */}
              {Render}
            </Col>

            <Col className="infos" md="4">
              <Order />
              <Cupom />
              <ResumoPedidoValor />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
