import { Container } from "./styles";

export function Input({ name, placeholder }) {

  return (
    <Container>
      <label htmlFor={name}>{name}</label>
      <input type="text"
        placeholder={placeholder}
        id={name} />
    </Container>
  )

}