import { useState, useCallback } from "react";
import { useMutation } from "react-query";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

import { Screen } from "./components/screen/Screen";
import { ButtonsContainer } from "./components/buttons/ButtonsContainer";
import { isArithmaticValue, isFunctionalValue, returnFunctionButtonValue } from "./utilities/buttonsUtils";
import { isValidEquation, containsArithmeticElements } from "./utilities/arithmeticUtils";
import { postCalculation } from "./services/api/arithmeticServices";

import "./App.css";

const DEFAULT_STATE = "0";

function App() {
  const [screenValue, setScreenValue] = useState(DEFAULT_STATE);

  const mutation = useMutation((value) => {
    return postCalculation(`${import.meta.env.VITE_BACK_END_BASE_URL}/calculate`, value);
  }, {
    onSuccess: (result) => {
      setScreenValue(result.data);
    }
  });

  // TODO this is borderline to complex and big
  const updateScreenValue = useCallback((value) => {
    const inputValue = value.toString();

    if (isArithmaticValue(inputValue)) { // plus, minus, devide, multiply, equal
      if (inputValue === "=") {
        if (isValidEquation(screenValue)) {
          mutation.mutate(screenValue);
          setScreenValue(DEFAULT_STATE);
        }
      } else {
        setScreenValue(previousValue => {
          const convertedPreviousValue = previousValue.toString();

          if (convertedPreviousValue === DEFAULT_STATE) {
            return convertedPreviousValue;
          }
          else if (!containsArithmeticElements(convertedPreviousValue)) {
            return convertedPreviousValue + "" + inputValue;
          }
          return convertedPreviousValue;
        });
      }
    } else if (isFunctionalValue(inputValue)) { // clear , change symbol, modulo
      setScreenValue(previousValue => {
        const convertedPreviousValue = previousValue.toString();
        return returnFunctionButtonValue(convertedPreviousValue, inputValue);
      });
    } else {
      setScreenValue(previousValue => { // all number and dots
        const convertedPreviousValue = previousValue.toString();
        if(inputValue === ".") return convertedPreviousValue;
        if (convertedPreviousValue === DEFAULT_STATE || inputValue == ".") return inputValue;
        return convertedPreviousValue + "" + inputValue;
      });
    }
  });

  return (
    <Container className="App">
      {/* {mutation.isLoading && <Spinner animation="border" role="status"></Spinner>} */}
      <Row>
        <Screen displayText={screenValue} />
      </Row>
      <Row>
        <ButtonsContainer onclickCallback={updateScreenValue} />
      </Row>
    </Container>
  )
}

export default App;
