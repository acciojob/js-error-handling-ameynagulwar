class OutOfRangeError extends Error {
  constructor() {
    super();
    this.name = this.constructor.name;
    this.message = "Expression should only consist of integers and +-/* characters and not < arg >";
  }
}

class InvalidExprError extends Error {
  constructor() {
    super();
    this.name = this.constructor.name;
    this.message = "Expression should not have an invalid combination of operators";
  }
}

function evalString(expression) {
  try {
    if (expression.match(/[^\d\s\+\-\*\/]/)) {
      throw new OutOfRangeError();
    }

    if (/\+\+|--|\+\-|\-\+|\/\+|\*\+/.test(expression)) {
      throw new InvalidExprError();
    }

    if (/^[\+\*\/]/.test(expression)) {
      throw new SyntaxError("Expression should not start with an invalid operator");
    }

    if (/[\+\*\/\-]$/.test(expression)) {
      throw new SyntaxError("Expression should not end with an invalid operator");
    }

    // Perform the evaluation or further processing here
    // ...

    console.log("Expression is valid");
  } catch (error) {
    if (error instanceof OutOfRangeError || error instanceof InvalidExprError) {
      console.error(`${error.name}: ${error.message}`);
    } else {
      throw error;
    }
  }
}

// Test cases
try {
  evalString("1 + 2"); // Valid expression
  evalString("3 + a"); // Handling invalid char 1
  evalString("4 + 5 +"); // Handling invalid char 3
  evalString("-2 + 3"); // Should handle the addition of negative values
  evalString("2 ++ 3"); // Combination of operator 1
  evalString("/ 2 + 3"); // Invalid operator before the first integer
  evalString("2 + 3 +"); // Should handle Invalid termination of expression.
  evalString("6 % 2"); // Handling invalid char 2
  evalString("8 + 9"); // Handling of spaces
  evalString("2 * 4"); // Basic multiplication string
  evalString("2 ++ 3"); // Invalid addition
  evalString("7 - 5"); // Basic subtraction string
  evalString("-5"); // Negative value
  evalString("10 / 2"); // Basic division string
} catch (error) {
  console.error(error);
}
