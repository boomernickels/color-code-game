import { useState } from "react";
import CodeAnswer from "./CodeAnswer";
import Button from "react-bootstrap/Button";
import GuessPanel from "./GuessPanel";

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
        <>
            <CodeAnswer answer={showAnswer ? answer : maskedAnswer} />
            <GuessPanel />
            <Button onClick={toggleShowAnswer}>{(showAnswer ? "Hide" : "Show") + " Answer"}</Button>
        </>
    );
}

export default ColorCodeGame;
