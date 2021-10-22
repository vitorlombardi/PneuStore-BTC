import React from "react";
import MaskedInput from "react-text-mask";
import "../styles/formPagamento.scss";

export default function FormPagamento({ setResumo, setPagamento, setIdbar }) {

  const handleSubimitSalvaCartao = (e) => {
    e.preventDefault();

    const nome = e.target.nome.value;
    const numero = e.target.numero.value;
    const vencimento = e.target.vencimento.value;
    const cvv = e.target.cvv.value;
    const parcela = e.target.parcela.value;

    const dadosCartao = {
      nome,
      numero,
      vencimento,
      cvv,
      parcela,
    };

    localStorage.setItem("pagamento", JSON.stringify(dadosCartao))

    setPagamento(false);
    setResumo(true);
    setIdbar("3");
  
  };
  return (
    <>
      <div className="form-pagamento">
        <form className="col-12 col-lg-8 " onSubmit={handleSubimitSalvaCartao}>
          <div className=" d-flex flex-column">
            <h3 className="fw-bold">Detalhes do pagamento</h3>
            <div className="d-flex flex-column mt-3">
              <label htmlFor="">Nome do titular</label>
              <input className="mt-1" type="text" required name="nome" />
            </div>

            <div className="d-flex flex-column mt-3">
              <label htmlFor="">Número do cartão</label>
              <MaskedInput
                guide={false}
                mask={[
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  " ",
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  " ",
                  /\d/,
                  /\d/,
                  /\d/,
                  " ",
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                ]}
                className="mt-1"
                type="text"
                required
                name="numero"
                minLength={16}
              />
            </div>
            <div className="d-flex mt-3 vencimento-cvv">
              <div className="d-flex flex-column mt-3">
                <label htmlFor="">Vencimento</label>
                <MaskedInput
                guide={false}
                mask={[
                  /\d/,
                  /\d/,
                  "/",
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                ]}
                className="mt-1"
                type="text"
                required
                name="vencimento"
                placeholder={"MM/AAAA"}
                minLength={7}
              />
              </div>

              <div className="d-flex flex-column mt-3 CVV">
                <label htmlFor="">CVV</label>
                <MaskedInput
                guide={false}
                mask={[
                  /\d/,
                  /\d/,
                  /\d/,
                ]}
                className="mt-1 cvv-input"
                type="text"
                required
                name="cvv"
                minLength={3}
              />
              </div>
            </div>
            <div className="mt-3 d-flex flex-column">
              <p>Opções de parcelamento</p>
              <select
                className="form-select"
                aria-label="Default select example"
                name="parcela"
              >
                <option value="1" selected>
                  Pagamento à vista
                </option>
                <option value="2">2x sem juros</option>
                <option value="3">3x sem juros</option>
                <option value="4">4x sem juros</option>
              </select>
            </div>
            <button className="mt-3 botao">Continuar</button>
          </div>
        </form>
      </div>
    </>
  );
}
