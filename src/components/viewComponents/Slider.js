import { AiFillCaretLeft } from 'react-icons/ai';
import { AiFillCaretRight } from 'react-icons/ai';
import { useState } from 'react';

export function Slider({ img, imgArray, imgIndex }) {
  const [imgSelected, setImgSelected] = useState(imgIndex);

  console.log(imgIndex);
  console.log(imgSelected);

  const index =
    imgArray?.indexOf(imgSelected) === -1
      ? imgArray?.indexOf(imgIndex)
      : imgArray.indexOf(imgSelected);

  console.log(index);

  const goFoward = () => {
    setImgSelected(`${process.env.REACT_APP_ORIGINAL_IMG}${imgArray[index + 1]?.file_path}`);
  };

  const goBackward = () => {
    setImgSelected(`${process.env.REACT_APP_ORIGINAL_IMG}${imgArray[index - 1]?.file_path}`);
  };

  return (
    <div>
      <button disabled={index === 0} onClick={goBackward} className="Slider__left">
        <AiFillCaretLeft size={25} />
      </button>
      <button className="Slider__right" disabled={index === imgArray.length - 1} onClick={goFoward}>
        <AiFillCaretRight size={25} />
      </button>
      <img src={imgSelected || img} alt="selectedImg" />
    </div>
  );
}
