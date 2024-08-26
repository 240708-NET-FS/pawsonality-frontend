
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';
import "./ResultsCard.css"; 

interface ResultsCardProps {
    animal: string;
    onFinish: () => void;
  }
  

const animalImages: Record<string, string> = {
    Dog: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    Cat: 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    Bird: 'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    Snake: 'https://images.pexels.com/photos/80474/grass-snake-snake-serpentes-natrix-80474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  };


export const ResultsCard = ({ animal, onFinish }: ResultsCardProps) => {
    const [width, height] = useWindowSize();
  
    return (
        <div className="topContainer">
          <Confetti width={width/3} height={height} />
          
          <div className="titleContainer">
            <h1>Your Animal: {animal}</h1>
          </div>
    
          <div className="inputContainer">
            <div className="imageContainer">
              <img 
                src={animalImages[animal]} 
                alt={animal} 
                className="animalImage"
              />
            </div>
            <button className="inputButton" onClick={onFinish}>
              Finish Quiz
            </button>
          </div>
        </div>
      );
    };
  