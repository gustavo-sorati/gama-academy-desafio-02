import { useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../hooks/useCart';
import { AiFillCloseCircle } from 'react-icons/ai'

// styles
import styles from './carrinhoCompras.module.scss';

export const Cart = () => {
  const { carrinho, setCarrinho, totalProdutos } = useContext(CartContext);

  const handleRemoveItem = useCallback((event) => {
    event.preventDefault();
    const button = event.target.parentNode.parentNode;
    const position = Number(button.value);
    setCarrinho( oldState => oldState.filter((produto, index) => position !== index));
  }, [setCarrinho]);

  return (
    <div className={styles.cartItens}>
      
      {carrinho.map((produto, index) => (
      
        <div 
          key={produto.id * Math.random() * 100}
          className={styles.itens}  
        >
          <img src={produto.image} alt={produto.title} />
          <strong>{produto.title}</strong>
          <span>{produto.price}</span>

          <button 
            className={styles.excluir}
            onClick={handleRemoveItem}
            value={index} 
          >
            <AiFillCloseCircle size={32}/>
          </button>
        </div>
      ))}

      <div className={styles.amount}>
        <strong>Total:</strong>
        <span>{totalProdutos}</span>
      </div>

      <div className={styles.checkout}>
        <Link to="/checkout">Comprar</Link>
      </div>


    </div>
  )
}
