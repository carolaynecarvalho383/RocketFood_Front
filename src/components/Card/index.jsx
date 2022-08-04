import { Container } from "./styles";
import { AiOutlineHeart, AiOutlinePlus, AiOutlineLine } from "react-icons/ai";
import { Button } from "../Button";


export function Card() {



  return (
    <Container>
      <AiOutlineHeart className="favorite" />
      <img src="" alt="product image" />
      <h3>Product title</h3>
      <p>description product</p>
      <strong>R$ 60,00</strong>
      <div className="purchases">
        < AiOutlinePlus size={25}
          className="plus" />
        01
        <AiOutlineLine size={25}
          className="less" />
        <Button title=" Incluir" />
      </div>
    </Container>
  )
}