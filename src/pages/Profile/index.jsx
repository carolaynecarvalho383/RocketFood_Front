import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";



import { Container , Form} from "./styles";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {

  return (
    <Container>
      <Header />
      <Section>
          <nav>
            <ul>
            <Link to="/purchases"><li>Meus Pedidos</li></Link>
            <Link to="/"><li>Endereço</li></Link>
            <Link to="/"><li>Pagamentos</li></Link>
            </ul>
          </nav>
        <Form>
          <Input />
          <Input value="aaaa" />
          <Input
            placeholder="Senha Atual" />
          <Input placeholder="Nova Senha" />
          <Button title="Salvar"/>
          
        </Form>
      </Section>
      <Footer />
    </Container>
  )
}