
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import ResultCard from "../../components/ResultCard/ResultCard";

const ProfilePage = () => {

    const token = localStorage.getItem('token');
    const [results, setResults] = useState<{ id: number }[]>([]);

    useEffect(() => {
        const apiUrl = "https://api.example.com/quiz-results"; // to be replaced
    
        fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((result) => {
            setResults(result); 
          })
          .catch((error) => {
            console.error('Error fetching quiz results:', error);
          });
      }, [token]);
    


    
      return (
        <div>
            <h1>Welcome to your profile page!</h1>
          {token ? (
            results.length > 0 ? (
              results.map((result) => (
                <ResultCard key={result.id} result={result} />
              ))
              
            ) : (
              <p>No Results For User. Please Take A Quiz</p>
            )
          ) : (
            <p>Please Log In To See Your Results</p>
          )}
            {token ? (
                <button>
                    <Link to ="/quiz">To Quiz!</Link>
                </button>
            ) : (
                <button>
                     <Link to="/login">To Login!</Link>
                 </button>
            )}
        </div>
      );
};

export default ProfilePage;