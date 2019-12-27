import React from 'react';
import 'antd/dist/antd.css';
import {Col} from 'antd';
import RecommendationGrid from './RecommendationGrid'
import Cart from './Cart'

class PlacePicker extends React.Component {
    state = {
        selectedItems: [],
    };

    selectItem = (selectedItem) => {
        //this.setState({ selectedItem: true, selectedItemName: name});
        //this.setState(prevState => ({selectedItems: [...prevState.selectedItems, selectedItem]}));
        this.setState(prevState => {
            if (!prevState.selectedItems.some((item) => {return selectedItem.name === item.name})) {
                return {selectedItems: [...prevState.selectedItems, selectedItem]};
            }
        });
    };

    handleOnClickDelete = (indexToDelete) => {
        this.setState((prevState) => {
            return {
                selectedItems: [...prevState.selectedItems.slice(0, indexToDelete), ...prevState.selectedItems.slice(indexToDelete + 1, prevState.selectedItems.length)]
            };
        });
    };

    setSelectedItemStayTime = (key, stayTime) => {
        this.setState(prevState => {
            let newState = prevState;
            newState.selectedItems[key].stayTime = stayTime;
            return newState;
        })
    };

    render() {
        console.log(this.state);
        const rows = [];

        rows.push(
            <Col key={1} span={16}>
                <RecommendationGrid selectItem = {this.selectItem}></RecommendationGrid>
            </Col>,
            <Col key={2} span={8}>
                <Cart selectedItems = {this.state.selectedItems} deleteItem = {this.handleOnClickDelete} setStayTime = {this.setSelectedItemStayTime}></Cart>
            </Col>
        )

        return (
            <div>{rows}</div>
        );
    }
}

export default PlacePicker;