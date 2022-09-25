import { Footer } from "../../../components/Footer"
import { Header } from "../../../components/Header"
import { Section } from "../../../components/Section"
import { Card } from "../../../components/Card"
import { Carousel } from "../../../components/Carousel"


import { Container, Main } from "./styles"
import { useEffect, useState } from "react"
import { api } from "../../../services/api"


export function Home() {
const [data, setData] = useState('')

  useEffect(()=>{
    async function fetchProducts(){
      const response = await api.get(`/loadProduct`)
      setData(response.data.allProducts)
      
    } fetchProducts()
    
  },[])
  
  return (
    <Container>
      <Header />
      <Main>
        <h1>Sabores inigualáveis</h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
      </Main>

      <Section title="Pratos Principais">    
      <Carousel data={data} />    
      </Section>
      <Footer />
    </Container>
  )
}