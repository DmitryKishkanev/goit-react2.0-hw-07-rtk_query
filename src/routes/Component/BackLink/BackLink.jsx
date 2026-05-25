import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { HiArrowLeft } from 'react-icons/hi';
import style from './BackLink.module.css';

const BackLink = ({ to, children }) => {
  return (
    <Link className={style.styledLink} to={to}>
      <HiArrowLeft size="24" />
      {children}
    </Link>
  );
};

BackLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BackLink;
