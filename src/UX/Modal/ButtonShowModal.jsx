import React, { useCallback } from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'

import { Button } from 'react-bootstrap'
import Modal from '../../mobx/Modal'

const ButtonShowModal = observer(({ className, children, type, variant = 'info' }) => {

  const handler = useCallback(() => {
    Modal.show(type)
  }, [type])

  return (
    <Button className={className}
            variant={variant}
            onClick={handler}
    >
      {children}
    </Button>
  )
})

ButtonShowModal.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default ButtonShowModal
