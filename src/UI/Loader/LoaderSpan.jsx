import React from 'react'
import PropTypes from 'prop-types'

const SpinnerSpan = ({ animation = 'border' }) => {
  return (
    <span className={`spinner-${animation}`} />
  )
}

SpinnerSpan.propTypes = {
  animation: PropTypes.string
}

export default SpinnerSpan