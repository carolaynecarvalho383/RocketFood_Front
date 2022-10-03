import { Footer } from "../../../components/Footer"
import { Header } from "../../../components/Header"
import { Section } from "../../../components/Section"
import { Card } from "../../../components/Card"
import { Carousel } from "../../../components/Carousel"
import { api } from "../../../services/api"

import { Container, Main } from "./styles"
import { useState, useEffect } from "react"

import { useProduct } from "../../../hooks/Product"

export function Adm() {
  // const {
  //   desserts, mains,
  //   drinks, others,products,

  //   loadDessertsCategory,
  //   loadMainCategory,
  //   loadDrinksCategory,
  //   loadOutersCategory,
  //   loadProducts, 
  // } = useProduct({})

  const [products, setProducts] = useState([]) // sobremesas
  const [search , setSearch] = useState('') 
  
  useEffect(() => {
    // loadProducts()
    // loadDrinksCategory()
    // loadDessertsCategory()
    // loadMainCategory()
    // loadOutersCategory()

    async function loadProducts() {
      try {
        const response = await api.get("/loadProduct");
        const { allProducts } = response.data
        setProducts(allProducts)
      } catch (error) {
        console.log(error);
      }
    }loadProducts()
  }, [])

  useEffect(()=>{
    async function fetchSearch(){
      const response = await api.get(`/products?title=${search}&ingredients=${search}`)
      setProducts(response.data)
    }
     fetchSearch()
    
  },[search])

  return (
    <Container>
      <Header onChange={e=> setSearch(e.target.value)}/>
      <Main>
        <h1>Sou ADM</h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
      </Main>
      <Section title="Pratos Principais">
        <Carousel data={products} />
      </Section>
      <Section title="Sobremesas">
        <Carousel data={products} />
      </Section>
      <Section title="Bebidas">
        <Carousel data={products} />
      </Section>
      <Section title="Outros">
        <Carousel data={products} />
      </Section>

      <Footer />
    </Container>
  )
}