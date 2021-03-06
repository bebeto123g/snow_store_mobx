import React from 'react'
import PropTypes from 'prop-types'

const LoaderSpan = ({ animation = 'border' }) => {
  return (
    <span className={`spinner-${animation}`} />
  )
}

LoaderSpan.propTypes = {
  animation: PropTypes.string
}

export default LoaderSpan