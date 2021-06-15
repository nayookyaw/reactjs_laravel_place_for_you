import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

class History extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col>
                            <div className="bg-dark" style={{ color: "white" }}>First row 1</div>
                        </Col>
                        <Col>Second row 2</Col>
                    </Row>
                    <Row>
                        <Col>First row 1</Col>
                        <Col>Sceond row 2</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default History;