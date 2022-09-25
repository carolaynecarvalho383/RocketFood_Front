import { Button } from "../Button";
import { Input } from "../Input";
import { Container, ButtonPayment } from "./styles";

import { TbReceipt2 } from "react-icons/tb"
import { useState } from "react";

export function PaymentCard({  }) {
  const [pix, setPix] = useState(false)

  return (
    <Container>
      <div>
        <ButtonPayment active= {pix}
          onClick={() => setPix(true)}>Pix</ButtonPayment>

        <ButtonPayment active ={!pix}
          onClick={() => setPix(false)}>Credito</ButtonPayment>

      </div>
      {
        pix ?
          <div>
            aaaa
          </div>
          :
          <div>
            <form >
              <Input name='Número do Cartão'
                placeholder='0000 0000 0000 0000' />
              <div>
                <Input name='Validade'
                  placeholder='04/25' />
                <Input name='CVC'
                  placeholder='000' />
              </div>
              <Button icon={<TbReceipt2 size={25} />} title='Finalizar pagamento' />
            </form>
          </div>
      }
    </Container>
  )
}