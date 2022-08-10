
import { Link } from "react-router-dom"

import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";

export function SignIn() {

  return (
    <Container>
      <Logo title="Food Explorer" className ="main-logo"/>
      <Section title=" Faça Login">

        <Form >
          <Input name="email"
            placeholder="exemplo@exemplo.com" />

          <Input name="senha"
            type="password"
            placeholder="No mínimo 6 caracteres" />

          <Button title=" Entrar" />
          <Link to= "/register">Criar Conta</Link>
        </Form>
      </Section>

    </Container>
  )
}