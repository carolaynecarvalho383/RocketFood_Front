import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import { Button } from "../Button";
import { AiOutlineHeart, AiOutlinePlus, AiOutlineLine } from "react-icons/ai";

import {ConvertNumberStringForMoney} from '../../utils/ConvertNumberStringForMoney'

import { Container, Purchases } from "./styles";

export function CardPreview({ data, ...rest}) {

  const [amount, setAmount] = useState(1)
  const { admin } = useAuth()

  function handlePlus() {
    setAmount(amount + 1)
  }
  function handleLess() {
    setAmount(amount - 1)
    counter <= 1 ? setAmount(1) : setAmount(counter - 1)
  }


  return (
    <Container>
      {!admin ?
        <AiOutlineHeart className="favorite" size={25} />
        : <span>id:{data.id}</span>
      }      <img src={data.image} alt="product image" />
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <strong>{ConvertNumberStringForMoney(data.price)}</strong>
      {!admin ? <div className="ingredient-container">
        <div className="ingredient">
          <img src="" alt="" />
          <p>tomate</p>
        </div>
        <div className="ingredient">
          <img src="" alt="" />
          <p>alfa</p>
        </div>
      </div> : <span>categoria : {data.category}</span>
      }

      {!admin ? <Purchases>
        <div>

          < AiOutlinePlus size={25}
            className="plus"
            onClick={handlePlus} />
          {amount}
          <AiOutlineLine size={25}
            onClick={handleLess}
            className="less" />

        </div>
        <Button title=" Incluir" />
      </Purchases> :
        <span>estoque : {data.inventory}</span>
      }
    </Container>
  )
}