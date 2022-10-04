import { Footer } from "../../../components/Footer"
import { Header } from "../../../components/Header"
import { Section } from "../../../components/Section"
import { Card } from "../../../components/Card"
import { Carousel } from "../../../components/Carousel"
import { api } from "../../../services/api"

import banner from "../../../assets/banner.svg";

import { Container, Main } from "./styles"
import { useState, useEffect } from "react"

import { useProduct } from "../../../hooks/Product"

export function Adm() {
  const [products, setProducts] = useState([]) 
  const [search , setSearch] = useState('') 

  const drinks = products.filter(products => products.category == "bebidas")
  const desserts = products.filter(products => products.category == "sobremesas")
  const mainDishes = products.filter(products => products.category == "pratosPrincipais")
  const other = products.filter(products => products.category == "outros")

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get(`/loadProduct`)
      setProducts(response.data)
    } fetchProducts()

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
      <div>
          <img src={banner} alt="aaaaanp" />
        </div>
        <div>
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
      </Main>
      <Section title="Pratos Principais">
        <Carousel data={mainDishes} />
      </Section>

      <Section title="Sobremesas">
        <Carousel data={desserts} />
      </Section>

      <Section title="Bebidas">
        <Carousel data={drinks} />
      </Section>

      <Section title="Outros">
        <Carousel data={other} />
      </Section>

      <Footer />
    </Container>
  )
}