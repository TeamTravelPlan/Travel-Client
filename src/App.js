import React from 'react';
import './App.css';
import NavBar from './components/navbar.js';
import RecommendationGrid from './components/RecommendationGrid'
import Cart from "./components/Cart";
import CartItem from "./components/CartItem";
import PlacePicker from "./components/PlacePicker";

class App extends React.Component{
    handleProceed = (selectedItems) => {
        console.log(selectedItems);
    };

    render() {
        return (
            <div>
                <NavBar></NavBar>
                <PlacePicker handleProceed = {this.handleProceed}></PlacePicker>
                {/*<Cart></Cart>*/}
                {/*<RecommendationGrid> </RecommendationGrid>*/}
            </div>
        );
    }
}

export default App;
