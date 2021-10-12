import ItemCarrinho from "./ItemCarrinho";
import '../styles/order.scss'
import React from "react";

export default function Order() {
	return (
		<div className='order'>
			<h3>Carrinho de compras</h3>
			<ItemCarrinho />
			<ItemCarrinho />
		</div>
	)
}