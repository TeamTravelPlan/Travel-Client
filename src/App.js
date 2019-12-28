import React from 'react';
import './App.css';
import NavBar from './components/navbar.js';
import PlacePicker from "./components/PlacePicker";

class App extends React.Component{
    handleProceed = (selectedItems) => {
        console.log(selectedItems);
    };

    render() {
        return (
            <div>
                <NavBar />
                <PlacePicker handleProceed={this.handleProceed} />
            </div>
        );
    }
}

export default App;
