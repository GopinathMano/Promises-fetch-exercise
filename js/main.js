const regionAsia = fetch("https://restcountries.eu/rest/v2/region/asia")
  .then((data) => data.json())

  .catch((errMsg) => console.log("Data not found"));

const regionEurope = fetch("https://restcountries.eu/rest/v2/region/europe")
  .then((data) => data.json())

  .catch((errMsg) => console.log("Data not found"));

Promise.all([regionAsia, regionEurope])
  .then((merge) => merge[0].concat(merge[1]))
  // .then((all) => console.log(all))
  .then((countries) => countries.forEach((country) => createFlag(country)))
  .catch((errMsg) => console.log("Data not found"));

function createFlag({ name, flag, population, region, capital }) {
  const info = document.createElement("div");
  info.setAttribute("class", "container");

  info.innerHTML = `
    <div class="flag-container">
     <img class="flag" src=${flag} width="250px" height="150px" alt="Countries-flag">
   </div>
<div class="details">
  <h3>${name} </h3>
    <p><b>population :</b> ${population} </p>
    <p><b>Region :</b> ${region} </p>
    <p><b>Capital :</b> ${capital} </p>
  </div>
 
    `;
  document.body.append(info);
}
