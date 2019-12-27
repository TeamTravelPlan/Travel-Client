import { Card, Icon, Button} from 'antd';
import React from 'react';
import 'antd/dist/antd.css';

const {Meta} = Card;

// Handle props
class RecommendationCard extends React.Component {
    handleOnClick = () => {
        this.props.selectItem(this.props)
    };

    render() {
        const {name, imageUrl, rating, placeId} = this.props;
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
                    title={name}
                    description={rating}
                />
            </Card>
        );
    }
}

export default RecommendationCard;