// API
const API_ENDPOINT = 'https://yesno.wtf/api';


fetch('https://yesno.wtf/')
.then(Response => Response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

addEventListener


/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
