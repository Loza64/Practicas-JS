let form = null;
let toDateInput = null;
let fromDateInput = null;
let cardsContainer = null;
let loadingOverlay = null;

const baseUrl = "https://api.nasa.gov";
const API_KEY = "KHefOpgTeBukhQAgBb8Zu14XaBjXXea4oXsascUF";

const bindElements = () => {
  form = document.querySelector("#form");
  toDateInput = document.querySelector("#to-date");
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
  const fromDate = fromDateInput.value;
  const toDate = toDateInput.value;

  const queryParams = new URLSearchParams();

  queryParams.append("api_key", API_KEY);
  queryParams.append("start_date", fromDate);
  queryParams.append("end_date", toDate);
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
 * This function is used to print multiple card elements into
 * cards container. 
 *
 * @param array: this function receives an array of registers
 */
const displayData = (data) => {
  let cardsHTML = "";

  // Determine the media URL based on the media_type
  data.forEach((element) => {
    const mediaURL =
      element.media_type === "image"
        ? element.url
        : element.thumbnail_url;

    // Build the HTML for each card
    const encodedExplanation = encodeURIComponent(element.explanation);

    cardsHTML += `
      <li class="card">
        <div class="card__content">
          <h3 class="card__title">
          <a href="description.html?date=${element.date}&explanation=${encodedExplanation}&title=${element.title}&mediaURL=${mediaURL}" class="card__link">
              ${element.title}
            </a>
          </h3>
          <time class="card__date">${element.date}</time>
        </div>
        <img class="card__img" src="${mediaURL}" alt="${element.title}" />
      </li>
      `;
  });

  cardsContainer.innerHTML = cardsHTML;
}

const showErrorAlert = (msg) => {
  alert(msg || "An unexpected error occurred");
}

const main = () => {
  bindElements();
  addEventListeners();
}

window.onload = main;
