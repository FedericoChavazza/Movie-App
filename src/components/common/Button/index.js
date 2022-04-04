import { func, bool, string } from 'prop-types';

import './styles.scss';

const Button = ({
  value,
  children,
  name,
  img,
  type = 'button',
  disabled,
  handleClick,
  customClass = 'button',
}) => {
  return (
    <button
      name={name}
      value={value}
      className={customClass}
      onClick={handleClick}
      type={type}
      disabled={disabled}
    >
      {img ? (
        <div>
          {' '}
          {children} {img}{' '}
        </div>
      ) : (
        <div> {children} </div>
      )}
    </button>
  );
};

Button.propTypes = {
  handleClick: func,
  disabled: bool,
  type: string,
};

export default Button;
