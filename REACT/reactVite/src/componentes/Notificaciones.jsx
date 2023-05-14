import React from 'react'
import PropTypes from 'prop-types'

const NotificationCard = ({ message, type, id }) => {
 return <span>Notification</span>
}
NotificationCard.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["error", "warning", "success"]),
    id: PropTypes.number.isRequired
}
export default NotificationCard