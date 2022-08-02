import { Container } from "./styles";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";

export function SignIn() {


  return (
    <Container>
      <Logo title=" Food " />
      <section>
        <h2>Faça Login</h2>
      <form >
        <Input name="email"
          placeholder=" exemplo@exemplo.com" />
      </form>
      </section>
    
    </Container>
  )
}