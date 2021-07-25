
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import {AiOutlineShoppingCart as AiCart} from 'react-icons/ai';

import { Cart } from '../CarrinhoCompras/CarrinhoCompras';

// styles
import styles from './header.module.scss';
import { CartContext } from '../../hooks/useCart';

export const Header = () => {
  const [showCarrinho, setShowCarrinho] = useState(false);
  const {carrinho} = useContext(CartContext);

  // function handleClick(event){
  //   setShowCarrinho(!showCarrinho);

  //   document.addEventListener("mousedown", (event) => {
  //     if(!carrinhoRef.current.contains(event.target)){
  //       setShowCarrinho(false);
  //     }
  //   })
  // }

  return (
    <header className={styles.header}>

      <strong>New World</strong>

      <nav className={styles.menu} >

        <Link to="/login">
          Olá, Faça seu login
        </Link>

        <div className={styles.devolutions}>
          <Link to="/login">
            Devoluções <br />
            e <strong>Pedidos</strong>
          </Link>
        </div>

        <div className={styles.cart}>
          <AiCart
            size={36}
            onClick={() => setShowCarrinho(!showCarrinho)}
          />

          <span onClick={() => setShowCarrinho(!showCarrinho)}>
            {carrinho.length}
          </span>
          
          {showCarrinho && <Cart />}
        </div>
      </nav>

    </header>
  )
}
