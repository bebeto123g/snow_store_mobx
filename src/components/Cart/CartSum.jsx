import React from 'react'
import { observer } from 'mobx-react'
import Cart from '../../mobx/Cart'

const CartSum = observer(() => {
  return <>{Cart.sum}</>
})

export default CartSum
