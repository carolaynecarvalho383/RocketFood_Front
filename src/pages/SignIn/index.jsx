import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

export function SignIn() {

  return (
    <Container>
      <Logo title=" Explorer Food " />
      <Section title=" Faça Login">

        <Form >
          <Input name="email"
            placeholder="exemplo@exemplo.com" />

          <Input name="senha"
            type="password"
            placeholder="No mínimo 6 caracteres" />

          <Button title=" Entrar" />
          <a href="#">Criar Conta</a>
        </Form>
      </Section>

    </Container>
  )
}