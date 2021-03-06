import React, { useCallback } from 'react'
import { observer } from 'mobx-react'

import { Modal } from 'react-bootstrap'

import ModalState from '../../../mobx/Modal'

import ModalHeader from '../ModalHeader'
import ButtonHideModal from '../../../UX/Modal/ButtonHideModal'
import ButtonPutStatusOrder from '../../../UX/Button/ButtonPutStatusOrder'

const ModalStatusOrder = observer(() => {

    const handler = useCallback(() => {
      ModalState.hide()
    }, [])

    return (
      <>
        <ModalHeader>Подтверждение изменения статуса</ModalHeader>
        <Modal.Body>
          Вы уверены, что хотите отменить данный заказ?
        </Modal.Body>
        <Modal.Footer>
          <ButtonHideModal variant={'warning'} className={'mr-auto'}>
            Отмена
          </ButtonHideModal>
          <ButtonPutStatusOrder callback={handler} type={'undo'}>
            Да
          </ButtonPutStatusOrder>
        </Modal.Footer>
      </>
    )
  }
)

export default ModalStatusOrder