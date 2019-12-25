import React from 'react';
import 'antd/dist/antd.css';
import {Button, Col, Table} from 'antd';
import CartItem from "./CartItem";

class Cart extends React.Component {
    columns = [
        {
            title: 'Selected Place',
            dataIndex: 'placeItem',
            key: 'placeItem',
            width: 50,
            render: (placeInfo) => <CartItem name={placeInfo.name} imageUrl={placeInfo.imageUrl} rating={placeInfo.rating}/>,
        },

        {
            title: 'Remove Place',
            dataIndex: '',
            key: 'x',
            width: 20,
            render: (record) => (
                <Button
                    type="primary"
                    icon="delete"
                    onClick={(e) => {
                        this.props.deleteItem(record.key);
                        console.log(record);
                    }}
                >
                Delete
                </Button>),
        }
    ];

    render() {
        const {selectedItems} = this.props;
        console.log(selectedItems);
        const totalItems = selectedItems.length;
        console.log(totalItems);
        const cartItemList = [];
        for (let i = 0; i < totalItems; i++){
            cartItemList.push(
                {
                    key: i,
                    // placeName: "aaa",
                    placeItem: selectedItems[i],
                }
            )
        }
        return(
            <div>
                <Table
                    columns={this.columns}
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