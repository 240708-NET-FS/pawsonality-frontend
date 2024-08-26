import { useEffect, useState } from "react";
import "./QuizCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";


interface Option {
    answerText: string;
    answerType: string;
  }
  
interface QuestionProps {
    questionText: string;
    answer: Option[];
    onAnswerSelect: (selectedAnimal: string) => void;
  }
  
export const QuizCard = ({ questionText, answer, onAnswerSelect }: QuestionProps) => {

    const [selected, setSelection] = useState<string | null>(null);

    const onChangeValue = (event: any) => {
        setSelection(event.target.value);
    }

    useEffect(() => {
        setSelection(null);
      }, [questionText]);
    

    const handleSelect = () => {
        console.log(selected);
        if (selected) {
            onAnswerSelect(selected);
          }
      };
    return (
        <div className="topContainer">
      <div className="titleContainer">
        <p>{questionText}</p>
      </div>

      <div className="inputContainer">
        <label className="custom-radio">
          <input
            type="radio"
            value= {answer[0].answerType}
            checked={selected === answer[0].answerType}
            onChange={onChangeValue}
          />
          <span className="custom-radio-icon">
            {selected === answer[0].answerType && <FontAwesomeIcon icon={faPaw} />}
          </span>
          {answer[0].answerText}
          <div></div>
        </label>

        <label className="custom-radio">
          <input
            type="radio"
            value={answer[1].answerType}
            checked={selected === answer[1].answerType}
            onChange={onChangeValue}
          />
          <span className="custom-radio-icon">
            {selected === answer[1].answerType && <FontAwesomeIcon icon={faPaw} />}
          </span>
          {answer[1].answerText}
          <div></div>
        </label>

        <label className="custom-radio">
          <input
            type="radio"
            value= {answer[2].answerType}
            checked={selected === answer[2].answerType}
            onChange={onChangeValue}
          />
          <span className="custom-radio-icon">
            {selected === answer[2].answerType && <FontAwesomeIcon icon={faPaw} />}
          </span>
          {answer[2].answerText}
          <div></div>
        </label>

        <label className="custom-radio">
          <input
            type="radio"
            value={answer[3].answerType}
            checked={selected === answer[3].answerType}
            onChange={onChangeValue}
          />
          <span className="custom-radio-icon">
            {selected === answer[3].answerType && <FontAwesomeIcon icon={faPaw} />}
          </span>
          {answer[3].answerText}
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