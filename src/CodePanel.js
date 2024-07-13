import { Card, Container, Row, Col, Stack } from "react-bootstrap";
import Marker from "./Marker"

function CodePanel({ values, score, hideEval, showVerticleBar }) {
    let panelClass = "Code-panel";
    let winAnnouncement = "";
    if (score && score.length === 4 && score[0] === 6 && score[1] === 6 && score[2] === 6 && score[3] === 6) {
        panelClass += "-win";
        winAnnouncement = (
            <Row className="justify-content-sm-center">
                <Col xs="auto">
                    <p>You guessed it!</p>
                </Col>
            </Row>
        );
    }
    let evalPanel = hideEval ? "" : (
        <Col xs="auto">
            <Card body className={panelClass + " mt-1 mb-1"}>
                <Stack gap={1}>
                    <Stack direction="horizontal" gap={1}>
                        <Marker small colorId={score[2]} />
                        <Marker small colorId={score[3]} />
                    </Stack>
                    <Stack direction="horizontal" gap={1}>
                        <Marker small colorId={score[0]} />
                        <Marker small colorId={score[1]} />
                    </Stack>
                </Stack>
            </Card>
        </Col>
    )

    return (
        <Stack direction="horizontal">
            {
                showVerticleBar ? (
                    <Card className="Verticle-bar h-100 rounded-0" style={{ width: 5 }}></Card>
                ) : ""
            }
            <Container>
                {winAnnouncement}
                <Row className="justify-content-sm-center">
                    {evalPanel}
                    <Col xs="auto">
                        <Card body className={panelClass + " mt-1 mb-1"}>
                            <Stack direction="horizontal" gap={3}>
                                <Marker colorId={values[0]} />
                                <Marker colorId={values[1]} />
                                <Marker colorId={values[2]} />
                                <Marker colorId={values[3]} />
                            </Stack>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Stack>
    );
}

export default CodePanel;