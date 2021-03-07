import React from 'react'
import PropTypes from 'prop-types'

import ButtonShowModal from '../Modal/ButtonShowModal'

const ButtonNavbarAuth = ({ isLogin }) => {
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

ButtonNavbarAuth.propTypes = {
  isLogin: PropTypes.object.isRequired
}

export default ButtonNavbarAuth
