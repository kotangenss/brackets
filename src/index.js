module.exports = function check(str, bracketsConfig) {

  let openBrackets = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
  }

  let bracketsPair = bracketsConfig.reduce((accum, pair) => {
    accum[pair[1]] = pair[0];
    return accum;
  }, {})

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    if (stack.length != 0) {
      let topElement = stack[stack.length - 1];
      if (bracketsPair[currentSymbol] === topElement) {
        stack.pop();
      } else if (bracketsPair[currentSymbol] === undefined || openBrackets.includes(currentSymbol)) {
        stack.push(currentSymbol);
      } else {
        return false;
      }
    } else {
      if (openBrackets.includes(currentSymbol)) {
        stack.push(currentSymbol);
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}
