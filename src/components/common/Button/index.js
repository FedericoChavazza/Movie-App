import { func, bool, string } from 'prop-types';

import './styles.scss';

const Button = ({
  value,
  children,
  name,
  type = 'button',
  disabled,
  handleClick,
  customClass = 'button',
}) => (
  <button
    name={name}
    value={value}
    className={customClass}
    onClick={handleClick}
    type={type}
    disabled={disabled}
  >
    {children}
  </button>
);

Button.propTypes = {
  handleClick: func,
  disabled: bool,
  type: string,
};

export default Button;
