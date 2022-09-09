import { useState, useEffect } from "react";
import { Button } from "../../../components/Button";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Input } from "../../../components/Input";
import { Section } from "../../../components/Section";
import { Textarea } from "../../../components/TextArea";
import { IngredientItem } from "../../../components/IngredientItem";
import { Container, ImageProduct, Form, ProductPreview, } from "./styles";

import { useNavigate, useParams } from 'react-router-dom';
import { api } from "../../../services/api";

import { AiOutlineUpload } from "react-icons/ai";
import { CardPreview } from "../../../components/CardPreview";



export function Edit() {
  const [data, setData] = useState({})

  const [title, setTitle] = useState(data.title)
  const [price, setPrice] = useState(data.price)
  const [description, setDescription] = useState(data.description)

  const [inventory, setInventory] = useState('')
  const [category, setCategory] = useState('')


  const [imageFile, setImageFile] = useState(null)
  console.log(imageFile);


  const [image, setImage] = useState()


  const [newIngredient, setNewIngredient] = useState('')

  const navigate = useNavigate()
  const params = useParams()


  function handleChangeImage(event) {
    const file = event.target.files[0];
    setImageFile(file);

    const imagePreview = URL.createObjectURL(file)
    setImage(imagePreview);
  }

  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/products/${params.id}`);
      setData(response.data);
      setTitle(response.data.title);
      setPrice(response.data.price);
      setDescription(response.data.description);
      setInventory(response.data.inventory);
      setCategory(response.data.category);

       const imageUrl =  `${api.defaults.baseURL}/files/${response.data.image}`
      setImage(imageUrl)

    }
    fetchProduct()

  }, [])

  return (
    <Container>
      <Header />
      <Section>
        <Form >
          <ProductPreview>

            <span>id:{data.id}</span>
            <img src={image} alt="product image" />
            <h3>{title}</h3>
            <p>{description}</p>
            <strong>R${price}</strong>
            <span>categoria : {category}</span>

            <span>estoque : {inventory}</span>

          </ProductPreview>
          <div>
            <ImageProduct>
              <span>Imagem do parto</span>
              <label htmlFor="addImg">
                <AiOutlineUpload size={25} />
                Selecione uma Imagem
                <input onChange={handleChangeImage}
                  type="file" id="addImg" className="sr-only" />
              </label>
            </ImageProduct>

            <Input onChange={e => setTitle(e.target.value)}
              name="Nome" placeholder=" Ex: Sorvete" value={title} />
          </div>


          <div>

            <Input onChange={e => setPrice(e.target.value)}
              name="Preço" type="number"
              placeholder="R$ 00,00"
              value={price} />

            <Input value={category} name="Category"
              placeholder="Selecione uam categoria" className="hide"
              outer={
                <select name="category" onChange={e => setCategory(e.target.value)}>
                  <option value="Pratos Principais">Pratos Principais</option>
                  <option value="Sobremesas">Sobremesas</option>
                  <option value="Bebidas">Bebidas</option>
                  <option value="Outros">Outros</option>
                </select>} />

            <Input onChange={e => setInventory(e.target.value)}
              name="Estoque" type="number"
              placeholder="quantia em estoque"
              value={inventory} />
          </div>
          <Textarea onChange={e => setDescription(e.target.value)}
            name="Descrição"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            value={description} />

          <Button
            title="Atualizar Produto" />

        </Form>
      </Section>

      <Footer />
    </Container>
  )
}