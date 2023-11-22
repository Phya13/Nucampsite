// // // Fetch API // // //
// Introduction
/* A GET request is used to retrieve data from a server. Using Fetch, you make a GET request using Promise chaining, as follows */
fetch("https://api.examl.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("There was an error!", error));

//Working with Async/Await
/* We can also fetch the same data using Async/Await. Here is what the syntax looks like; */
async function fetchData() {
  try {
    let response = await fetch("https: //api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There was an error!", error);
  }
}

fetchData();

//Handling Responses
//response.json(): Used to handle JSON data.
//response.text(): Used to handle plain text data.

fetch("https://api.example.com/text")
  .then((response) => response.text())
  .then((text) => console.log(text));

//example:
fetch("https://api.example.com/data").catch((error) =>
  console.error("Network error:", error)
);
