import { useEffect, useState } from "react";
import { QuizCard } from "../../components/QuizCard/QuizCard"
import QuestionsDTO from "../../models/questions";
import { ResultsCard } from "../../components/ResultsCard/ResultsCard";
import { useNavigate } from "react-router-dom";
const QuizPage = () => {

    const navigate = useNavigate();

    const [questions, setQuestions] = useState<QuestionsDTO>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [quizComplete, setQuizComplete] = useState(false);

    const username = localStorage.getItem("username");
    
    let userId = "";

    if (username) {
        console.log(`Username retrieved: ${username}`);
        fetch(`https://pawsonality-gsadcuahcpb6bwd8.eastus-01.azurewebsites.net/api/User/${username}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Parse the response as JSON
            })
            .then(data => {
                // Step 3: Extract the "id" from the response body
                userId = data.id;
                console.log('User ID:', userId);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    } else {
        console.log("No username found in localStorage.");
    }


    const fetchQuestions = (): void => {
        fetch('https://pawsonality-gsadcuahcpb6bwd8.eastus-01.azurewebsites.net/api/questions')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data: QuestionsDTO) => {
                setQuestions(data);
                setAnswers(new Array(data.length).fill(''));
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching questions:', error);
            });
    };



    const postResult = (resultValue: string, userId: string): void => {
        const url = 'https://pawsonality-gsadcuahcpb6bwd8.eastus-01.azurewebsites.net/api/results';

        const body = {
            timeStamp: new Date().toISOString(),
            resultValue: resultValue,
            userId: userId
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    useEffect(() => {
        fetchQuestions();
    }, []);

    const handleFinishQuiz = () => {
        setQuizComplete(false);
        setCurrentQuestionIndex(0);
        setAnswers([]);
        navigate('/');
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
            (prev, curr, _index, arr) =>
                arr.filter((item) => item === curr).length >
                    arr.filter((item) => item === prev).length
                    ? curr
                    : prev,
            answers[0]
        );

        postResult(mostSelectedAnimal, userId);

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