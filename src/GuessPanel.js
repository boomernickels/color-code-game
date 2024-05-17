import { Card, Col, Container, Row } from 'react-bootstrap';
import GameRow from './GameRow';

function GuessPanel() {
    return (
        <Card body bg="light">
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">Enter your guess:</Col>
                </Row>
                <GameRow values={[0, 0, 0, 0]} />
            </Container>
        </Card>
    );
}

export default GuessPanel;
