import React from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'

import { TrTableCart } from '../../../styledComponents/TrTableCart'
import CounterCart from '../../../UX/Cart/CounterCart'
import ButtonRemoveFromCart from '../../../UX/Cart/ButtonRemoveFromCart'
import CatalogMap from '../../../mobx/CatalogMap'
import Catalog from '../../../mobx/Catalog'

const CartTableCell = observer(({ id }) => {
    const index = CatalogMap.catalogMap[id]
    const { brand, price, name } = Catalog.catalog[index]

    return (
      <TrTableCart>
        <td>
          {brand} - {name}
        </td>
        <td>
          <CounterCart id={id} />
        </td>
        <td>{price} &#8381;</td>

        <td>
          <ButtonRemoveFromCart id={id}>
            &#10008;
          </ButtonRemoveFromCart>
        </td>
      </TrTableCart>
    )
  }
)

CartTableCell.propTypes = {
  id: PropTypes.string.isRequired
}

export default CartTableCell
