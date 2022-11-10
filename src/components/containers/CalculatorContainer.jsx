import Container from 'react-bootstrap/Container';

export function CalculatorContainer({ children }) {
    return (<>
        <Container fluid>
            {children}
        </Container>
    </>);
}