import React from 'react';
import { useState } from 'react'

import { Api } from '../../Api/Api';
import '../../styles/formAccount.scss'
import ProgressBar from './ProgressBar';

export default function FormAccount({ setEntrega }) {

	const [registrar, setRegistrar] = useState(false);

	const handleSubmitToken = async (e) => {
		e.preventDefault();
	
		const userName = e.target.nome.value;
		const passwordHash = e.target.senha.value;
	
		const payloadToken = {
			userName,
			passwordHash
		};

		

		console.log(payloadToken);

		const response = await Api.buildApiPostRequest(
			Api.tokenAuthUrl(),
			payloadToken
		)
		const bodyResponse = await response.json();
		console.log(bodyResponse)
	
	  };


	  const handleSubmitRegister = async (e) => {
		e.preventDefault();

		const name = e.target.nomeCompleto.value;
		const cpf = e.target.cpf.value;
		const birthDate = e.target.data.value;
		const email = e.target.email.value;
		const phone = e.target.telefone.value;
		const passwordHash = e.target.senha.value;

		const payload = {
			name,
			cpf,
			birthDate,
			email,
			phone,
		}

		const payloadRegister = {
			email,
			passwordHash

		}


		const response = await Api.buildApiPostRequest(
			Api.creatClientUrl(),
			payload
		)
		const bodyResponse = await response.json();
		console.log(bodyResponse)

		
		const res = await Api.buildApiPostRequest(
			Api.registerAuthUrl(),
			payloadRegister
		)
		const bodyResponseRegister = await res.json();
		console.log(bodyResponseRegister)
	  };

	  

	return (
		<div className='form-account'>
			<ProgressBar />
		{!registrar ? (
			<form className='col-12 col-lg-8' onSubmit={handleSubmitToken}>
			<div className=' d-flex flex-column'>
				<h3 className='fw-bold'>Entrar</h3>
				<p>É necessário estar logado para finalizar a compra.</p>

				{/* <Alert color='danger'>Erro ao criar conta</Alert> */}

				<div className='d-flex flex-column mt-1'>
					<label className='label' htmlFor="">Nome de usuário</label>
					<input name="nome" className='mt-1' type="text" placeholder='Digite seu nome de usuário' />
				</div>

				<div className='d-flex flex-column mt-3'>
					<label htmlFor="">Senha</label>
					<input name="senha" className='mt-1' type="password" placeholder='Digite sua senha' />
				</div>

				<button onClick={e => setEntrega(true)} className='mt-3 submit' type='submit'>Entrar e continuar</button>
				<p className='mt-3 mx-auto'>Ainda não tem uma conta? <span className='create-account' onClick={e => setRegistrar(true)}>Crie uma conta.</span> </p>

			</div>
		</form>
		) : (
			<form className='col-12 col-lg-8 pb-5' onSubmit={handleSubmitRegister}>
			<div className='d-flex flex-column'>
				<h3 className='fw-bold'>Criar conta</h3>
				<p>Crie uma conta para prosseguir com sua compra.</p>

				{/* <Alert color='danger'>Erro ao criar conta</Alert> */}

				<div className='d-flex flex-column mt-1'>
					<label htmlFor="">Nome completo</label>
					<input name="nomeCompleto" className='mt-1' type="text" placeholder='Digite seu nome de usuário' />
				</div>

				<div className="d-flex justify-content-between">
					<div className='d-flex flex-column mt-3 w-100 me-2'>
						<label htmlFor="">CPF</label>
						<input name="cpf" className='mt-1' type="text" placeholder='Digite seu cpf' />
					</div>

					<div className='d-flex flex-column mt-3 w-100 ms-2'>
						<label htmlFor="">Data de nascimento</label>
						<input name="data" className='mt-1' type="date" placeholder='Digite seu nome de usuário' />
					</div>
				</div>
				
				<div className="d-flex justify-content-between">
					<div className='d-flex flex-column mt-3 w-100 me-2'>
						<label htmlFor="">Email</label>
						<input name="email" className='mt-1' type="email" placeholder='O email que você mais usa' />
					</div>

					<div className='d-flex flex-column mt-3 w-100 ms-2'>
						<label htmlFor="">Telefone</label>
						<input name="telefone"className='mt-1' type="text" placeholder='Telefone para contato' />
					</div>
				</div>

				<div className="d-flex">
					<div className='d-flex flex-column mt-3 w-100 me-2'>
						<label htmlFor="">Senha</label>
						<input name="senha" className='mt-1' type="password" placeholder='Digite sua senha' />
					</div>

					<div className='d-flex flex-column mt-3 w-100 ms-2'>
						<label htmlFor="">Confirmar senha</label>
						<input  name="confirmarSenha" className='mt-1' type="password" placeholder='Digite sua senha novamente' />
					</div>
				</div>

				<button onClick={e => setRegistrar(false)} className='mt-3 submit' type='submit'>Cadastrar e continuar</button>
				<button onClick={e => setRegistrar(false)} className='back'>Voltar</button>

			</div>
		</form>
		)}
		
		</div>
	)
	
}
