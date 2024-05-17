import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Marker from "./Marker";

function GameRow({ values }) {
    return (
        <Row className="justify-content-md-center">
            <Col md="auto">
                <Marker colorId={values[0]} />
            </Col>
            <Col md="auto">
                <Marker colorId={values[1]} />
            </Col>
            <Col md="auto">
                <Marker colorId={values[2]} />
            </Col>
            <Col md="auto">
                <Marker colorId={values[3]} />
            </Col>
        </Row>
    );
}

export default GameRow;
