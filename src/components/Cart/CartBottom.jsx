import React from 'react'
import { observer } from 'mobx-react'

import { Row } from 'react-bootstrap'

import CartSum from './CartSum'
import ButtonShowModal from '../../UX/Modal/ButtonShowModal'
import isLogin from '../../mobx/isLogin'

const CartBottom = observer(() => {
    return (
      <Row className='justify-content-between align-items-center'>
      <span className='ml-3 h3 font-weight-bolder'>
        <CartSum /> &#8381;
      </span>
        {isLogin.isLogin ? (
          <ButtonShowModal type={'order'} variant={'success'}>
            Отправить заказ
          </ButtonShowModal>
        ) : (
          <ButtonShowModal type={'login'} variant={'info'}>
            Войти в систему
          </ButtonShowModal>
        )}
      </Row>
    )
  }
)

export default CartBottom
