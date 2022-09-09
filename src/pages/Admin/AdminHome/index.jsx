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
  const { desserts } = useProduct({})
  const { loadProducts, products } = useProduct([])
  const [dessertCategory, setDessertCategory] = useState([]) // sobremesas

  useEffect(() => {

    async function loadCategory(){
      const response = await api.get(`/loadProduct/category?category=Sobremesas`)
      const {allProducts} = response.data
      setDessertCategory(allProducts)
    }
    loadCategory()
    loadProducts()

  }, [])
  
  return (
    <Container>
      <Header />
      <Main>
        <h1>Sou ADM</h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
      </Main>
      <Section title="Pratos Principais">
        <Carousel data={dessertCategory}/>
      </Section>

      <Footer />
    </Container>
  )
}