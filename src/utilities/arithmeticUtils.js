import { arithmaticButtons } from './constants';

function deconstructEquation(equationString) {
    try {
        const [x, symbol, y] = equationString.match(/[^\d()]+|[\d.]+/g);
        return { symbol, x, y }
    }
    catch (error) {
        return { undefined, undefined, undefined };
    }
}

export function isValidEquation(eqaution) {
    const { x, symbol, y } = deconstructEquation(eqaution);
    return symbol && x && y && Object.values(arithmaticButtons).includes(symbol) ; // Potential for optianal chanining
}

export function containsArithmeticElements(eqaution) {
    // Tighly coupled function, I could probably decouple from arithmaticButtons
    return Object.values(arithmaticButtons).filter(symbol => eqaution.indexOf(symbol) !== -1).length > 0
}