import PropTypes from 'prop-types';
import css from './SectionStyles.module.css';

export const Section = ({ children, title }) => {
  return (
    <div className={css.section}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};
