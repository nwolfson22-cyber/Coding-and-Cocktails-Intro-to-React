import React from 'react';
import { useState } from 'react';
// list of facts about me
const personalFacts = [
  "I have a unique talent or hobby that surprises people",
  "There's a place I've visited that changed my perspective on life",
  "I have an unusual fear or phobia",
  "I once had an embarrassing moment that became a funny story",
  "I have a hidden skill that most people don't know about"
];
const FactGenerator = () => {
    const [currentFact, setCurrentFact] = useState('');

    const generateRandomFact = () => {
        if (personalFacts.length > 0) {
            const randomIndex = Math.floor(Math.random() * personalFacts.length);
            setCurrentFact(personalFacts[randomIndex]);
        }
    };
    return (
        <div className="fun-fact-generator">
            <h2>🎲 Discover Something About Me 🎲</h2>
            
            <button 
                className="fact-button" 
            >
                Show Me A Fun Fact!
            </button>
            
        </div>
    )
}

export default FactGenerator;