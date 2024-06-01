import { useState } from "react";
import { getRandomColorId } from "./Utils";
import Guesser from "./Guesser";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import CodePanel from "./CodePanel";

function ColorCodeGame() {
    const [answer, setAnswer] = useState(() => initAnswer());
    const [showAnswer, setShowAnswer] = useState(false);
    const [guesses, setGuesses] = useState([]);
    const maskedAnswer = [0, 0, 0, 0];

    function initAnswer() {
        return [
            getRandomColorId(),
            getRandomColorId(),
            getRandomColorId(),
            getRandomColorId()
        ];
    }

    function newGame() {
        setShowAnswer(false);
        setAnswer(initAnswer());
        setGuesses([]);
    }

    function toggleShowAnswer() {
        setShowAnswer(!showAnswer);
    }

    function submitGuess(guess) {
        guesses.push(guess);
        setGuesses([...guesses]);
    }

    return (
        <div className="Game">
            <Container>
                <Row>
                    <Col>&nbsp;</Col>
                    <Col xs={3}>
                        <Stack>
                            <Button variant="link" onClick={newGame}>New Game</Button>
                            <Button variant="link" onClick={toggleShowAnswer}>{(showAnswer ? "Turn off" : "Turn on") + " Test Mode"}</Button>
                        </Stack>
                    </Col>
                </Row>
            </Container>
            <Stack>
                <Stack direction="horizontal">
                    <CodePanel holdsAnswer values={showAnswer ? answer : maskedAnswer} />
                    <div className="ms-auto">
                        <Stack>
                            <Button variant="link" onClick={newGame}>New Game</Button>
                            <Button variant="link" onClick={toggleShowAnswer}>{(showAnswer ? "Turn off" : "Turn on") + " Test Mode"}</Button>
                        </Stack>
                    </div>
                </Stack>
                <hr />
                {guesses.map((guess) => (
                    <CodePanel values={guess} />
                ))}
                <hr />
                <Guesser onSubmit={submitGuess} />
            </Stack>
        </div >
    );
}

export default ColorCodeGame;
