import { useEffect, useState } from "react";
import { QuizCard } from "../../components/QuizCard/QuizCard";
import QuestionsDTO from "../../models/questions";
import { ResultsCard } from "../../components/ResultsCard/ResultsCard";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState<QuestionsDTO>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [quizComplete, setQuizComplete] = useState(false);
    const [userId, setUserId] = useState("");
    
    const token = localStorage.getItem('token');
    const username = localStorage.getItem("username");

    const getMostCommonAnimal = (animals: string[]): string => {
        const animalCounts: Record<string, number> = {};
      
        animals.forEach(animal => {
          animalCounts[animal] = (animalCounts[animal] || 0) + 1;
        });
      
        const maxCount = Math.max(...Object.values(animalCounts));
      
        const mostCommonAnimals = Object.keys(animalCounts).filter(
          animal => animalCounts[animal] === maxCount
        );
      
        const randomIndex = Math.floor(Math.random() * mostCommonAnimals.length);
        return mostCommonAnimals[randomIndex];
      };
      
    // Fetch user ID if username exists
    useEffect(() => {
        if (username) {
            fetch(`https://pawsonality-gsadcuahcpb6bwd8.eastus-01.azurewebsites.net/api/User/${username}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    setUserId(data.id);
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        } else {
            console.log("No username found in localStorage.");
        }
    }, [username]);  // This effect will run once on component mount or when `username` changes

    // Fetch questions on mount
    useEffect(() => {
        fetchQuestions();
    }, []);

    // Post result once quiz is complete and userId is available
    useEffect(() => {
        if (quizComplete) {
            const mostSelectedAnimal = getMostCommonAnimal(answers);
            
            postResult(mostSelectedAnimal, userId);
        }
    }, [quizComplete]); // This effect runs when `quizComplete` or `userId` changes

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
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                'Access-Control-Allow-Methods': '*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
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
        return <ResultsCard animal={answers[currentQuestionIndex]} onFinish={handleFinishQuiz} />;
    }

    return (
        <div>
            <QuizCard
                questionText={questions[currentQuestionIndex].questionText}
                answer={questions[currentQuestionIndex].answer}
                onAnswerSelect={handleAnswerSelect}
            />
        </div>
    );
}

export default QuizPage;