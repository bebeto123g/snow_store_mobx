import React, { useCallback } from 'react'
import { observer } from 'mobx-react'

import { Button, Form, Modal } from 'react-bootstrap'

import ButtonShowModal from '../../../UX/Modal/ButtonShowModal'
import ModalHeader from '../ModalHeader'
import AuthFormLogin from '../../AuthForm/AuthFormLogin'
import { createFormObject } from '../../../services/createFormObject'
import Auth from '../../../mobx/Auth'

const ModalLogin = observer(() => {

    const handler = useCallback(
      (e) => {
        e.preventDefault()
        const form = createFormObject(e)
        Auth.login(form)
      },
      []
    )

    return (
      <>
        <ModalHeader>Авторизация</ModalHeader>
        <Form onSubmit={handler}>
          <Modal.Body>
            <AuthFormLogin />
          </Modal.Body>
          <Modal.Footer>
            <ButtonShowModal type={'register'} variant={'link'}>
              Регистрация
            </ButtonShowModal>
            <Button type='submit'>Авторизация</Button>
          </Modal.Footer>
        </Form>
      </>
    )
  }
)

export default ModalLogin
