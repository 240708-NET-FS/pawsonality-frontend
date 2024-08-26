import { useEffect, useState } from "react";
import { QuizCard } from "../../components/QuizCard/QuizCard"
import QuestionsDTO from "../../models/questions";
import { ResultsCard } from "../../components/ResultsCard/ResultsCard";
const QuizPage = () => {

    const [questions, setQuestions] = useState<QuestionsDTO>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [quizComplete, setQuizComplete] = useState(false);


    const fetchQuestions = async () => {
        try {
            const response = await fetch('http://pawsonality-gsadcuahcpb6bwd8.eastus-01.azurewebsites.net/api/questions');
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

    const handleFinishQuiz = () => {
        setQuizComplete(false);
        setCurrentQuestionIndex(0);
        setAnswers([]);
    };

    const handleAnswerSelect = (selectedAnimal: string) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestionIndex] = selectedAnimal;
        setAnswers(updatedAnswers);

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizComplete(true); 
        }
    };

    if (questions.length === 0) {
        return <div>Loading...</div>;
    }

    if (quizComplete) {
        const mostSelectedAnimal = answers.reduce(
          (prev, curr, index, arr) =>
            arr.filter((item) => item === curr).length >
            arr.filter((item) => item === prev).length
              ? curr
              : prev,
          answers[0]
        );

        return <ResultsCard animal={mostSelectedAnimal} onFinish={handleFinishQuiz} />;
    }




    return (
        <div>
            <QuizCard
                questionText={questions[currentQuestionIndex].questionText}
                answer={questions[currentQuestionIndex].answer}
                onAnswerSelect={handleAnswerSelect}
            />
        </div>
    )
}

export default QuizPage;