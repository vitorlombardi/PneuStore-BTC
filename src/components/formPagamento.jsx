import React from "react";
import "../styles/formPagamento.scss";

export default function FormPagamento({ setResumo, setPagamento, setIdbar }) {
  const handleClick = () => {
    setPagamento(false);
    setResumo(true);
    setIdbar("3")
  };

  const handleClickParcelamento = (e) => {
      const parcela = e.target.value
      console.log(parcela)
  }
  return (

    <>
      <div className="form-pagamento">
        <form className="col-12 col-lg-8 ">
          <div className=" d-flex flex-column">
            <h3 className="fw-bold">Detalhes do pagamento</h3>
            <div className="d-flex flex-column mt-3">
              <label htmlFor="">Nome do titular</label>
              <input className="mt-1" type="text" required />
            </div>

            <div className="d-flex flex-column mt-3">
              <label htmlFor="">Número do cartão</label>
              <input className="mt-1" type="number" required />
            </div>
            <div className="d-flex mt-3 vencimento-cvv">
              <div className="d-flex flex-column mt-3">
                <label htmlFor="">Vencimento</label>
                <input
                  className="mt-1"
                  type="text"
                  placeholder="MM/AA"
                  required
                />
              </div>

              <div className="d-flex flex-column mt-3 CVV">
                <label htmlFor="">CVV</label>
                <input className="mt-1 cvv-input" type="number" required />
              </div>
            </div>
            <div className="mt-3 d-flex flex-column">
                <p>Opções de parcelamento</p>
              <select 
              className="form-select" 
              aria-label="Default select example" 
              onClick={handleClickParcelamento}
              >
                <option value="1" selected>Pagamento à vista</option>
                <option value="2">2x sem juros</option>
                <option value="3">3x sem juros</option>
                <option value="4">4x sem juros</option>
              </select>
            </div>
            <button onClick={handleClick} className="mt-3 botao">
              Continuar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
