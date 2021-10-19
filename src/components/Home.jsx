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
  const [conta, setConta] = useState(true);
  const [pagamento, setPagamento] = useState(false);
  const [entrega, setEntrega] = useState(false);
  const [resumo, setResumo] = useState(false);
  const [Render, setRender] = useState(undefined);
  
  const [idBar, setIdbar] = useState("0")

  const [dadosClient, setDadosCliente] = useState(undefined)


  useEffect(() => {
    const render = () => {
      if (entrega) {
        return <Entrega setPagamento={setPagamento} setEntrega={setEntrega} setIdbar={setIdbar} />;
      }

      if (pagamento) {
        return (
          <FormPagamento setResumo={setResumo} setPagamento={setPagamento}  setIdbar={setIdbar}/>
        );
      }

      if (resumo) {
        return <Resumo />;
      } else {
        return <FormAccount setEntrega={setEntrega} setIdbar={setIdbar}/>;
      }
    };
    setRender(render);
  }, [entrega, pagamento, resumo]);

  useEffect(() => {
    const dadosLogin = () => {
      const storage = localStorage.getItem("Login")
      const dadosLogin = JSON.parse(storage)
      console.log(dadosLogin)
    }
    if(entrega){
      dadosLogin()
      const dataCliente = async () => {
        const response = await Api.buildAppGetRequestToken(Api.readClient(), true);
        const result = await response.json();
        console.log(result)
      }
      dataCliente()
    }
  }, [entrega]);
  



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
              <Col >
                {/* <FormAccount />  */}
                {/* <FormPagamento/> */}
                {/* <Entrega /> */}
                {/* <Resumo/> */}
                {Render}
                {/* <PneuList /> */}
              </Col>

              <Col className="infos">
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
