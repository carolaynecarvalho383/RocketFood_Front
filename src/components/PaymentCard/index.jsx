import { Button } from "../Button";
import { Input } from "../Input";
import { Container, ButtonPayment } from "./styles";

import { TbReceipt2 } from "react-icons/tb"
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function PaymentCard({ requestPrice, allProducts }) {
  const [pix, setPix] = useState(false)
  console.log(requestPrice);

  const [numberCard, setNumberCard] = useState('')
  const [validationCard, setValidationCard] = useState('')
  const [cvc, setCvc] = useState('')

  const navigate = useNavigate()

  async function handleBuyProducts(e) {
    e.preventDefault()
    try {
      await api.post('requests', { totalPrice: requestPrice })
      alert("Compar Realizada Com sucesso!")
      navigate('/')
    } catch (e) {
      alert("Internal Server Error")
    }
    return
  }

  return (
    <Container>
      <div>
        <ButtonPayment active={pix}
          onClick={() => setPix(true)}>Pix</ButtonPayment>

        <ButtonPayment active={!pix}
          onClick={() => setPix(false)}>Credito</ButtonPayment>

      </div>
      {
        pix ?
          <div>

            <Button icon={<TbReceipt2 size={25} />}
              title='Finalizar pagamento'
              onClick={e => handleBuyProducts(e)} />
          </div>
          :
          <div>
            <form >
              <Input name='Número do Cartão'
                placeholder='0000 0000 0000 0000'
                required
                onChange={e => setNumberCard(e.target.value)} />
              <div>
                <Input name='Validade'
                  placeholder='04/25'
                  required
                  onChange={e => setValidationCard(e.target.value)} />
                <Input name='CVC'
                  placeholder='000'
                  required
                  onChange={e => setCvc(e.target.value)} />
              </div>
              <Button icon={<TbReceipt2 size={25} />}
                title='Finalizar pagamento'
                onClick={handleBuyProducts} />
            </form>
          </div>
      }
    </Container>
  )
}