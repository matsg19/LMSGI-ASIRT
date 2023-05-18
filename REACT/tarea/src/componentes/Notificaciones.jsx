import React from 'react'
import PropTypes from 'prop-types'

const Notificaciones = ({ message, type, id }) => { 
  return <span> Notificacion: {message}, Type: {type} </span>
}

Notificaciones.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["error", "warning", "success"]),
  id: PropTypes.number.isRequired
}

export default Notificaciones