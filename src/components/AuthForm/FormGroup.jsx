import React, { useCallback } from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'

import { Form } from 'react-bootstrap'
import Auth from '../../mobx/Auth'
import isLogin from '../../mobx/isLogin'


const FormGroup = observer(({ type, label, text }) => {
    const focusHandler = useCallback(() => {
      Auth.clearError()
    }, [])

    return (
      <Form.Group
        controlId={type}
        onFocus={focusHandler}
      >
        <Form.Label>{label}</Form.Label>
        <Form.Control
          required
          type={type}
          placeholder={label}
          autoComplete={'on'}
          isInvalid={Auth.errors && Auth.errors[type]}
          isValid={isLogin.isLogin || isLogin.isAdmin || isLogin.isManager}
          defaultValue={Auth.form[type]}
        />
        {Auth.errors && Auth.errors[type] ? (
          <Form.Text className='' style={{ color: 'brown' }}>
            {Auth.errors[type]}
          </Form.Text>
        ) : (
          <Form.Text className='text-muted'>{text}</Form.Text>
        )}
      </Form.Group>
    )
  }
)

FormGroup.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default FormGroup
