
import arugula from "../../assets/ingredients/arugula.svg";
import bread_nan from "../../assets/ingredients/bread_nan.svg";
import bread from "../../assets/ingredients/bread.svg";
import cucumber from "../../assets/ingredients/cucumber.svg";
import ham from "../../assets/ingredients/ham.svg";
import lettuce from "../../assets/ingredients/lettuce.svg";
import pasta from "../../assets/ingredients/pasta.svg";
import radish from "../../assets/ingredients/radish.svg";
import shrimp from "../../assets/ingredients/shrimp.svg";
import tomato from "../../assets/ingredients/tomato.svg";
import plum from "../../assets/ingredients/plum.svg";
import flour from "../../assets/ingredients/flour.svg";
import peach from "../../assets/ingredients/peach.svg";
import almonds from "../../assets/ingredients/almonds.svg";
import eggWhite from "../../assets/ingredients/eggWhite.svg";
import apricot from "../../assets/ingredients/apricot.svg";
import coffee from "../../assets/ingredients/coffee.svg";
import passionFruit from "../../assets/ingredients/passionFruit.svg";
import cinnamon from "../../assets/ingredients/cinnamon.svg";
import anise from "../../assets/ingredients/anise.svg";
import lemon from "../../assets/ingredients/lemon.svg";
import apple from "../../assets/ingredients/apple.svg";
import whiskey from "../../assets/ingredients/whiskey.svg";

import { Container } from "./styles";
import { useEffect } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import { useState } from "react";

export function IngredientsContainer() {
  const [data, setData] = useState('')
  const params = useParams()


  useEffect(() => {
    async function fetchIngredients() {
      const response = await api.get(`/ingredients/${params.id}/`)
      setData(response.data)
    }fetchIngredients()
  },[])
  return (
    <Container>
     { data &&
     data.map(ingredient => (
      <div>
        <img src={eggWhite} alt="" />
        <span>{ingredient.ingredientName}</span>
      </div>
     ))}
    
    </Container>
  )



}