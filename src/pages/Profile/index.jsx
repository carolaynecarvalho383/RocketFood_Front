import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";



import { Container, Form, Avatar } from "./styles";
import { Link } from "react-router-dom";

import { AiOutlineCamera} from "react-icons/ai"

export function Profile() {

  return (
    <Container>
      <Header />
      <Section>
        <Avatar>
          <img src="https:\\github.com\luiszkm.png"
            alt="foto do usuário" />

          <label htmlFor="avatar">
            <AiOutlineCamera />

            <input
              type="file"
              id="avatar"
              className="sr-only"
             />
          </label>
        </Avatar>
        <nav>
          <ul>
            <Link to="/purchases"><li>Pedidos</li></Link>
            <Link to="/address"><li>Endereço</li></Link>
            <Link to="/"><li>Pagamentos</li></Link>
          </ul>
        </nav>
        <Form>
          <Input />
          <Input value="aaaa" />
          <Input
            placeholder="Senha Atual" />
          <Input placeholder="Nova Senha" />
          <Button title="Salvar" />

        </Form>
      </Section>
      <Footer />
    </Container>
  )
}