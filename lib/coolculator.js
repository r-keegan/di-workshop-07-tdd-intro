class Coolculator {

  add(...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous + current;
    });
  }

  multiply(a, b) {
    return a * b
  }

  subtract(a, b) {
    return a - b
  }

  divide(a, b) {
    return a / b
  }

  highest(a, b) {
    if (a > b) {
      return a
    } else {
      return b
    }
  }

}

module.exports = Coolculator
