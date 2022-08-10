import { Link } from "react-router-dom";


import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";

export function SignUp() {

  return (
    <Container>
      <Logo title="Food Explorer" />
      <Section title=" Faça Login">

        <Form >
          <Input name="nome"
            placeholder="exemplo@exemplo.com" />

          <Input name="email"
            placeholder="exemplo@exemplo.com" />

          <Input name="senha"
            type="password"
            placeholder="No mínimo 6 caracteres" />

          <Button title="Registrar" />
          <Link to = "/">Já tenho uma conta</Link>
        </Form>
      </Section>

    </Container>
  )
}