// Import the js file to test
import { handleFetch } from "../src/client/js/formHandler"

// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe("Testing the submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.
    test("Testing the handleSubmit() function", () => {
        // Define the input for the function, if any, in the form of variables/array
        const input = 'https://www.bbc.com/news/election-us-2020-54365868'
        // Define the expected output, if any, in the form of variables/array
        const expected = true

        // Mock event.preventDefault()
        const event = { preventDefault: () => {} };
        jest.spyOn(event, 'preventDefault');

        // Set up our document body
        let node = document.createElement('input');
        node.id = 'name';
        node.type = 'text';
        node.name = 'input';
        node.value = input;
        document.body.appendChild(node);
        let fields = ['loading','model','agreement','subjectivity','confidence','irony'];
        let field;
        for (field of fields) {
          let node = document.createElement('span');
          node.id = field;
          document.body.appendChild(node);
        }

        // Mock fetch API
        const handleFetch = jest.fn().mockImplementation(() => {
          document.getElementById('loading').innerHTML = 'Loading results from MeaningCloud...'
          return true;
        })
        global.fetch = jest.fn().mockImplementation(() => {
            let p = new Promise((resolve, reject) => {
              resolve({
                msg: 'OK',
                json: function() {
                  return {"msg": "OK", "model": 'general_en', "agreement": "disagreement", "subjectivity": "subjective", "confidence": "86", "irony": "nonironic"}
                }
              });
            });
            return p;
        });

        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        expect(handleFetch(input)).toBeTruthy();
})});
