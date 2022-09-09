import { useState } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";
import { api } from "../services/api";

export const ProductContext = createContext([])


function ProductProvider({ children }) {

  const [products, setProducts] = useState([])
  const [dessertCategory, setDessertCategory] = useState([]) // sobremesas

 



  async function loadProducts() {
    try {
      const response = await api.get("/loadProduct");
      const { allProducts } = response.data
      setProducts(allProducts)
      
      console.log(allProducts);

      

    } catch (error) {
      console.log(error);
    }
  }



  return (
    <ProductContext.Provider value={
      {
        loadProducts,
        products: products,
        desserts:dessertCategory

      }}>
        
      {children}
    </ProductContext.Provider>
  )
}

function useProduct() {
  const context = useContext(ProductContext)

  return context
}

export {
  ProductProvider,
  useProduct,

}