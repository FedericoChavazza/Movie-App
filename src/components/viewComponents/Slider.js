import { AiFillCaretLeft } from 'react-icons/ai';
import { AiFillCaretRight } from 'react-icons/ai';
import { useState } from 'react';

export function Slider({ img, imgArray }) {
  const [imgSelected, setImgSelected] = useState(img);

  const index =
    imgArray?.indexOf(imgSelected) === -1 ? imgArray?.indexOf(img) : imgArray.indexOf(imgSelected);

  const goFoward = () => {
    setImgSelected(imgArray[index + 1]);
  };

  const goBackward = () => {
    setImgSelected(imgArray[index - 1]);
  };

  return (
    <div>
      <button disabled={index === 0} onClick={() => goBackward()} className="Slider__left">
        <AiFillCaretLeft size={25} />
      </button>
      <button
        className="Slider__right"
        disabled={index === imgArray.length - 1}
        onClick={() => goFoward()}
      >
        <AiFillCaretRight size={25} />
      </button>
      <img src={imgSelected || img} alt="selectedImg" />
    </div>
  );
}
