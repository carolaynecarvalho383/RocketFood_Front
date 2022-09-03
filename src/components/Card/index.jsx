import { Container, Purchases } from "./styles";
import { AiOutlineHeart, AiOutlinePlus, AiOutlineLine, AiFillHeart } from "react-icons/ai";
import { Button } from "../Button";
import { useState } from "react";

export function Card({ src, title, description, price }) {

  const [counter, setCounter] = useState(1)
  const [favorite, setFavorite] = useState(false)

  function handlePlus() {
    setCounter(counter + 1)
  }
  function handleLess() {
    setCounter(counter - 1)
    counter <= 1 ? setCounter(1) : setCounter(counter - 1)
  }

  function handleAddFavorite() {
    setFavorite(true)
  }
  function handleRemoveFavorite() {
    setFavorite(false)
  }
  return (
    <Container>
      {
        favorite ? <AiFillHeart
          className="favorite" size={25}
          color ={"#92000E"}
          onClick={handleRemoveFavorite}

          
        /> : <AiOutlineHeart
          className="favorite" size={25}
          onClick={handleAddFavorite}
        />
      }
      <img src="" alt="product image" />
      <h3>Product title</h3>
      <p>description product</p>
      <strong>R$ 60,00</strong>
      <Purchases>
        < AiOutlinePlus size={25}
          onClick={handlePlus}
          className="plus" />
        {counter}
        <AiOutlineLine size={25}
          className="less"
          onClick={handleLess}

        />
        <Button title=" Incluir" />
      </Purchases>
    </Container>
  )
}