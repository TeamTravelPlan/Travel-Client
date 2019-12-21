import React from 'react';
import 'antd/dist/antd.css';
import {Col, Table} from 'antd';
import CartItem from "./CartItem";

const columns = [
    {
        title: 'Selected Place',
        dataIndex: 'placeItem',
        key: 'placeItem',
        width: 50,
        render: (placeInfo) => <CartItem placeName={placeInfo.placeName} imageUrl={placeInfo.imageUrl} rating={placeInfo.rating}/>,
    },

    {
        title: 'Remove Place',
        dataIndex: '',
        key: 'x',
        width: 20,
        render: () => <a>Delete</a>,
    }
];


// for (let i = 1; i <= 11; i++) {
//     cartItemList.push({
//         key: i,
//         placeName: 'Sydney Heritage Fleet',
//     });
// }

class Cart extends React.Component {
    state = {
        cartItems: []
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

            this.setState({cartItems: xhr.response});
        });
        // open the request with the verb and the url
        xhr.open('GET', 'http://localhost:8080/recommendPlaces?lat=-33.8670522&lon=151.1957362');
        // send the request
        xhr.send()
    }

    render() {
        const totalItems = this.state.cartItems.length;
        console.log(totalItems);
        const cartItemList = [];
        for (let i = 0; i < totalItems; i++){
            cartItemList.push(
                {
                    key: i,
                    // placeName: "aaa",
                    placeItem: {placeName: this.state.cartItems[i].name, imageUrl: this.state.cartItems[i].imageUrl, rating: this.state.cartItems[i].rating},
                }
            )
        }
        return(
            <div>
                <Table
                    columns={columns}
                    title={() => 'Selected Places'}
                    dataSource={cartItemList}
                    pagination={false}
                    scroll={{ y: 750 }}
                />
            </div>
        )
    }
}

export default Cart;