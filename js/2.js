const regionEurope_spanish = fetch("https://restcountries.eu/rest/v2/lang/es")
  .then((data) => data.json())
  .then((data) => data.filter((x) => x.region == "Europe"))

  .then((countries) => countries.forEach((country) => createFlag(country)));

// .catch((errMsg) => console.log("Data not found"));
//
function createFlag({ name, flag, population, region = "europe", capital }) {
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
