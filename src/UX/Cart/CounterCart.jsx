import React, { useCallback } from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'

import Counter from '../../UI/Counter'
import Cart from '../../mobx/Cart'

const CounterCart = observer(({ id }) => {

    const decrement = useCallback(() => {
      Cart.decrement(id)
    }, [id])

    const increment = useCallback(() => {
      Cart.increment(id)
    }, [id])

    return (
      <>
        {Cart.cart && (
          <Counter
            counter={Cart.cart[id] || 0}
            decrement={decrement}
            increment={increment}
          />
        )}
      </>
    )
  }
)

CounterCart.propTypes = {
  id: PropTypes.string.isRequired
}

export default CounterCart
