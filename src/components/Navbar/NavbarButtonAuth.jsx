import React from 'react'
import { observer } from 'mobx-react'

import ButtonShowModal from '../../UX/Modal/ButtonShowModal'
import isLogin from '../../mobx/isLogin'

const NavbarButtonAuth = observer(() => {
    return (
      <>
        {isLogin.isLogin ? (
          <ButtonShowModal type={'logout'} variant={'danger'}>Выйти</ButtonShowModal>
        ) : (
          <ButtonShowModal type={'login'} variant={'info'}>Войти</ButtonShowModal>
        )}
      </>
    )
  }
)

export default NavbarButtonAuth
