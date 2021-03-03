import React, { useCallback } from 'react'

import { Modal } from 'react-bootstrap'

import ModalState from '../../../mobx/Modal'

import ModalHeader from '../ModalHeader'
import ButtonOrderCart from '../../../UX/Cart/ButtonOrderCart'
import CartSum from '../../Cart/CartSum'
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
          <ButtonOrderCart variant={'success'} callback={handler}>
            Заказать
          </ButtonOrderCart>
        </Modal.Footer>
      </>
    )
  }
)

export default ModalOrder
