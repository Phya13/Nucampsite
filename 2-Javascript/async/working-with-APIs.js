/* Async Programming with setTimeout */
//setTimeout - delay code execution
//example-
console.log("Party starts in 3 seconds!");

setTimeout(() => {
  console.log("welcome to the party!");
}, 3000);

console.log("Get ready!");

/* Promise and the Trivia Game */
//Promise - helps manage asynchronous
//- writes cleaner and maintainable codes
//example-
const getQuestion = () => {
  return new Promise((resolve, reject) => {
    //Similating a trivia question fetch
    setTimeout(() => {
      const question = "What is the capital to France?";
      resolve(question);
    }, 1000);
  });
};

getQuestion().then((question) => {
  console.log("Question: ", question);
});

/* Priomise Chaining with Jokes API */
// .then() - sequentially process the response
// - extract the joke data
// - handle any error that may occur
fetch("https://official-joke-api.appspot.com/random_joke")
  .then((response) => response.json())
  .then((joke) =>
    console.log(`Here's a joke: ${joke.setup} \n${joke.punchline}`)
  )
  .catch((error) => console.error("There was an error!", error));

/* Async/await and Fetch API with Jokes */
// use async/await with the Fetch API to get more jokes
async function fetchJoke() {
  try {
    let response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    let joke = await response.json();
  } catch (error) {
    console.error("There was an error!", error);
  }
}

fetchJoke();

/* Why DO Some APIs Require Keys? */
// Identification: They identify the calling program and developer, ensuring only authorized parties can access the data.
// Rate Limitting: They can control the number of requests from a particular user, preventing abuse of the service.
// Tracking and Analytics: They help service providers track how their APIs are being used and by whom.
// Security: They add an additional layer of security by limiting who can access the API.

/* Basic Security Considerations about APIs */
// Keep It Secret: Never expose API keys in client-side code. Anyone can inspect the code and see the key.
// Don't Commit your Key to Repositories: if you're using a version control system like Git, don't commit files containing your keys.
// Use Environment Variables: One common way to keep an API key secure is to store it in a variable. This keeps the key out of your source code, making it less likely to be accidentally shared or exposed.
