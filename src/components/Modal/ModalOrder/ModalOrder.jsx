import React, { useCallback } from 'react'

import { Modal } from 'react-bootstrap'

import ModalState from '../../../mobx/Modal'

import ModalHeader from '../ModalHeader'
import ButtonSendOrder from '../../../UX/Cart/ButtonSendOrder'
import CartSum from '../../../user/components/Cart/CartSum'
import ButtonHideModal from '../../../UX/Modal/ButtonHideModal'
import { observer } from 'mobx-react'

const ModalOrder = observer(() => {

    const handler = useCallback(() => {
      ModalState.hide()
    }, [])

    return (
      <>
        <ModalHeader>Подтверждение заказа</ModalHeader>
        <Modal.Body>
          Отравить заказ на сумму <CartSum /> &#8381;
        </Modal.Body>
        <Modal.Footer>
          <ButtonHideModal variant={'warning'} className={'mr-auto'}>
            Отмена
          </ButtonHideModal>
          <ButtonSendOrder variant={'success'} callback={handler}>
            Заказать
          </ButtonSendOrder>
        </Modal.Footer>
      </>
    )
  }
)

export default ModalOrder
