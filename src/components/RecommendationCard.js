import { Card } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';

const { Meta } = Card;

// Handle props
class RecommendationCard extends React.Component {
    render() {
        return (
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
        );
    }
}

export default RecommendationCard;