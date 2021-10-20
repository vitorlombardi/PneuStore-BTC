import { Api } from "Api/Api";
import React, { useEffect } from "react";

import "../../styles/formCriaEndereco.scss";

export default function FormCriaEndereco({
  CriarEnderecos,
  setCriarEnderecos,
  enderecoApi
}) {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = enderecoApi.id

    const logradouro = e.target.logradouro.value;
    const num = e.target.num.value;

    const address1 = logradouro + num
    const address2 = e.target.bairro.value;
    const city = e.target.uf.value;
    const zipCode = e.target.cep.value;

    const payLoad = {
      address1,
      address2,
      city,
      zipCode,
    }

    try {
      const res = await Api.buildApiPathRequest(Api.updateClienteUrl(id),payLoad);
      const bodyResponseRegister = await res.json();
      console.log(bodyResponseRegister);

      if (bodyResponseRegister.succeed === false) {
        return alert("Falha ao adcionar endereço");
      }
    } catch (error) {
      console.log({ error: error });
      return alert("Falha ao adcionar endereço");
    }
    //setCriarEnderecos(!CriarEnderecos)
  };

  return (
    <>
      <div className="mt-2 d-flex justify-content-center">
        <p>
          <b>Preencha os dados abaixo</b>
        </p>
      </div>
      <div className="form-endereco">
        <form onSubmit={e => e.preventDefault()}>
          <div>
            <div className="d-flex flex-column">
              <label htmlFor="">Endereço</label>
              <input name="logradouro" className="mt-1" type="text" required />
            </div>
            <div className="d-flex flex-column mt-3">
              <label htmlFor="">Número</label>
              <input name="num" className="mt-1" type="text" required />
            </div>
          </div>
          <div className="d-flex flex-column mt-3">
            <label htmlFor="">Complemento(opcional)</label>
            <input name="complemento" className="mt-1" type="text" required />
          </div>
          <div className="d-flex flex-column mt-3">
            <label htmlFor="">Bairro</label>
            <input name="bairro" className="mt-1" type="text" required />
          </div>
          <div className="d-flex flex-column mt-3">
            <label htmlFor="">Cidade</label>
            <input name="cidade" className="mt-1" type="text" required />
          </div>
          <div className="d-flex flex-column mt-3">
            <label htmlFor="">Uf</label>
            <input name="uf" className="mt-1" type="text" required />
          </div>
          <div className="d-flex flex-column mt-3">
            <label htmlFor="">CEP</label>
            <input name="cep" className="mt-1" type="text" required />
          </div>

          <div className="d-flex flex-column botao-form-endereco">
            <button
              className="mt-3 botao"
              type="submit"
              //onClick={(e) => e.preventDefault()}
            >
              Salvar
            </button>

            <button
              onClick={() => setCriarEnderecos(!CriarEnderecos)}
              className="back"
            >
              Voltar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
