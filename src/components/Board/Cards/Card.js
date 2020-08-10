import React from 'react'
import PropTypes from 'prop-types'

export const Card = ({ flipped, matched, image, value, suit, handler}) => {



  return (
    <>
    <img alt={`${value} of ${suit}`} src={image} onClick={handler}/>
    <p>{value} of {suit}</p>
    </>
  )
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  suit: PropTypes.string,
  flipped: PropTypes.bool,
  matched: PropTypes.bool,
  handler: PropTypes.func
}

Card.defaultProps = {
  flipped: false,
  matched: false
}