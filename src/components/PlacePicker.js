import React from 'react';
import 'antd/dist/antd.css';
import {Col} from 'antd';
import RecommendationGrid from './RecommendationGrid'
import Cart from './Cart'

class PlacePicker extends React.Component {
    state = {
        selectedItem: false,
        selectedItemName: ''
    }

    selectItem = (name) => {
        this.setState({ selectedItem: true, selectedItemName: name});
    };

    render() {
        console.log(this.state);
        const rows = [];

        rows.push(
            <Col key={1} span={16}>
                <RecommendationGrid selectItem = {this.selectItem}></RecommendationGrid>
            </Col>,
            <Col key={2} span={8}>
                <Cart></Cart>
            </Col>
        )

        return (
            <div>{rows}</div>
        );
    }
}

export default PlacePicker;