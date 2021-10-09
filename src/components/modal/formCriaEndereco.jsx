import React from "react";

export default function FormCriaEndereco({CriarEnderecos,setCriarEnderecos}) {
  return (
    <>
        <div className="mt-2 d-flex justify-content-center">
          <p>
            <b>Preencha os dados abaixo</b>
          </p>
        </div>
        <div className="form-endereco">
          <form>
            <div>
              <div className="d-flex flex-column">
                <label htmlFor="">Endereço</label>
                <input
                  name="logradouro"
                  className="mt-1"
                  type="text"
                  required
                />
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

            <button
              className="mt-3 botao"
              type="submit"
              onClick={() => setCriarEnderecos(!CriarEnderecos)}
            >
              Salvar
            </button>
          </form>
        </div>
    </>
  );
}
