import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Card } from "../../components/Card"


import { Container } from "./styles"


export function Home() {

  return (
    <Container>
      <Header />
      <main>
        <h1>Sabores inigualáveis</h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
      </main>
      <Section title="Pratos Principais">
        < Card />
      </Section>
      <Footer />
    </Container>
  )
}