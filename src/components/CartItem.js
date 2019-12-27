import React from 'react';
import 'antd/dist/antd.css';
import {Card, Avatar} from 'antd';

const {Meta} = Card;

class CartItem extends React.Component {
    render() {
        const {name, imageUrl, rating, placeId} = this.props;
        return (
            <div>
                <Card
                    style={{width: '100%', marginTop: 6}}
                >
                    <Meta
                        avatar={
                            <Avatar src={imageUrl}/>
                        }
                        title={name}
                        description={rating}
                    />
                </Card>
            </div>

        );
    }
}

export default CartItem;
