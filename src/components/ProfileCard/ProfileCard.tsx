import './ProfileCard.css';
import { useState } from "react"

export const ProfileCard = () => { 
    
    const traits: string[] = ["Intelligent", "Loyal", "Energetic", "Friendly"];
    const animalType: string = "Dog";
    const description: string = "description";
    const imageUrl: string = "https://www.dogster.com/wp-content/uploads/2019/11/Dalmatian-standing-outside-Beth-James-Shutterstock.jpg";
    
    const handleRetakeQuiz = () => {
        // Logic to navigate to the quiz page
    };

    return (
        <div className="profile-container">
            <h1>Your Animal Results:</h1>
            <div className="animal-box">
                <img src={imageUrl} alt={animalType} className="animal-image" />
                <h2>{animalType}</h2>
                <p className="animal-description">{description}</p>
            </div>
            <div className="traits-box">
                <h3>Key Traits</h3>
                <ul>
                    {traits.map((trait, index) => (
                        <li key={index}>{trait}</li>
                    ))}
                </ul>
            </div>
            <button className="retry-button" onClick={handleRetakeQuiz}>Retake Quiz</button>
        </div>
    );
};