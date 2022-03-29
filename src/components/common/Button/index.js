import { func, bool, string } from 'prop-types';

import './styles.scss';

const Button = ({ img, children, type = 'button', disabled, handleClick }) => {
  console.log(img);
  return (
    <button className="button" onClick={handleClick} type={type} disabled={disabled}>
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
