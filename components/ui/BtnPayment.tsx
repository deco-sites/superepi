import { useSignal } from "@preact/signals";
import Modal from '$store/components/ui/Modal.tsx'
import PaymentSolutions from '$store/components/ui/PaymentSolutions.tsx'

export interface Props {
  cardPayment: number;
  ticketPayment: number;
}

export default function BtnPayment({ cardPayment, ticketPayment }: Props) {
  const open = useSignal(false)
  return (
    <>
      <button class="bg-transparent border-none underline" onClick={() => open.value = true}>Formas de pagamento</button>
      <Modal
        open={open.value}
        onClose={() => open.value = false}
        class="bg-white p-2"
      >
        <PaymentSolutions cardPayment={cardPayment} ticketPayment={ticketPayment} />
      </Modal>
    </>
  )
}
