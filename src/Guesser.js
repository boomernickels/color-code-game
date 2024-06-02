import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import CodePanel from "./CodePanel";
import Button from "react-bootstrap/Button";

function Guesser({ onSubmit }) {
    const [guess1, setGuess1] = useState(0);
    const [guess2, setGuess2] = useState(0);
    const [guess3, setGuess3] = useState(0);
    const [guess4, setGuess4] = useState(0);

    function submit() {
        onSubmit([guess1, guess2, guess3, guess4]);
        setGuess1(0);
        setGuess2(0);
        setGuess3(0);
        setGuess4(0);
    }

    function guessColor(index, colorId) {
        let updater;
        switch (index) {
            case 1:
                updater = setGuess1;
                break;
            case 2:
                updater = setGuess2;
                break;
            case 3:
                updater = setGuess3;
                break;
            case 4:
                updater = setGuess4;
                break;
        }
        updater(colorId);
    }

    return (
        <>
            <CodePanel hideEval values={[guess1, guess2, guess3, guess4]} />
            <Container>
                <Row className="justify-content-sm-center">
                    <Col xs="auto">
                        <Card body style={{ width: '4rem' }} className="Game border-0">
                            &nbsp;
                        </Card>
                    </Col>
                    <Col xs="auto">
                        <Card body className="Code-panel mt-1 mb-1">
                            <p>Make a guess</p>
                            <Stack direction="horizontal" gap={4}>
                                <Stack gap={1}>
                                    <button className="Guess-button Red-marker" onClick={() => guessColor(1, 1)} />
                                    <button className="Guess-button Blue-marker" onClick={() => guessColor(1, 2)} />
                                    <button className="Guess-button Yellow-marker" onClick={() => guessColor(1, 3)} />
                                    <button className="Guess-button Green-marker" onClick={() => guessColor(1, 4)} />
                                    <button className="Guess-button White-marker" onClick={() => guessColor(1, 5)} />
                                    <button className="Guess-button Black-marker" onClick={() => guessColor(1, 6)} />
                                </Stack>
                                <Stack gap={1}>
                                    <button className="Guess-button Red-marker" onClick={() => guessColor(2, 1)} />
                                    <button className="Guess-button Blue-marker" onClick={() => guessColor(2, 2)} />
                                    <button className="Guess-button Yellow-marker" onClick={() => guessColor(2, 3)} />
                                    <button className="Guess-button Green-marker" onClick={() => guessColor(2, 4)} />
                                    <button className="Guess-button White-marker" onClick={() => guessColor(2, 5)} />
                                    <button className="Guess-button Black-marker" onClick={() => guessColor(2, 6)} />
                                </Stack>
                                <Stack gap={1}>
                                    <button className="Guess-button Red-marker" onClick={() => guessColor(3, 1)} />
                                    <button className="Guess-button Blue-marker" onClick={() => guessColor(3, 2)} />
                                    <button className="Guess-button Yellow-marker" onClick={() => guessColor(3, 3)} />
                                    <button className="Guess-button Green-marker" onClick={() => guessColor(3, 4)} />
                                    <button className="Guess-button White-marker" onClick={() => guessColor(3, 5)} />
                                    <button className="Guess-button Black-marker" onClick={() => guessColor(3, 6)} />
                                </Stack>
                                <Stack gap={1}>
                                    <button className="Guess-button Red-marker" onClick={() => guessColor(4, 1)} />
                                    <button className="Guess-button Blue-marker" onClick={() => guessColor(4, 2)} />
                                    <button className="Guess-button Yellow-marker" onClick={() => guessColor(4, 3)} />
                                    <button className="Guess-button Green-marker" onClick={() => guessColor(4, 4)} />
                                    <button className="Guess-button White-marker" onClick={() => guessColor(4, 5)} />
                                    <button className="Guess-button Black-marker" onClick={() => guessColor(4, 6)} />
                                </Stack>
                            </Stack>
                            <Button className="mt-3" onClick={submit}>Submit</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Guesser;