//Introduction
async function fetchUserData() {
  let response = await fetch();
  let data = await response.json();
  return data;
}

fetchUserData().then((data) => console.log(data));

//Examining the Syntax
async function fetchData() {
  return "Data received!";
}

fetchData().then((result) => console.log(result)); //output: Data received!

async function doubleAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

async function fetchData() {
  let result = await doubleAfter2Seconds(10);
  console.log(result);
}

fetchData();

//Comparison with Promises
/*using Promises*/
doubleAfter2Seconds(10).then((result) => console.log(result));

/* using Async/Await */
async function fetchData() {
  let result = await doubleAfter2Seconds(10);
  console.log(result);
}
fetchData();

//Handling Multiple Asynchornous Operations
async function addAsync(x) {
  let a = await doubleAfter2Seconds(10);
  let b = await doubleAfter2Seconds(20);
  return x + a + b;
}

addAsync(10).then((sum) => {
  console.log(sum);
});
