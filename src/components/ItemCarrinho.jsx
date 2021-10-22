// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Api } from "../Api/Api";
import "../styles/itemCarrinho.scss";

export default function ItemCarrinho({setValorTotalCarrinho,setQuantidateCarrinho}) {
  const nomePneu = "Pneu Continental aro '16  * 205/55R16 91w run flat";
  const imgPneu =
    "https://static.pneustore.com.br/medias/sys_master/images/images/he0/h78/8833352564766/pneu-continental-aro-16-contipremiumcontact-205-55r16-91w-run-flat-1.jpg";
  const valorPneu = 350.0;
  const quantidate = 1;

  const infoPneu = {
    nomePneu,
    imgPneu,
    valorPneu,
    quantidate,
  };
  localStorage.setItem("pneuCarrinho", JSON.stringify(infoPneu));

  const [itemCarrinho, setItemCarrinho] = useState(undefined);
  const [valorCarrinho, setValorCarrinho] = useState(undefined);
  const [valorTotal, setvalorTotal] = useState(undefined);
  const [quantidadePnel, setquantidade] = useState(undefined);

  useEffect(() => {
    const carrinho = () => {
      const storage = localStorage.getItem("pneuCarrinho");
      const item = JSON.parse(storage);
      setItemCarrinho(item);
      setquantidade(item.quantidate);
      setValorCarrinho(item.valorPneu);
    };
    carrinho();
  }, []);

  const handleMaisQuantidaeCarrinho = () => {
    setquantidade(quantidadePnel + 1);

    setQuantidateCarrinho(quantidadePnel + 1)
    console.log(quantidadePnel + 1)
  };

  const handleMenosQuantidaeCarrinho = () => {
    if (quantidadePnel === 1) {
      return;
    }

    setquantidade(quantidadePnel - 1);

    setQuantidateCarrinho(quantidadePnel - 1)
    console.log(quantidadePnel - 1)

  };

  useEffect(() => {
    const valor = () => {
      setvalorTotal(valorCarrinho * quantidadePnel);
	  localStorage.setItem("valor-Total", valorTotal);
	  setValorTotalCarrinho(valorTotal)
    };
    valor();
  }, [quantidadePnel, valorCarrinho, valorTotal]);

  if (!itemCarrinho) {
    return <div>Carregando carrinho...</div>;
  }

  return (
    <div className="row mt-4 item-cart">
      {itemCarrinho ? (
        <div>
          <div className="col-4">
            <img src={itemCarrinho.imgPneu} alt={itemCarrinho.nomePneu} />
          </div>
          <div className="col-8">
            <button className="close">x</button>
            <h4 className="title">{itemCarrinho.nomePneu}</h4>
            <button className="add-item" onClick={handleMenosQuantidaeCarrinho}>
              -
            </button>
            <span type="number" className="quant-item" disabled>
              {quantidadePnel}
            </span>
            <button className="add-item" onClick={handleMaisQuantidaeCarrinho}>
              +
            </button>
            <span> x </span>
            <span>R$ {valorTotal}.00</span>
          </div>
        </div>
      ) : (
        <div>
			<h1>Carrinho vazio</h1>
		</div>
      )}
    </div>
  );
}
