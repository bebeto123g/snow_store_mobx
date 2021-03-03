import React, { useCallback } from 'react'
import { observer } from 'mobx-react'

import { Button, Form, Modal } from 'react-bootstrap'

import AuthFormRegister from '../../AuthForm/AuthFormRegister'
import ButtonShowModal from '../../../UX/Modal/ButtonShowModal'
import ModalHeader from '../ModalHeader'
import { createFormObject } from '../../../services/createFormObject'
import Auth from '../../../mobx/Auth'

const ModalRegister = observer(() => {

    const handler = useCallback(
      (e) => {
        e.preventDefault()
        const form = createFormObject(e)
        Auth.register(form)
      },
      []
    )

    return (
      <>
        <ModalHeader>Регистрация</ModalHeader>
        <Form onSubmit={handler}>
          <Modal.Body>
            <AuthFormRegister />
          </Modal.Body>
          <Modal.Footer>
            <ButtonShowModal type={'login'} variant={'link'}>
              Авторизация
            </ButtonShowModal>
            <Button type='submit'>Регистрация</Button>
          </Modal.Footer>
        </Form>
      </>
    )
  }
)

export default ModalRegister
