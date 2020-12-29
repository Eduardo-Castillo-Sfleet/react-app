import React from 'react';
import { Row, Col } from 'antd'


class Ant extends React.Component {

    render() {
        return(
            <Row>
                <Col span={6} offset={2}>
                    primera
                </Col>
                <Col span={6} offset={2}>
                    segunda
                </Col>
                <Col span={6} offset={2}>
                    tercera
                </Col>
            </Row>
        )
    }

}

export default Ant;