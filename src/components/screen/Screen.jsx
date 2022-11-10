import Container from 'react-bootstrap/Container';
import "./screen.css"

export function Screen({ displayText }) {
    return (<>
        <Container fluid className="screen-container">
            {displayText}
        </Container>
    </>)
}