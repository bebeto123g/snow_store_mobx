import React, { useCallback } from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'

import { Button } from 'react-bootstrap'
import Cart from '../../mobx/Cart'

const ButtonAddToCart = observer(({ id, callback, children, variant = 'success' }) => {

    const handler = useCallback(() => {
      Cart.add(id)
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
ButtonAddToCart.propTypes = {
  id: PropTypes.string.isRequired,
  variant: PropTypes.string,
  callback: PropTypes.func
}

export default ButtonAddToCart
