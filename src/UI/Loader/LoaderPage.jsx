import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Spinner } from 'react-bootstrap'
import Page from '../../hoc/Page'

const Loader = styled.div`
  margin-top: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoaderPage = ({ variant = 'dark' }) => {
  return (
    <Page>
      <Loader>
        <Spinner animation='grow' variant={variant} />
      </Loader>
    </Page>
  )
}

LoaderPage.propTypes = {
  variant: PropTypes.string
}

export default LoaderPage
