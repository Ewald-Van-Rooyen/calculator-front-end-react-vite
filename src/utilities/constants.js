// Could also be contained in a .env, or config file
// freeze ensures that the object is truly immutable

export const buttonsConfig = ["clear", "symbol", "modulo", "division",
    7, 8, 9, "multiply",
    4, 5, 6, "minus",
    1, 2, 3, "plus",
    0, ".", "delete", "equals"]

export const arithmaticButtons = {
    division: "÷",
    multiply: "x",
    minus: "-",
    plus: "+",
    equals: "="
}

export const functionsButtons = {
    clear: "C",
    symbol: "±",
    delete: "⌫",
    modulo: "%"
}
