import React, { useCallback } from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'

import { Button } from 'react-bootstrap'
import Modal from '../../mobx/Modal'


const ButtonHideModal = observer(({ className, children, variant = 'primary' }) => {

  const handler = useCallback(() => {
    Modal.hide()
  }, [])

  return (
    <Button className={className} variant={variant} onClick={handler}>
      {children}
    </Button>
  )
})

ButtonHideModal.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string
}

export default ButtonHideModal
