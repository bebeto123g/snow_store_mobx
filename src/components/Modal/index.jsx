import React, { useCallback } from 'react'
import { observer } from 'mobx-react'

import ModalState from '../../mobx/Modal'

import { Modal } from 'react-bootstrap'

import { ModalTypes } from './modalTypes'

const ModalApp = observer(() => {

    const hideModalCallback = useCallback(() => {
      ModalState.hide()
    }, [])

    return (
      <Modal
        show={ModalState.isShow}
        onHide={hideModalCallback}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        {ModalTypes.map(({ typeModal, Component }) => {
          if (typeModal === ModalState.type) {
            return <Component key={typeModal} />
          }
        })}
      </Modal>
    )
  }
)

export default ModalApp
