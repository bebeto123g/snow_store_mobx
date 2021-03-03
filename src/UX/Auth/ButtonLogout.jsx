import React, { useCallback } from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'

import { Button } from 'react-bootstrap'
import Auth from '../../mobx/Auth'


const ButtonLogout = observer(({ variant = 'warning', children }) => {

    const handler = useCallback(() => {
      Auth.logout()
    }, [])

    return (
      <Button variant={variant} type='button' onClick={handler}>
        {children}
      </Button>
    )
  }
)

ButtonLogout.propTypes = {
  variant: PropTypes.string
}

export default ButtonLogout
