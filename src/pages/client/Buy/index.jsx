import { useState, useEffect } from "react";
import { api } from "../../../services/api";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Section } from "../../../components/Section";
import { TabCard } from "../../../components/TabCard";
import { Container } from "./styles";


export function Buy() {
  const [purchases, setPurchases] = useState([])
  const sumAll = purchases.map(item => Number(item.totalPrice)).reduce((prev, curr) => prev + curr, 0);
  const [render ,setRender] = useState('')


  async function handleDeletePurchase(id) {
    await api.delete(`/purchases/${id}`)
    setRender('')
     return
   }

  useEffect(() => {
    async function fetchPurchases() {
      const response = await api.get('/purchases');
      setPurchases(response.data)
    }
    fetchPurchases()
   
  }, [render])

  return (
    <Container>
      <Header />
      <main>
        <Section title="Meu pedido">
          <ul>
            {purchases &&
              purchases.map(purchase => (
                <li key={String(purchase.id)}>
                  <TabCard data={purchase}
                     onClick={() => handleDeletePurchase(purchase.id)}
                   />
                </li>
              ))
            }
            <li>
              <span>Total: R${sumAll}</span>
            </li>
          </ul>
        </Section >

        <Section title="Pagamento">


        </Section>
      </main>

      <Footer />
    </Container>
  )
}