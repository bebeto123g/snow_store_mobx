import React from 'react'
import PropTypes from 'prop-types'

import ButtonShowModal from '../../UX/Modal/ButtonShowModal'

const NavbarButtonAuth = ({ isLogin }) => {
  return (
    <>
      {isLogin.isLogin || isLogin.isManager || isLogin.isAdmin ? (
        <ButtonShowModal type={'logout'} variant={'danger'}>Выйти</ButtonShowModal>
      ) : (
        <ButtonShowModal type={'login'} variant={'info'}>Войти</ButtonShowModal>
      )}
    </>
  )
}

NavbarButtonAuth.propTypes = {
  isLogin: PropTypes.object.isRequired
}

export default NavbarButtonAuth
