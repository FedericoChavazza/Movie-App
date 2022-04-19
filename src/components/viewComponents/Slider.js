import { AiFillCaretLeft } from 'react-icons/ai';
import { AiFillCaretRight } from 'react-icons/ai';
import { useState } from 'react';

export function Slider({ img, imgArray, imgIndex }) {
  const [imgSelected, setImgSelected] = useState(imgIndex);
  const [showImageSelected, setShowImageSelected] = useState(img);

  const functionIndexImg = value => {
    return imgArray
      ?.map(e => {
        return e.file_path;
      })
      .indexOf(value);
  };

  const index =
    functionIndexImg(imgSelected) === -1
      ? functionIndexImg(imgIndex)
      : functionIndexImg(imgSelected);

  const goFoward = () => {
    setImgSelected(imgArray[index + 1]?.file_path);
    setShowImageSelected(`${process.env.REACT_APP_ORIGINAL_IMG}${imgArray[index + 1]?.file_path}`);
  };

  const goBackward = () => {
    setImgSelected(imgArray[index - 1]?.file_path);
    setShowImageSelected(`${process.env.REACT_APP_ORIGINAL_IMG}${imgArray[index - 1]?.file_path}`);
  };

  return (
    <div>
      <button disabled={index === 0} onClick={goBackward} className="Slider__left">
        <AiFillCaretLeft size={25} />
      </button>
      <button className="Slider__right" disabled={index === imgArray.length - 1} onClick={goFoward}>
        <AiFillCaretRight size={25} />
      </button>
      <img src={showImageSelected || img} alt="selectedImg" />
    </div>
  );
}
