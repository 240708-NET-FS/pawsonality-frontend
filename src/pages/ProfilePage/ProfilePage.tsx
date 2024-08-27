
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import ResultCard from "../../components/ResultCard/ResultCard";

const ProfilePage = () => {

    const token = localStorage.getItem('token');
    // const token = 'CfDJ8ODb-pgFY4xHl1wOPQUlZCGoMsQ1_swID5kPpGeKptiKVTeQy0uJyjZ4DDXxbO9N8hZngX1ReI0MsdX0YQUuZcoIzaYU10RiRN3V8s6QAS0YVnfFUd32-fAbf6Ia2KVBtXThaYsjWaxBfhVhNeCzgxOsXq0xkJJ5f5nc8fdnHVYm49RyO1kZ4a5zR1L8cRPVNWKhCVKMkTYoUPubL-QlLpxlmTylWi2COo2iJ5D4jjUfDjXr4fgD0X424qeuNuxBuhaclt9LUFHV4sZjaHojdl6CZrmx9Y-gLd7koWS2lvSMKM4i1-CqPn-i66Kv7_S9ZmtOdFZMq75I_O6yp9UEe89LxZMJFikXgONPPt9bruYwN2DcF5v1wZrtorrMuCUdVpJ8186gQaOVldr1N6qqfZv-fSwzQ6cGlnbhm8QUXWhFWu08kRFL-Mer-IXX3rvZHahRwM6Q7YDr4iKjkEfJUOtAPjMItcUK0fGKGlwBFlFe00hTm8Rrne2h2EYCab6u_BkYh6U_XWBBSnw0QEzapbAo6gwcjGO9h9DAE0zgYHdreZE-oKN2qg0cmGC-XcToC5b8B9r8aMO_iuj2jIdI0WKJdq7yH0EIx90Rsq1m_m2ATCXVJS6vvtOpN3ZhicIDXaFOEBuBApeOgUuLKKRdtllzNiJS-2yzYmM_vexOpJQZH4PaXyFX38lATXmWfTOK1Q';
    const [results, setResults] = useState<any[]>([]);
    console.log(results);

    const id = localStorage.getItem('username');
    // const id = "4a4f6ed3-faf8-404c-a6e3-9ff5cfd13e26";

    useEffect(() => {
        const apiUrl = `https://pawsonality-gsadcuahcpb6bwd8.eastus-01.azurewebsites.net/api/results/user/${id}`; 
    
        fetch(apiUrl, {
          method: 'GET',
          headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                'Access-Control-Allow-Methods': '*',
                'Content-Type': 'application/json',
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
      }, []);
    


    
      return (
        <div>
            <h1>Welcome to your profile page!</h1>
          {token ? (
            results.length > 0 ? (
              results.map((result) => (
                <ResultCard key={result.resultID} result={result} />
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