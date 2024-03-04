
async function getCountries() {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const countries = await response.json();
  return countries;
}

async function getWeatherData(country) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=46234652982caa9354b79e2307bde7b8`);
  const data = await response.json();
  return data;
}

function displayCountry(country, weatherData) {
  const card = document.createElement('div');
  card.className="col-md-4"
  card.innerHTML = `
  <div class="card" style="width: 20rem;">
    <h5 class="card-title"><b>${country.name.common}</b></h5>
      <img src="${country.flags.png}" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text"><b>Capital: </b>${country.capital}</p>
        <p class="card-text"><b>LatLng: </b>${country.latlng[0]}, ${country.latlng[1]}</p>
        <p class="card-text"><b>Country codes: </b>${country.cca3}</p>
        <p class="card-text"><b>Region: </b>${country.region}</p>
        <button class="btn btn-primary" id="weather-btn">Show Weather</button>
      </div>
    </div>
  `;
  return card;
}

async function main() {
  const countries = await getCountries();
  const body = document.getElementsByTagName('body')[0];
  for (const country of countries) {
    const weatherData = await getWeatherData(country);
    const card = displayCountry(country, weatherData);
    body.appendChild(card);
    const button = card.querySelector('#weather-btn');
    button.addEventListener('click', () => {
      alert(`

Temperature    :  ${weatherData.main.temp}
                        
Weather           :  ${weatherData.weather[0].description}

Humidity         :  ${weatherData.main.humidity}`);             
    });
  }
}

document.addEventListener('DOMContentLoaded', main);