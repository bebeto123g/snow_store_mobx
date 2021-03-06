import React, { useCallback } from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'

import { Button } from 'react-bootstrap'
import Cart from '../../mobx/Cart'

const ButtonSendOrder = observer(({ children, variant = 'success', callback }) => {

    const handler = useCallback(async () => {
      await Cart.sendOrder()
      if (callback) {
        callback()
      }
    }, [callback])

    return (
      <Button variant={variant} onClick={handler}>
        {children}
      </Button>
    )
  }
)

ButtonSendOrder.propTypes = {
  variant: PropTypes.string,
  callback: PropTypes.func
}

export default ButtonSendOrder
