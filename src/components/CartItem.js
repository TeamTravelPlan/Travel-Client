import React from 'react';
import 'antd/dist/antd.css';
import {Card, Avatar} from 'antd';

const {Meta} = Card;

class CartItem extends React.Component {
    render() {
        const {placeName, imageUrl, rating} = this.props;
        return (
            <div>
                <Card
                    style={{width: 350, marginTop: 6}}
                >
                    <Meta
                        avatar={
                            <Avatar src={imageUrl}/>
                        }
                        title={placeName}
                        description={rating}
                    />
                </Card>
            </div>

        );
    }
}

export default CartItem;
