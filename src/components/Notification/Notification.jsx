import PropTypes from 'prop-types';
import css from './NotificationStyles.module.css';

export const Notification = ({ message }) => {
  return <h2 className={css.notification}>{message}</h2>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
