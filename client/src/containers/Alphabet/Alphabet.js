import React, { useState } from "react";
import { LeftSide } from "../../components/LeftSide/LeftSide";
import { Modal } from "../../components/Modal/Modal";
import { RightSide } from "../../components/RightSide/RightSide";
import { Voices } from "../../components/Voices/Voices";
import './alphabet.css';

const ruAlphabet = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ё",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "Ш",
  "Щ",
  "Э",
  "Ю",
  "Я",
];

export const Alphabet = () => {
  const [letterValue, setLetterValue] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleChooseLetter = (e) => {
    setLetterValue([...letterValue, e.target.innerHTML]);
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  }

  const removeLetter = () => {
    const removeItem = letterValue.slice(0, -1);
    setLetterValue(removeItem);
  };

  return (
    <div className="b-container">
      <LeftSide />
      <RightSide title="Алфавит">
        <div className="b-alphabet">
          <div className="b-alphabet__list">
            {ruAlphabet.map((item) => {
              return (
                <div key={item} className="b-alphabet__item" onClick={handleShowModal}>
                  <div
                    className="b-alphabet__uppercase"
                    // onClick={(e) => handleChooseLetter(e)}
                  >
                    {item}
                  </div>
                  <div
                    className="b-alphabet__lowercase"
                    // onClick={(e) => handleChooseLetter(e)}
                  >
                    {item.toLowerCase()}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="b-alphabet__result">
          {letterValue.length !== 0 ? (
            <>
              <div className="b-alphabet__answer">{letterValue}</div>
              <div className="b-alphabet__btn">
                <button type="button" onClick={removeLetter}>
                  Удалить
                </button>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <Modal
          open={showModal}
          title='Test'
          children={<Voices />}
          succesBtn='Отлично'
          closeModal={() => setShowModal(false)}
        />
      </RightSide>
    </div>
  );
};
