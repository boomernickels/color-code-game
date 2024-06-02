import './App.css';
import { useState } from "react";
import { getRandomColorId } from "./Utils";
import Guesser from "./Guesser";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import CodePanel from "./CodePanel";
import { ButtonGroup } from "react-bootstrap";

const BlackColorId = 6;
const WhiteColorId = 5;

function App() {
    const [answer, setAnswer] = useState(() => initAnswer());
    const [showAnswer, setShowAnswer] = useState(false);
    const [guesses, setGuesses] = useState({ data: [] });
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
        setGuesses({ data: [] });
    }

    function toggleShowAnswer() {
        setShowAnswer(!showAnswer);
    }

    function submitGuess(guess) {
        let score = evaluateGuess(guess);
        guesses.data.unshift({ guess: guess, score: score });
        setGuesses({ data: guesses.data });
    }

    function evaluateGuess(guess) {
        let scores = [0, 0, 0, 0];
        let guessesUsed = [false, false, false, false];
        for (let i = 0; i < 4; i++) {
            if (answer[i] === guess[i]) {
                scores[i] = BlackColorId;
                guessesUsed[i] = true;
            }
        }
        for (let i = 0; i < 4; i++) {
            if (scores[i] === 0) {
                for (let j = 0; j < 4; j++) {
                    if (!guessesUsed[j]) {
                        if (answer[i] === guess[j]) {
                            scores[i] = WhiteColorId;
                            guessesUsed[j] = true;
                            break;
                        }
                    }
                }
            }
        }
        scores.sort();
        scores.reverse();
        return scores;
    }

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Guess the Color Code
                </p>
                <ButtonGroup className="mb-2">
                    <Button variant="link" onClick={newGame}>New Game</Button>
                    <Button variant="link" onClick={toggleShowAnswer}>Turn {showAnswer ? "Off" : "On"} Test Mode</Button>
                </ButtonGroup>
            </header>
            <div className="Game">
                <Stack>
                    <CodePanel hideEval values={showAnswer ? answer : maskedAnswer} />
                    <hr />
                    <Guesser onSubmit={submitGuess} />
                    <hr />
                    {guesses.data.map((guess) => (
                        <CodePanel values={guess.guess} score={guess.score} />
                    ))}
                </Stack>
            </div >
            <p>
            </p>
        </div>
    );
}

export default App;
