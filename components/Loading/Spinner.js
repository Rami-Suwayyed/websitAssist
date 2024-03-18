import { BeatLoader } from 'react-spinners';
import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

function Spinner({ logo, textForm }) {
  const string = textForm;
  const [t] = useTranslation();

  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  let delay = 100;
  useEffect(() => {
    if (currentIndex < string?.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + string[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, string]);
  let clasaSpinner;
//   if (text) {
//     clasaSpinner = style.spinnerCloum
//   }
//   else {
//     clasaSpinner = style.spinner
//   }

  return (
    <>
      <div className={`spinner`}>
        {logo ?
          <img src={logo} alt='BeatLoader' />
          :
          <>
            <BeatLoader className="BeatLoader"  loading={true} />
            {/* {text && <p  className={style.loadingMessage}>{t(currentText)}</p> */}
            
          </>
        }
      </div>    </>
  )
}

export default Spinner