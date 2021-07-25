import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({});

export const CartProvider = ({children}) => {

  const [carrinho, setCarrinho] = useState([]);
  
  const [totalProdutos, setTotalProdutos] = useState(0);


  useEffect(() => {
    function updateTotal() {
      let total = 0;
      for(let i = 0; i < carrinho.length; i++){
        total += carrinho[i].price
      }

      setTotalProdutos(total);
    }
    updateTotal();
  }, [carrinho]);

  
  // const removeProdutoCarrinho = useCallback((position) => {
    
  //   carrinho.splice(position, 1);

  //   let total = 0;
  //   for(let i = 0; i < carrinho.length; i++){
  //     console.log('entrou')
  //     total += carrinho[i].price
  //   }
  //   setTotalProdutos(total);

  // }, []);

  return (
    <CartContext.Provider value={{
      carrinho,
      setCarrinho,

      totalProdutos,
      // removeProdutoCarrinho
      
    }}>

      {children}
    </CartContext.Provider>
  )
}
