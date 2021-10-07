import React from 'react'
import '../../styles/progressBar.scss'

export default function ProgressBar() {
	return (
		<div className='bar-progress d-flex justify-content-between col-12 col-lg-8 mb-5 mt-3'>
			<div className="line">
				<div className="line-fill"></div>
			</div>
			<div className="step">
				<div className="point point-1">1</div>
				<span>Login</span>
			</div>

			<div className="step">
				<div className="point point-2">2</div>
				<span>Entrega</span>
			</div>

			<div className="step">
				<div className="point point-3">3</div>
				<span>Pagamento</span>
			</div>

			<div className="step">
				<div className="point point-4">4</div>
				<span>Finalizar</span>
			</div>
		</div>
	)
}