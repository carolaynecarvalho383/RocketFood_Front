import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";

import { Container, Gallery } from "./styles";


export function Favorites() {

  return (
    <Container>
      <Header />
      <Section>
        <Gallery>
          <Card />
          <Card />
          <Card />
          <Card />
        </Gallery>
      </Section>
      <Footer />
    </Container>
  )
}