import { createContext, useEffect, useState } from "react";
import { API_URL } from "../services/api";


export const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Realiza o fetch inicial para carregar todos os produtos da loja
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(API_URL);
        if(!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        
        
        console.log(json)
        setProducts(json);
      } catch (err){
        setError(err)
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  //
  function buscaProduto(id) {
    const filteredProduct = products.filter((product) => {
      return product.id === id;
    })
    return filteredProduct[0];
  }
    


  return (
    <ProductsContext.Provider value={
      {
        products,
        loading,
        error,

        buscaProduto
      }
    }>
      {children}
    </ProductsContext.Provider>
  )
}
