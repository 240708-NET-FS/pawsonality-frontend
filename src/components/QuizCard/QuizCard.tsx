import { useState } from "react";
import "./QuizCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

export const QuizCard = () => {

    const [selected, setSelection] = useState('');

    const onChangeValue = (event: any) => {
        setSelection(event.target.value);
    }

    const onNext = () => {
        console.log("next clicked");
    }
    return (
        <div className="topContainer">
      <div className="titleContainer">
        <p>How do you prefer to spend your free time?</p>
      </div>

      <div className="inputContainer">
        <label className="custom-radio">
          <input
            type="radio"
            value="dog"
            checked={selected === 'dog'}
            onChange={onChangeValue}
          />
          <span className="custom-radio-icon">
            {selected === 'dog' && <FontAwesomeIcon icon={faPaw} />}
          </span>
          Going out with friends, exploring new places, and staying active.
          <div></div>
        </label>

        <label className="custom-radio">
          <input
            type="radio"
            value="cat"
            checked={selected === 'cat'}
            onChange={onChangeValue}
          />
          <span className="custom-radio-icon">
            {selected === 'cat' && <FontAwesomeIcon icon={faPaw} />}
          </span>
          Lounging in a cozy spot, enjoying some quiet time alone.
          <div></div>
        </label>

        <label className="custom-radio">
          <input
            type="radio"
            value="bird"
            checked={selected === 'bird'}
            onChange={onChangeValue}
          />
          <span className="custom-radio-icon">
            {selected === 'bird' && <FontAwesomeIcon icon={faPaw} />}
          </span>
          Soaring through new experiences, whether it’s traveling or trying new hobbies.
          <div></div>
        </label>

        <label className="custom-radio">
          <input
            type="radio"
            value="snake"
            checked={selected === 'snake'}
            onChange={onChangeValue}
          />
          <span className="custom-radio-icon">
            {selected === 'snake' && <FontAwesomeIcon icon={faPaw} />}
          </span>
          Observing from a distance, planning your next move carefully.
          <div></div>
        </label>

       {selected && <input
                className={"inputButton"}
                type="button"
                onClick={onNext}
                value={"Next"} />

            } 
      </div>
    </div>
    )



}