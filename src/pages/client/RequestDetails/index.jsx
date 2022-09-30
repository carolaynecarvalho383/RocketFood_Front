import { Container, StatusContainer , TaBRequestItem} from "./styles";
import { useState, useEffect } from "react";
import { api } from "../../../services/api";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Section } from "../../../components/Section";
import { TabCard } from "../../../components/TabCard";
import { PaymentCard } from "../../../components/PaymentCard";

import { ConvertNumberStringForMoney } from "../../../utils/ConvertNumberStringForMoney"
import { useParams } from "react-router-dom";

export function RequestDetails() {
  const [purchases, setPurchases] = useState({})

  const params = useParams()

  useEffect(() => {
    async function fetchRequestDetails() {
      const response = await api.get(`/requests/${params.id}`)
      setPurchases(response.data)
    } fetchRequestDetails()
  }, [])

  return (
    <Container>
      <Header />
      <main>
        <Section title={purchases.length > 1 ? "Meus pedidos" : "Meu pedido"}>
          <ul>
            {purchases.requestsItem &&
              purchases.requestsItem.map(purchase => (
                <li key={String(purchase.id)}>
                  <TaBRequestItem>
                    <img src={`${api.defaults.baseURL}/files/${purchase.image}`} alt="" />
                    <div>
                      <p>{purchase.request_amount}x {purchase.title} <small>{ConvertNumberStringForMoney(purchase.request_price)}</small></p>
                    </div>
                  </TaBRequestItem>
                </li>
              ))
            }
            <li>
              <span>Total:{ConvertNumberStringForMoney(purchases.totalPrice)}</span>
            </li>
          </ul>
        </Section >
        <Section title="status">
          <StatusContainer>
            <div>{purchases.status}</div>
            <div></div>
          </StatusContainer>
        </Section>
      </main>

      <Footer />
    </Container>
  )
}