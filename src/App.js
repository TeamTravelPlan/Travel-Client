import React from 'react';
import './App.css';
import NavBar from './components/navbar.js';
import RecommendationCard from './components/RecommendationCard'
import RecommendationGrid from './components/RecommendationGrid'

function App() {
    return (
        <div>
            <NavBar></NavBar>
            <RecommendationGrid> </RecommendationGrid>
        </div>
    );
}

export default App;
