import {Row, Col} from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import RecommendationCard from './RecommendationCard'

class RecommendationGrid extends React.Component {
    state = {
        places: []
    };

    componentDidMount() {
        this.getRecommendedPlaces()
    }

    getRecommendedPlaces() {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            // update the state of the component with the result here
            console.log(xhr.response);

            this.setState({places: xhr.response});
        });
        // open the request with the verb and the url
        xhr.open('GET', 'http://localhost:8080/recommendPlaces?lat=-33.8670522&lon=151.1957362');
        // send the request
        xhr.send()
    }

    render() {
        const {selectItem} = this.props;
        const totalPlaces = this.state.places.length;
        const nCols = 3;
        const rows = [];
        for (let i = 0; i < totalPlaces;) {
            const cols = [];
            for (let j = 0; i < totalPlaces && j < nCols; i++, j++) {
                cols.push(
                    <Col key={i} span={8}> <RecommendationCard name={this.state.places[i].name} rating={this.state.places[i].rating}
                                                       imageUrl={this.state.places[i].imageUrl} selectItem = {selectItem}/>
                    </Col> // Add props
                )
            }
            rows.push(
                <Row key={i}>{cols}</Row>
            )
        }


        return (
            <div>{rows}</div>
        );
    }
}

export default RecommendationGrid;