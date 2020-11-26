const {
    add,
    sum,
    subtract,
    multiply,
    divide,
    percentage,
    factorial,
    fibonacci,
    promiseAllTheWay
  } = require("./utils");
  
  describe("Utils Test Suite", () => {
    describe("Add", () => {
      it("Should throw an error if value passed is not a number", () => {
        expect(() => add("a", NaN)).toThrow();
      });
      it("Should not add two integer numbers together incorrectly", () => {
        const result = add(2, 2);
        expect(result).not.toBe(0);
      });
      it("Should add two integer numbers together correctly", () => {
        const result = add(1, 2);
        expect(result).toBe(3);
      });
      it("Should add two decimal numbers together correctly", () => {
        const result = add(0.1, 0.2);
        expect(result).toBeCloseTo(0.3);
      });
    });
  
    describe("Subtract", () => {
      it("Should throw an error if value passed is not a number", () => {
        expect(() => subtract("a", NaN)).toThrow();
      });
      it("Should subtract one number from another", () => {
        const result = subtract(2, 1);
        expect(result).toBe(1);
      });
    });
  
    describe("Multiply", () => {
      it("Should throw an error if value passed is not a number", () => {
        expect(() => multiply("a", NaN)).toThrow();
      });
      it("Should multiply one number with another", () => {
        const result = multiply(2, 2);
        expect(result).toBe(4);
      });
    });
  
    describe("Divide", () => {
      it("Should throw an error if value passed is not a number", () => {
        expect(() => divide("a", NaN)).toThrow();
      });
      it("Should divide one number with another", () => {
        const result = divide(10, 5);
        expect(result).toBe(2);
      });
    });
  
    describe("Percentage", () => {
      it("Should throw an error if value passed is not a number", () => {
        expect(() => percentage("a", NaN)).toThrow();
      });
      it("Should return the percentage of a number in regards to another", () => {
        const result = percentage(100, 10);
        expect(result).toBe(10);
        const result2 = percentage(97.38, 10);
        expect(result2).toBeCloseTo(9.738);
      });
    });
  
    describe("Factorial", () => {
      it("Should throw an error if value passed is not a number", () => {
        expect(() => factorial(NaN)).toThrow();
      });
      it("Should return 1 if the input is 0", () => {
        const result = factorial(0);
        expect(result).toEqual(1);
      });
      it("Should return the factorial of any given positive number", () => {
        const result = factorial(4);
        expect(result).toEqual(24);
      });
    });
  
    describe("Fibonacci", () => {
      it("Should throw an error if value passed is not a number", () => {
        expect(() => fibonacci(NaN)).toThrow();
      });
      it("Should return a length of the Fibonacci sequence numbers", () => {
        const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
        const result = fibonacci(10);
        expect(result).toEqual(fibo);
      });
    });
  
    describe("sum", () => {
      it("Should sum all the number in a given array", () => {
        const result = sum([1, 2, 3, 4, 5]);
        expect(result).toBe(15);
      });
      it("Should throw an error if value passed is not an array", () => {
        const wrongInputs = [[1, "a", 3, NaN, Infinity], "Papaya", []];
        wrongInputs.forEach((input) => {
          expect(() => sum(input)).toThrow();
        });
      });
    });
    describe("Promises all the way", () => {
      it("Should return a promise with a resolved value of 42", () => {
        return promiseAllTheWay(true).then((result) => expect(result).toBe(42));
      });
      it("Should throw an error if the condition is not met", () => {
        return promiseAllTheWay().catch((e) =>
          expect(e).toEqual({ error: "Something wrong happened" })
        );
        // it("Should throw an error if the condition is not met", async () => {
        //   const result = await promisesAllTheWay(true)
        //   expect(result).toEqual(42)
        // })
      });
    });
  });
  