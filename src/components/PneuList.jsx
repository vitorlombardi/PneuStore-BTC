import React from "react";
import { useState, useEffect } from "react";
import { Api } from "../Api/Api";

export default function PneuList() {
  const [selectPneu, setSelectPeneu] = useState(false);
  const [cardPneu, setCardPneu] = useState(undefined);
  const [loading, setLoading] = useState(false);

  console.log(cardPneu);

  useEffect(() => {
    const loadData = async () => {
      const response = await Api.buildAppGetRequest(Api.readAllTyreUrl());

      const result = await response.json();

      setCardPneu(result.results);
      setLoading(true);
    };
    loadData();
  }, []);

  if (!loading) {
    return (
      <div className="carregando">
        <h1>Carregando itens do estoque...</h1>
      </div>
    );
  }

  return (
    <>
      {cardPneu.map((pneu, index) => (
        <div className="card" key={index}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title"></h3>
            <p className="card-text"></p>
            <p className="card-text"></p>
            <a href="\" className="btn btn-primary"></a>
          </div>
        </div>
      ))}
    </>
  );
}
