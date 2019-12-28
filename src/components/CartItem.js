import React from 'react';
import 'antd/dist/antd.css';
import { Card, Avatar } from 'antd';

const { Meta } = Card;

class CartItem extends React.Component {
    render() {
        const { name, imageUrl, rating } = this.props;
        return (
            <div>
                <Card
                    style={{width: '100%', marginTop: 6, textAlign: 'left'}}
                >
                    <Meta
                        avatar={
                            <Avatar src={imageUrl}/>
                        }
                        title={name}
                        description={"Rating: " + rating}
                    />
                </Card>
            </div>

        );
    }
}

export default CartItem;
