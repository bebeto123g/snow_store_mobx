import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Spinner } from 'react-bootstrap'

const Loader = styled.div`
  margin-top: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoaderPage = ({ variant = 'dark' }) => {
  return (
    <Loader>
      <Spinner animation="grow" variant={variant} />
    </Loader>
  )
}

LoaderPage.propTypes = {
  variant: PropTypes.string,
}

export default LoaderPage
