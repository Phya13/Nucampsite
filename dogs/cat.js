const url = "https://api.thecatapi.com/v1/images/search";

async function fetchCat() {
  try {
    let response = await fetch(url);
    let data = await response.json();
    displayCat(data.message);
  } catch (error) {
    console.error("There was an error: ", error);
  }
}

function displayCat(imageURL) {
  const img = document.createElement("img");
  img.src = imageURL;
  img.alt = "Random Cat";
  img.width = 500;
  document.querySelector("#cat").appendChild(img);
}
