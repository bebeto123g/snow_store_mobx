import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'

import { TrTableOrders } from '../styledComponents/TrTableOrders'
import Catalog from '../mobx/Catalog'
import LoaderSpan from '../UI/Loader/LoaderSpan'

const OrderDetailCart = observer(({ count, price, id }) => {
  const [bord, setBord] = useState(null)

  useEffect(() => {
      const { brand, name } = toJS(Catalog.catalog).find(
        (item) => item.id === id
      )
      setBord(`${brand} - ${name}`)
    }, [id] )

  if (!Catalog.catalog.length)
    return (
      <TrTableOrders>
        <td colSpan={'3'}>
          <LoaderSpan />
        </td>
      </TrTableOrders>
    )

  return (
    <TrTableOrders>
      <td>{bord || <LoaderSpan />}</td>
      <td>{count} шт.</td>
      <td>{price} &#8381;</td>
    </TrTableOrders>
  )
})

export default OrderDetailCart
