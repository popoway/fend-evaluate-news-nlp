// Import the js file to test
import { checkForName } from "../src/client/js/nameChecker"

// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe("Testing the name checking functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.
    test("Testing the checkForName() function", () => {
        // Define the input for the function, if any, in the form of variables/array
        const input = ['https://www.bbc.com/news/election-us-2020-54365868', 'matchers return a Promise', '']
        // Define the expected output, if any, in the form of variables/array
        const expected = [true, false, false]

        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
        expect(checkForName(input[0])).toBeTruthy();
        expect(checkForName(input[1])).toBeFalsy();
        expect(checkForName(input[2])).toBeFalsy();
})});
