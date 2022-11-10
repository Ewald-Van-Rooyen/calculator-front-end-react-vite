import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { buttonsConfig } from '../../utilities/constants';
import { selectButtonColor, selectButtonValue } from '../../utilities/buttonsUtils';
import { CircularButton } from './CircularButton';

export function ButtonsContainer({onclickCallback}) {
    return (<Container>
        <Row md={4}>
            {buttonsConfig.map((button) => {
                return (<Col className="buttonColumn"><CircularButton color={selectButtonColor(button)} 
                value={selectButtonValue(button)} 
                callback={() => onclickCallback(selectButtonValue(button))} /></Col>)
            })}
        </Row>
    </Container>);
}