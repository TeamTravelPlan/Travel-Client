import { Card, Button } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';

const { Meta } = Card;

// Handle props
class RecommendationCard extends React.Component {
    handleOnClick = () => {
        const { name, imageUrl, rating, placeId } = this.props;
        this.props.selectItem({name, imageUrl, rating, placeId:placeId, stayTime: 0});
    };

    render() {
        const { name, imageUrl, rating } = this.props;
        return (
            <Card
                hoverable
                style={{width: 280, marginTop: 16}}
                actions={[
                    <Button
                        type="primary"
                        icon="plus-circle"
                        onClick={this.handleOnClick}
                    >
                        Add
                    </Button>
                ]}
                cover={<img alt="place" src={imageUrl} height={185}/>}
            >
                <Meta
                    title={name}
                    description={"Rating: " + rating}
                />
            </Card>
        );
    }
}

export default RecommendationCard;