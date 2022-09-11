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
  const {
    desserts, mains,
    drinks, others,
    loadDessertsCategory,
    loadMainCategory,
    loadDrinksCategory,
    loadOutersCategory,
  } = useProduct({})
  const { loadProducts, products } = useProduct([])
  // const [dessertCategory, setDessertCategory] = useState([]) // sobremesas

  useEffect(() => {
    loadDrinksCategory()
    loadDessertsCategory()
    loadMainCategory()
    loadOutersCategory()


  }, [])

  return (
    <Container>
      <Header />
      <Main>
        <h1>Sou ADM</h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
      </Main>
      <Section title="Pratos Principais">
        <Carousel data={mains} />
      </Section>
      <Section title="Sobremesas">
        <Carousel data={desserts} />
      </Section>
      <Section title="Bebidas">
        <Carousel data={drinks} />
      </Section>
      <Section title="Outros">
        <Carousel data={others} />
      </Section>

      <Footer />
    </Container>
  )
}