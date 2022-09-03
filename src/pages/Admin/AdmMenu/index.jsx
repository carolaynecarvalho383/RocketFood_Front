import { useState } from "react"
import { Button } from "../../../components/Button"
import { Footer } from "../../../components/Footer"
import { Header } from "../../../components/Header"
import { Input } from "../../../components/Input"
import { Section } from "../../../components/Section"
import { IngredientItem } from "../../../components/IngredientItem"
import { Container, ImageProduct, Form } from "./styles"

import { AiOutlineUpload } from "react-icons/ai"

export function AdmMenu() {

  const [name, setName] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient('')
  }
  function handleDeleteIngredient(ingredientDeleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== ingredientDeleted))
  }


  return (
    <Container>
      <Header />
      <Section>
        <Form >
          <div>
            <ImageProduct>
              <span>Imagem do parto</span>
              <label htmlFor="addImg">
                <AiOutlineUpload size={25} />
                Selecione uma Imagem
                <input type="file" id="addImg" className="sr-only" />
              </label>
            </ImageProduct>
            <Input name="Nome" placeholder=" Ex: Sorvete" />
          </div>

          <div>
            <div className="ingredients">
              {
                ingredients.map((ingredient, index) => (
                  <IngredientItem
                    key={index}
                    value={ingredient}
                    onClick={() => handleDeleteIngredient(ingredient)} />
                ))

              }
              <IngredientItem isNew
                placeholder="Adicionar"
                onChange={e => setNewIngredient(e.target.value)}
                value={newIngredient}
                onClick={handleAddIngredient} />

            </div>
            <Input name="Preço" placeholder="R$ 00,00" />
          </div>
          <textarea>

          </textarea>
          <Button title="Adicionar Produto" />

        </Form>
      </Section>

      <Footer />
    </Container>
  )
}