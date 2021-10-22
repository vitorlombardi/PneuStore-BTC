import React from "react";
import { useState } from "react";
import MaskedInput from "react-text-mask";
import { toast } from "react-toastify";

import { Api } from "../../Api/Api";
import "../../styles/formAccount.scss";

export default function FormAccount({ setEntrega, setIdbar }) {
  const [registrar, setRegistrar] = useState(false);

  const handleSubmitToken = async (e) => {
    e.preventDefault();
    toast.info("Conferindo dados de login")

    const userName = e.target.nome.value;
    const passwordHash = e.target.senha.value;

    const payloadToken = {
      userName,
      passwordHash,
    };

    try{
      const response = await Api.buildApiPostRequest(
        Api.tokenAuthUrl(),
        payloadToken
      );

      console.log(response);

      const bodyRes = await response.json();
      if (!bodyRes.succeed) {
        return toast.error("Email ou senha invalidos");
      }

      console.log(bodyRes);
      localStorage.setItem("Jwt", bodyRes.message)
      localStorage.setItem("Login", userName)
      toast.success("Usuario logado com sucesso")
      

    } catch (error) {
      console.log({ error: error });
      return toast.error("Falha ao fazer login confira os dados e tente de novo")
    }

    

    setEntrega(true);
    setIdbar("1")
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const name = e.target.nomeCompleto.value;
    const CPf = e.target.cpf.value;
    const birthDate = e.target.data.value;
    const email = e.target.email.value;
    const userName = email;
    const telefone = e.target.telefone.value;
    const passwordHash = e.target.senha.value;
    const confirmPasswordHash = e.target.confirmarSenha.value;

    const cpf = CPf
    .replace(".", "")
    .replace(".", "")
    .replace("-", "");
    const phone = telefone
      .replace("(", "")
      .replace(")", "")
      .replace(" ", "")
      .replace("-", "");

    if (passwordHash !== confirmPasswordHash) {
      return toast.error("As senhas estão diferentes");
    }

    if (!regex.test(passwordHash)) {
      return toast.error(
        "A senha deve conter no mínimo 8 caracteres, uma letra maiúscula e minúscula e um caractere especial" 
      );
    }

    const payload = {
      name,
      cpf,
      email,
      birthDate,
      phone,
    };

    const payloadRegister = {
      userName,
      passwordHash,
    };

    console.log(payloadRegister);

    try{
      const res = await Api.buildApiPostRequest(
        Api.registerAuthUrl(),
        payloadRegister
      );
      const bodyResponseRegister = await res.json();
      console.log(bodyResponseRegister);
  
      if (bodyResponseRegister.succeed === false) {
        return toast.error("Falha ao registrar, confira seus dados ");
      }
    }catch (error) {
      console.log({ error: error });
      return toast.error("Falha ao registrar");
    }

    try{
      const response = await Api.buildApiPostRequest(
        Api.creatClientUrl(),
        payload
      );
      const bodyResponse = await response.json();
      console.log(bodyResponse);
  
      if (bodyResponse.succeed === false) {
        return toast.error("Falha ao registrar, confira seus dados ");
      }

      toast.success("Usuario registrado com sucesso")

    }catch (error) {
      console.log({ error: error });
      return toast.error("Falha ao registrar");
    }

    setRegistrar(false);
  };

  

  return (
    <div className="form-account">
      {!registrar ? (
        <form className="col-12 col-lg-8 form" onSubmit={handleSubmitToken}>
          <div className=" d-flex flex-column form-itens">
            <h3 className="fw-bold">Entrar</h3>
            <p>É necessário estar logado para finalizar a compra.</p>
            <div className="d-flex flex-column mt-1">
              <label className="label" htmlFor="">
                Email
              </label>
              <input
                name="nome"
                className="mt-1"
                type="email"
                placeholder="Digite seu Email"
                required
              />
            </div>

            <div className="d-flex flex-column mt-3">
              <label htmlFor="">Senha</label>
              <input
                name="senha"
                className="mt-1"
                type="password"
                placeholder="Digite sua senha"
                required
              />
            </div>

            <button
              className="mt-3 submit"
              type="submit"
            >
              Entrar e continuar
            </button>
            <p className="mt-3 mx-auto">
              Ainda não tem uma conta?{" "}
              <span
                className="create-account"
                onClick={(e) => setRegistrar(true)}
              >
                Crie uma conta.
              </span>{" "}
            </p>
          </div>
        </form>
      ) : (
        <form
          className="col-12 col-lg-8 pb-5 form-cria"
          onSubmit={handleSubmitRegister}
        >
          <div className="d-flex flex-column form-itens">
            <h3 className="fw-bold">Criar conta</h3>
            <p>Crie uma conta para prosseguir com sua compra.</p>

            {/* <Alert color='danger'>Erro ao criar conta</Alert> */}

            <div className="d-flex flex-column mt-1">
              <label htmlFor="">Nome completo</label>
              <input
                name="nomeCompleto"
                className="mt-1 item"
                type="text"
                placeholder="Digite seu nome de usuário"
                required
              />
            </div>

            <div className="d-flex justify-content-between input-item">
              <div className="d-flex flex-column mt-3 w-100 me-2">
                <label htmlFor="">CPF</label>
                <MaskedInput
                  guide={false}
                  mask={[
                    /\d/,
                    /\d/,
                    /\d/,
                    ".",
                    /\d/,
                    /\d/,
                    /\d/,
                    ".",
                    /\d/,
                    /\d/,
                    /\d/,
                    "-",
                    /\d/,
                    /\d/,
                  ]}
                  type="text"
                  name="cpf"
                  className="mt-1 item"
                  placeholder={"Digite seu cpf"}
                  required
                  minLength={14}
                />
              </div>

              <div className="d-flex flex-column mt-3 w-100  ">
                <label htmlFor="">Data de nascimento</label>
                <input
                  name="data"
                  className="mt-1 item"
                  type="date"
                  placeholder="Digite seu nome de usuário"
                />
              </div>
            </div>

            <div className="d-flex justify-content-between  input-item">
              <div className="d-flex flex-column mt-3 w-100 me-2">
                <label htmlFor="">Email</label>
                <input
                  name="email"
                  className="mt-1 item"
                  type="email"
                  placeholder="O email que você mais usa"
                  required
                />
              </div>

              <div className="d-flex flex-column mt-3 w-100">
                <label htmlFor="">Telefone</label>
                <MaskedInput
                  guide={true}
                  keepCharPositions={true}
                  mask={[
                    "(",
                    /\d/,
                    /\d/,
                    ")",
                    " ",
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                    "-",
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                  ]}
                  type="text"
                  name="telefone"
                  className="mt-1 item"
                  placeholder={"Telefone para contato"}
                  required
                />
              </div>
            </div>

            <div className="d-flex  input-item">
              <div className="d-flex flex-column mt-3 w-100 me-2">
                <label htmlFor="">Senha</label>
                <input
                  name="senha"
                  className="mt-1 item"
                  type="password"
                  placeholder="Digite sua senha"
                  required
                  minLength={8}
                />
              </div>

              <div className="d-flex flex-column mt-3 w-100">
                <label htmlFor="">Confirmar senha</label>
                <input
                  name="confirmarSenha"
                  className="mt-1 item"
                  type="password"
                  placeholder="Digite sua senha novamente"
                  required
                />
              </div>
            </div>

            <button
              // onClick={(e) => setRegistrar(false)}
              className="mt-3 submit"
              type="submit"
            >
              Cadastrar e continuar
            </button>
            <button onClick={(e) => setRegistrar(false)} className="back">
              Voltar
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
