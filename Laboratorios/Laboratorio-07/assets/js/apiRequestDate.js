let form = null;
let fromDateInput = null;
let cardsContainer = null;
let loadingOverlay = null;

const baseUrl = "https://api.nasa.gov";
const API_KEY = "KHefOpgTeBukhQAgBb8Zu14XaBjXXea4oXsascUF";

const bindElements = () => {
  form = document.querySelector("#form");
  fromDateInput = document.querySelector("#from-date");
  cardsContainer = document.querySelector("#container-cards");
  loadingOverlay = document.getElementById("loading-overlay");
}

const addEventListeners = () => {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    getData();
  });
}

const loading = (complete) => {
  if (complete) {
    loadingOverlay.style.display = "none";
   }
   else {
    loadingOverlay.style.display = "flex";
   }
}

const getData = async () => {
  const queryParams = new URLSearchParams();
  const selectedDate = fromDateInput.value;

  queryParams.append("api_key", API_KEY);
  queryParams.append("date", selectedDate);
  queryParams.append("thumbs", "true");
  const urlWithParams = `${baseUrl}/planetary/apod?${queryParams.toString()}`

  try {
    const response = await fetch(urlWithParams);

    if (response.ok) {
      const data = await response.json(); // Parse the response as JSON
      loading(true);                      // Hide the loading overlay
      displayData(data);               // Display the data on the card
    } else if (response.status === 400 || response.status === 404) {
      const errorData = await response.json();
      throw new Error(`The request was not successful: ${errorData.msg}`);
    } else {
      throw new Error(`The request was not successful`);
    }
  } catch (error) {
    loading(true);                              // Hide the loading overlay
    showErrorAlert(error);                      // Display an error using a function declared later
    console.error("An error occurred:", error); // Show the error in the console
  }

}

/**
 * displayData
 *
 * This function is used to print one card element into
 * cards container. 
 *
 * @param object: this function receives one single register
 */
const displayData = ({ date, explanation, media_type, title, url, thumbnail_url }) => {
  const mediaURL = media_type === "image" ? url : thumbnail_url;

  const encodedExplanation = encodeURIComponent(explanation);

  cardsContainer.innerHTML = `
    <li class="card">
      <div class="card__content">
        <h3 class="card__title">
        <a href="description.html?date=${date}&explanation=${encodedExplanation}&title=${title}&mediaURL=${mediaURL}" class="card__link">
            ${title}
          </a>
        </h3>
        <time class="card__date">${date}</time>
      </div>
      <img class="card__img" src="${mediaURL}" alt="${title}" />
    </li>
  `;
};

const showErrorAlert = (msg) => {
  alert(msg || "An unexpected error occurred");
}

const main = () => {
  bindElements();
  addEventListeners();
}

window.onload = main;

