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
const [search, setSearch] = useState('')


  useEffect(()=>{
    async function fetchProducts(){
      const response = await api.get(`/loadProduct`)
      setData(response.data.allProducts)
      
    } fetchProducts()
    
  },[])

  useEffect(()=>{
    async function fetchSearch(){
      const response = await api.get(`/products?title=${search}&ingredients${search}`)
      console.log(response.data);
      setData(response.data)

    }
     fetchSearch()
    
  },[search])

  return (
    <Container>
      <Header onChange={e=> setSearch(e.target.value)}
      />
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