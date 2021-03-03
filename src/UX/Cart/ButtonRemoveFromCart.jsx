import React, { useCallback } from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'

import { Button } from 'react-bootstrap'
import Cart from '../../mobx/Cart'


const ButtonRemoveFromCart = observer(({ id, callback, children, variant = 'danger' }) => {

    const handler = useCallback(() => {
      Cart.remove(id)
      if (callback) {
        callback()
      }
    }, [id, callback])

    return (
      <Button variant={variant} onClick={handler}>
        {children}
      </Button>
    )
  }
)

ButtonRemoveFromCart.propTypes = {
  id: PropTypes.string.isRequired,
  variant: PropTypes.string,
  callback: PropTypes.func
}

export default ButtonRemoveFromCart
