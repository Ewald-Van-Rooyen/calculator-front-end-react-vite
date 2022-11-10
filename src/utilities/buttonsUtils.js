import { arithmaticButtons, functionsButtons } from './constants';

function getKeyByValue(obj, value) {
    return Object.keys(obj).find(key => obj[key] === value);
}

function deleteLastCharacter(buttonValue) {
    return buttonValue.substring(0, buttonValue.length - 1) || "0";
}

export function selectButtonColor(buttonEnum) {
    if (isArithmaticButton(buttonEnum)) return "yellow";
    if (isFunctionalButton(buttonEnum)) return "light-grey";
    return "grey";
}

export function selectButtonValue(buttonEnum) {
    if (isArithmaticButton(buttonEnum)) return arithmaticButtons[buttonEnum];
    if (isFunctionalButton(buttonEnum)) return functionsButtons[buttonEnum];
    return buttonEnum;
}

export function isArithmaticButton(buttonEnum) {
    return arithmaticButtons[buttonEnum] ? true : false
}

export function isFunctionalButton(buttonEnum) {
    return functionsButtons[buttonEnum] ? true : false;
}

export function isArithmaticValue(buttonValue) {
    return getKeyByValue(arithmaticButtons, buttonValue) ? true : false;
}

export function isFunctionalValue(buttonValue) {
    return getKeyByValue(functionsButtons, buttonValue) ? true : false;
}

export function returnFunctionButtonValue(previousValue, buttonValue) {
    if (buttonValue === functionsButtons.delete) return deleteLastCharacter(previousValue);
    else if(buttonValue === functionsButtons.clear) return "0";
    return previousValue;
    
}
