import React, { useContext } from 'react';

import { CartContext } from '../../hooks/useCart';

// styles
import styles from './checkout.module.scss';

export const Checkout = () => {
  const { carrinho } = useContext(CartContext);

  function handleClick(event) {
    event.preventDefault();

    const formulario = document.querySelector(`.${styles.form}`);
    
    const obj = {
      nome: formulario.nome.value,
      endereco: formulario.endereco.value,
      cidade: formulario.cidade.value,
      pedidos: [...carrinho]
    }

    window.localStorage.setItem('@zaara', JSON.stringify(obj));
  }

  return (
    <main className={styles.main}>

      <h1>Carrinho de Compras</h1>
      {carrinho.map((produto, index) => (
        <div 
          key={produto.id + Math.random() * 100}
        >

          <div
            className={styles.ItemDisplay}
          >
            <img src={produto.image} alt={produto.title} />
            <strong>{produto.title}</strong>
            <span>{new Intl.NumberFormat('pt-BR', {
              currency: 'BRL',
              style: 'currency'
            }).format(produto.price)}</span>
          </div>
          
        </div>
      ))}

      {/* Formulário */}
      <form className={styles.form}>
        <h1>Dados do cliente</h1>
        <input type="text" name="nome" placeholder="Informe seu nome completo" />
        <input type="text" name="endereco" placeholder="Informe seu Endereço completo" />
        <input type="text" name="cidade" placeholder="Informe sua Cidade" />

        <button onClick={handleClick}>Confirmar compra</button>
      </form>
    </main>
  )
}
