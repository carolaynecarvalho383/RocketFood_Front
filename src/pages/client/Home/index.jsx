import { Footer } from "../../../components/Footer"
import { Header } from "../../../components/Header"
import { Section } from "../../../components/Section"
import { Card } from "../../../components/Card"
import { Carousel } from "../../../components/Carousel"


import { Container, Main } from "./styles"


export function Home() {

  return (
    <Container>
      <Header />
      <Main>
        <h1>Sabores inigualáveis</h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
      </Main>

      <Section title="Pratos Principais">        
      </Section>
      <Footer />
    </Container>
  )
}