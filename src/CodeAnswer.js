import Container from "react-bootstrap/Container";
import GameRow from "./GameRow";
import Card from "react-bootstrap/Card";
import { Button, CardGroup, Stack } from "react-bootstrap";

function CodeAnswer({ answer }) {
    return (
        <Card body bg="dark">
            <Container>
                <GameRow values={answer} />
            </Container>
        </Card>
    );
}

export default CodeAnswer;
