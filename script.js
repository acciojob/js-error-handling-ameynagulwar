//your code here
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