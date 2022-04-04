import { func, bool, string } from 'prop-types';

import './styles.scss';

const Button = ({
  classType = 'button',
  img,
  children,
  type = 'button',
  disabled,
  handleClick,
}) => {
  return (
    <button className={classType} onClick={handleClick} type={type} disabled={disabled}>
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
