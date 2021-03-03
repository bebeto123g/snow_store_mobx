import React from 'react'
import { NavLink } from 'react-router-dom'
import CartSum from '../Cart/CartSum'

const FooterCartLink = () => {
  return (
    <span>
      <NavLink to={'/cart'} style={{ marginRight: '5px' }}>
        Коризна:{' '}
      </NavLink>
        <CartSum /> &#8381;
    </span>
  )
}

export default FooterCartLink
