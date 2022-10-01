import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import { Button } from "../Button";
import { IngredientsContainer } from "../IngredientsContainer";
import { Section } from "../Section";
import { AiOutlineHeart, AiOutlinePlus, AiOutlineLine } from "react-icons/ai";

import { ConvertNumberStringForMoney } from '../../utils/ConvertNumberStringForMoney'

import { Container, Purchases, DetailsContainer } from "./styles";

export function CardPreview({ data, ...rest }) {

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
        <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="product image" />
        <DetailsContainer>
          <div>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </div>
          <IngredientsContainer />
          <div>
            <strong>{ConvertNumberStringForMoney(data.price)}</strong>

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
            </Purchases>
              :
              <Purchases>
                <span>id:{data.id}</span>
                <span>categoria : {data.category}</span>
                <span>estoque : {data.inventory}</span>
              </Purchases>}
          </div>
        </DetailsContainer>
    </Container>
  )
}