import React, { useCallback } from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'

import { Button } from 'react-bootstrap'

import Orders from '../../mobx/Orders'

const ButtonPutStatusOrder = observer(({ children, callback, className }) => {

    const handler = useCallback(async () => {
      await Orders.putStatus(Orders.detailOrder.status === 'Заказ отменен' ? 'resume' : 'undo')
      if (callback) {
        callback()
      }
    }, [callback])

    return (
      <Button
        variant={Orders.detailOrder.status === 'Заказ отменен' ? 'success' : 'danger'}
        onClick={handler}
        className={className}
      >
        {children}
      </Button>
    )
  }
)

ButtonPutStatusOrder.propTypes = {
  callback: PropTypes.func,
  className: PropTypes.string
}

export default ButtonPutStatusOrder
