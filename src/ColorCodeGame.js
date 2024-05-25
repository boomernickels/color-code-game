import { useState } from "react";
import Button from "react-bootstrap/Button";
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
            <CodePanel values={showAnswer ? answer : maskedAnswer} />
            <Button onClick={toggleShowAnswer}>{(showAnswer ? "Hide" : "Show") + " Answer"}</Button>
        </div>
    );
}

export default ColorCodeGame;
