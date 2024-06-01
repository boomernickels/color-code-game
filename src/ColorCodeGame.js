import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Stack from "react-bootstrap/Stack"
import CodePanel from "./CodePanel";

function ColorCodeGame() {
    const [answer, setAnswer] = useState(() => initAnswer());
    const [showAnswer, setShowAnswer] = useState(false);
    const maskedAnswer = [0, 0, 0, 0];

    function initAnswer() {
        return [
            getRandomColorId(),
            getRandomColorId(),
            getRandomColorId(),
            getRandomColorId()
        ];
    }

    function toggleShowAnswer() {
        setShowAnswer(!showAnswer);
    }

    function getRandomColorId() {
        let val = Math.floor(Math.random() * 10);
        while (val > 5) {
            val = Math.floor(Math.random() * 10);
        }
        return val + 1;
    }

    return (
        <div className="Game">
            <Container>
                <Row>
                    <Col>&nbsp;</Col>
                    <Col xs={3}>
                        <Button variant="link" onClick={toggleShowAnswer}>{(showAnswer ? "Turn off" : "Turn on") + " Test Mode"}</Button>
                    </Col>
                </Row>
            </Container>
            <Stack>
                <CodePanel hideEval values={showAnswer ? answer : maskedAnswer} />
                <hr></hr>
                <CodePanel values={maskedAnswer} />
            </Stack>
        </div>
    );
}

export default ColorCodeGame;
