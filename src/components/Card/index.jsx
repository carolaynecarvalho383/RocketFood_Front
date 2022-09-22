import { Container, Purchases } from "./styles";
import { AiOutlineHeart, AiOutlinePlus, AiOutlineLine, AiFillHeart, AiOutlineEdit } from "react-icons/ai";
import { Button } from "../Button";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
export function Card({data, ...rest}) {
  const [counter, setCounter] = useState(1)
  const [favorite, setFavorite] = useState(false)

  const { admin } = useAuth()

  const navigate = useNavigate()

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

  
  function handleEditProduct(id){
    navigate(`/edit/${id}`)

  }
 

    
 

  return (
    <Container {...rest}>
      {
        admin ? 
          <AiOutlineEdit
            size={25}
            onClick={()=>{handleEditProduct(data.id)}}
          />
        :
          favorite ?
            <AiFillHeart
              size={25}
              color={"#92000E"}
              onClick={handleRemoveFavorite}


            /> : <AiOutlineHeart
              size={25}
              onClick={handleAddFavorite}
            />
      }
      <img src={
        `${api.defaults.baseURL}/files/${data.image}`
      } alt="product image" />
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <strong>R${data.price}</strong>
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