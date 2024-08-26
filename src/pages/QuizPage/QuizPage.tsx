import { useEffect, useState } from "react";
import { QuizCard } from "../../components/QuizCard/QuizCard"
import QuestionsDTO from "../../models/questions";
const QuizPage = () => {

    const [questions, setQuestions] = useState<QuestionsDTO>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);


    const fetchQuestions = async () => {
        try {
            const response = await fetch('http://localhost:3002/api/quiz');
            const data: QuestionsDTO = await response.json();
            setQuestions(data);
            setAnswers(new Array(data.length).fill(''));
            console.log(data);
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    };

    useEffect(() => {
        fetchQuestions();
    }, []);


    const handleAnswerSelect = (selectedAnimal: string) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestionIndex] = selectedAnimal;
        setAnswers(updatedAnswers);
    
        // Move to the next question or end quiz if it's the last question
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          console.log("Quiz completed:", updatedAnswers);
          // Here you could handle the end of the quiz, like showing results
        }
      };

      if (questions.length === 0) {
        return <div>Loading...</div>;
      }
    
    

    return (
        <div>
      <QuizCard
        question={questions[currentQuestionIndex].question}
        options={questions[currentQuestionIndex].options}
        onAnswerSelect={handleAnswerSelect}
      />
    </div>
    )
}

export default QuizPage;