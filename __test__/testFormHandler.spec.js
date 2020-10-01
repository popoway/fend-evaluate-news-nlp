// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler"
import * as Client from "../src/client/js/nameChecker"

// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe("Testing the submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.
    test("Testing the handleSubmit() function", done => {
        // Define the input for the function, if any, in the form of variables/array
        const input = 'https://www.bbc.com/news/election-us-2020-54365868'
        // Define the expected output, if any, in the form of variables/array
        const expected = /"msg":"OK"/

        const event = { preventDefault: () => {} }; // Mock event.preventDefault() in Jest
        jest.spyOn(event, 'preventDefault');

        const Client = { checkForName: jest.fn()}
        Client.checkForName.mockReturnValue(true);

        // Set up our document body
        document.body.innerHTML =
          `<input id="name" type="text" name="input" value="${input}" placeholder="Enter a valid URL to evaluate">`;

        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        return handleSubmit(event).then(data => {
            expect(data).toMatch(expected)
        });
})});
