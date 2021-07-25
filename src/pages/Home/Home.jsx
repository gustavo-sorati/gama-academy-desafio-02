import React, { useContext } from 'react';
import {AiOutlineShoppingCart as AiCart} from 'react-icons/ai';

import {ProductsContext} from '../../hooks/useProducts';
import { CartContext } from '../../hooks/useCart';

// styles
import styles from './home.module.scss';

export const Home = () => {

  const {products, buscaProduto} = useContext(ProductsContext);
  const { setCarrinho } = useContext(CartContext);

  function addToCart(event) {
    const id = Number(event.target.value);

    const produto = buscaProduto(id);
    setCarrinho(x => [...x, produto])
  }

  return (
    <main className={styles.main}>
     
     {/* <Link to="/checkout">Ir</Link> */}

      <section className={styles.productsDisplay}>
        {products ? products.map(product => (

          <div className={styles.productsItem} key={product.id}>
            
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(product.price)}</span>

            <button
              type="button"
              value={product.id}
              className={styles.btnAddToCart}
              onClick={addToCart}
            >
              Adicionar ao carrinho
              <AiCart size={18} />
            </button>
          </div>
        )) : ''}
      </section>
    </main>
  );
}
