import { Api } from "Api/Api";
import React, { useEffect, useState } from "react";

import "../../styles/formCriaEndereco.scss";

export default function FormCriaEndereco({
  open,
  setOpen,
  CriarEnderecos,
  setCriarEnderecos,
  enderecoApi,
  mudaDados,
  setMudaDados,
  enderecoEscolhido
}) {


  //const [novoEndereco, setNovoEndereco] = useState(undefined)

  const cepStorage = localStorage.getItem("CEP");
  const enderecoStorage = JSON.parse(cepStorage);
  console.log(enderecoStorage);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = enderecoApi.id

    
    const name = enderecoApi.name;
    const cpf = enderecoApi.cpf;
    const email = enderecoApi.email;
    const phone = enderecoApi.phone;
    const birthDate = enderecoApi.birthDate;
    
    const logradouro = e.target.logradouro.value;
    const num = e.target.num.value
    const cep = e.target.cep.value;

    const address1 = logradouro + " " + num
    const address2 = e.target.bairro.value;
    const city = e.target.uf.value;
    const zipCode = cep.replace("-", "")

    const payLoad = {
      id,
      name,
      cpf,
      email,
      phone,
      birthDate,
      address1,
      address2,
      city,
      zipCode,
    }


    try {
      const res = await Api.buildApiPathRequest(Api.updateClienteUrl(id),payLoad);
      const bodyResponseRegister = await res.json();
      
      setMudaDados(!mudaDados)
      
      setCriarEnderecos(!CriarEnderecos)

      if (bodyResponseRegister.succeed === false) {
        return alert("Falha ao adcionar endereço");
      }

    } catch (error) {
      console.log({ error: error });
      return alert("Falha ao adcionar endereço");
    }
  };

  return (
    <>
      <div className="mt-2 d-flex justify-content-center">
        <p>
          <b>Preencha os dados abaixo</b>
        </p>
      </div>
      <div className="form-endereco">
        <form onSubmit={handleSubmit}>
          <div>
            <div className="d-flex flex-column">
              <label htmlFor="">Endereço</label>
              <input 
              name="logradouro" 
              className="mt-1" 
              defaultValue={enderecoStorage.logradouro}
              type="text" 
              required />
            </div>
            <div className="d-flex flex-column mt-3">
              <label htmlFor="">Número</label>
              <input name="num" 
              className="mt-1" 
              type="text" 
              required />
            </div>
          </div>
          <div className="d-flex flex-column mt-3">
            <label htmlFor="">Complemento(opcional)</label>
            <input name="complemento" className="mt-1" type="text"/>
          </div>
          <div className="d-flex flex-column mt-3">
            <label htmlFor="">Bairro</label>
            <input name="bairro" 
            className="mt-1" 
            defaultValue={enderecoStorage.bairro}
            type="text" 
            required />
          </div>
          <div className="d-flex flex-column mt-3">
            <label htmlFor="">Cidade</label>
            <input name="cidade" 
            className="mt-1" 
            defaultValue={enderecoStorage.localidade}
            type="text" 
            required />
          </div>
          <div className="d-flex flex-column mt-3">
            <label htmlFor="">Uf</label>
            <input name="uf" 
            className="mt-1" 
            defaultValue={enderecoStorage.uf}
            type="text" 
            required />
          </div>
          <div className="d-flex flex-column mt-3">
            <label htmlFor="">CEP</label>
            <input name="cep" 
            className="mt-1" 
            defaultValue={enderecoStorage.cep}
            type="text" 
            required />
          </div>

          <div className="d-flex flex-column botao-form-endereco">
            <button
              className="mt-3 botao"
              type="submit"
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
