import { useEffect, useState } from "react";
import "./QuizCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";


interface Option {
    text: string;
    animal: string;
  }
  
interface QuestionProps {
    question: string;
    options: Option[];
    onAnswerSelect: (selectedAnimal: string) => void;
  }
  
export const QuizCard = ({ question, options, onAnswerSelect }: QuestionProps) => {

    const [selected, setSelection] = useState<string | null>(null);
    const [, forceUpdate] = useState(0);
    const reloadComponent = () => forceUpdate(n => n + 1);

    const onChangeValue = (event: any) => {
        setSelection(event.target.value);
    }

    useEffect(() => {
        setSelection(null);
      }, [question]);
    

    const handleSelect = () => {
        console.log(selected);
        if (selected) {
            onAnswerSelect(selected);
          }
        // reloadComponent();
      };
    return (
        <div className="topContainer">
      <div className="titleContainer">
        <p>{question}</p>
      </div>

      <div className="inputContainer">
        <label className="custom-radio">
          <input
            type="radio"
            value= {options[0].animal}
            checked={selected === options[0].animal}
            onChange={onChangeValue}
          />
          <span className="custom-radio-icon">
            {selected === options[0].animal && <FontAwesomeIcon icon={faPaw} />}
          </span>
          {options[0].text}
          <div></div>
        </label>

        <label className="custom-radio">
          <input
            type="radio"
            value={options[1].animal}
            checked={selected === options[1].animal}
            onChange={onChangeValue}
          />
          <span className="custom-radio-icon">
            {selected === options[1].animal && <FontAwesomeIcon icon={faPaw} />}
          </span>
          {options[1].text}
          <div></div>
        </label>

        <label className="custom-radio">
          <input
            type="radio"
            value= {options[2].animal}
            checked={selected === options[2].animal}
            onChange={onChangeValue}
          />
          <span className="custom-radio-icon">
            {selected === options[2].animal && <FontAwesomeIcon icon={faPaw} />}
          </span>
          {options[2].text}
          <div></div>
        </label>

        <label className="custom-radio">
          <input
            type="radio"
            value={options[3].animal}
            checked={selected === options[3].animal}
            onChange={onChangeValue}
          />
          <span className="custom-radio-icon">
            {selected === options[3].animal && <FontAwesomeIcon icon={faPaw} />}
          </span>
          {options[3].text}
          <div></div>
        </label>

       {selected && <input
                className={"inputButton"}
                type="button"
                onClick={ () =>handleSelect()}
                value={"Next"} />

            } 
      </div>
    </div>
    )



}