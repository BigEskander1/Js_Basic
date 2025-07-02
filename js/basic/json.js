// JSON = ( javascript object notation ) data interchange format
// JSON is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate.
// JSON exchange data between a server and a web application as text.
// JSON files (key : value ) or [val1 , val2 , val3] or  [{key : value}, {key : value}] format

// JSON.stringify() converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified, or optionally including only the specified properties if a replacer array is specified.
// JSON.parse() parses a JSON string, constructing the JavaScript value or object described by the string.

const names = ["John", "Jane", "Doe"];
const jsonString = JSON.stringify(names); // Convert array to JSON string
console.log(jsonString); // Output: '["John","Jane","Doe"]'
console.log(names); 
const parsedNames = JSON.parse(jsonString); // Convert JSON string back to array
console.log(parsedNames); // Output: ['John', 'Jane', 'Doe']

const person = [
    {
        "name": "John Doe",
        "age": 30,
        "email": "iVd0m@example.com"
    },
    {
        "name": "Jane Smith",
        "age": 25,
        "email": "iVd0m@example.com"
    },
    {
        "name": "Alice Johnson",
        "age": 28,
        "email": "iVd0m@example.com"
    }

];

const jsonPerson = JSON.stringify(person); // Convert array of objects to JSON string
console.log(jsonPerson);

console. log("----------------------------------------------------")
fetch("person.json")
    .then(response => response.json()) // Parse JSON response
    .then(values => values.forEach(value => {console.log(value) })) // Log each person's name
    .catch(error => console.error('Error fetching JSON:', error)); // Handle errors
