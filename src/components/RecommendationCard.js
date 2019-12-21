import { Card, Icon, Button} from 'antd';
import React from 'react';
import 'antd/dist/antd.css';

const {Meta} = Card;

// Handle props
class RecommendationCard extends React.Component {
    handleOnClick = () => {
        this.props.selectItem(this.props.placeName)
    };

    render() {
        const {placeName, imageUrl, rating, selectItem} = this.props;
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
                cover={<img alt="place" src={imageUrl}/>}
            >
                <Meta
                    title={placeName}
                    description={rating}
                />
            </Card>
        );
    }
}

export default RecommendationCard;