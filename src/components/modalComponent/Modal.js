import React, { useEffect, useRef } from 'react';
import Button from 'components/common/Button';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './styles.scss';

const Modal = ({ modalStyle, children, show, onClose, backdropStyle }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    if (show) {
      modalRef.current.classList.add('visible');
    } else {
      modalRef.current.classList.remove('visible');
    }
  }, [show, backdropStyle]);
  return (
    <>
      <div ref={modalRef} className="modal">
        <div style={modalStyle} className="modal__wrap">
          <Button classType="close" handleClick={onClose}>
            <AiOutlineCloseCircle size={20} />
          </Button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
