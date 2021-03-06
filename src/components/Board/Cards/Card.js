import React from 'react'
import PropTypes from 'prop-types'

export const Card = ({ flipped, matched, image, value, suit, handler, code, id }) => {


  return (
    <button onClick={handler} data-id={id} data-code={code}>
      <img alt={`${value} of ${suit}`}
      src={flipped ? image : 'https://source.unsplash.com/random/225x314'}
      className={matched ? "matched" : null}
      />
    </button>
  )
}

Card.propTypes = {
  code: PropTypes.string,
  flipped: PropTypes.bool,
  handler: PropTypes.func,
  id: PropTypes.string,
  image: PropTypes.string.isRequired,
  matched: PropTypes.bool,
  suit: PropTypes.string,
  value: PropTypes.string.isRequired,
}

Card.defaultProps = {
  flipped: false,
  matched: false
}
