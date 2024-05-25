import { Card, Container, Row, Col, Stack } from "react-bootstrap";
import Marker from "./Marker"

function CodePanel({ values }) {
    return (
        <Container>
            <Row className="justify-content-sm-center">
                <Col xs="auto">
                    <Card body className="Code-panel mt-1 mb-1">
                        <Stack gap={1}>
                            <Stack direction="horizontal" gap={1}>
                                <Marker small colorId={0} />
                                <Marker small colorId={0} />
                            </Stack>
                            <Stack direction="horizontal" gap={1}>
                                <Marker small colorId={0} />
                                <Marker small colorId={0} />
                            </Stack>
                        </Stack>
                    </Card>
                </Col>
                <Col xs="auto">
                    <Card body className="Code-panel mt-1 mb-1">
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
    );
}

export default CodePanel;