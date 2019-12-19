import {Row, Col} from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import RecommendationCard from './RecommendationCard'

class RecommendationGrid extends React.Component {
    state = {
        places: [{name: "good building", img_url: "www.good.com/img.png", rating: 4.0 }]
    }

    render() {
        const totalPlaces = 23;
        const nCols = 3;
        const rows = [];
        for (let i = 0; i < totalPlaces;) {
            const cols = [];
            for (let j = 0; i < totalPlaces && j < nCols; i++, j++) {
                cols.push(
                    <Col span={8}> <RecommendationCard /> </Col> // Add props
                )
            }
            rows.push(
                <Row>{cols}</Row>
            )
        }


        return (
            <div>{rows}</div>
        );
    }
}

export default RecommendationGrid;