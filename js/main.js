// API 1
async function forecast() {
  const req = await fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=5cc19a53bfa142959de192933241412&q=cairo&days=3"
  );
  const data = await req.json();
  console.log(data);
}
forecast();

// // API 2

async function getWeather() {
  const res = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=5cc19a53bfa142959de192933241412&q=lond"
  );
  const data = await res.json();
  console.log(data);
}
getWeather();

// function displayPost(list) {
//   let blackbox = "";
//   for (let i = 0; i < list.length; i++) {
//     blackbox += `<div class="post bg-white p-3 rouded-3">
//                 <h2>${list[i].name}</h2>
//                 <p>${list[i].country}</p>
//             </div>`;
//   }

//   document.getElementById("posts").innerHTML = blackbox;
// }

function displayPost(list) {
  let blackbox = "";
  for(let i=1 ; i< list.length; i++ ){
    blackbox += `  <div class="forcast-header d-flex justify-content-between text-center ">
                            <h5> ${list[i].forecast.forecastday.date} </h5>
                        </div>
                        <div class="forcast-content p-4">
                            <h4 class="location">
                            ${list[i].location.country} - 
                            ${list[i].location.name}  
                            </h4>
                            <div class="degree  d-block mb-1">
                                <h2 class="num ">20<Sup>o</Sup>C</h2>
                                <div class="forcast-icon v-middle">
                                    <img class="img-fluid" src="${list[i].current.condition.icon}" alt="">
                                </div>
                            </div>

                            <h4 class="cloud-status  my-4">${list[i].current.condition.text}</h4>
                            <span class="m-2">
                                <img class="img-fluid" src="./Images/icon-umberella.png" alt="">
                                20%
                            </span>
                            <span class="m-2">
                                <img class="img-fluid" src="./Images/icon-wind.png" alt="">
                                18 km/h
                            </span>
                            <span class="m-2">
                                <img class="img-fluid" src="./Images/icon-compass.png" alt="">
                                East
                            </span>
                        </div>
                        <div class="forcast w-33 text-center even-block">
                          <div class="forcast-header text-center ">
                            <h5>${list[i].forecast.forecastday.date}</h5>
                          </div>
                        <div class="forcast-content p-4">
                            <div class="degree2nd  d-block mb-1">
                                <div class="forcast-icon v-middle">
                                    <img class="img-fluid" src="${list[i].current.condition.icon}" alt="">
                                </div>
                                <h2 class="num2nd">21.2<Sup>o</Sup>C</h2>
                                <h6 class="num2nd fw-light">11.9<Sup>o</Sup>C</h6>
                            </div>

                            <h4 class="cloud-status  my-4">${list[i].current.condition.text}</h4>
                        </div>
                    </div>

                    <div class="forcast w-33 text-center">
                        <div class="forcast-header text-center ">
                            <h5>${list[i].forecast.forecastday.date}</h5>
                        </div>
                        <div class="forcast-content p-4">
                            <div class="degree2nd  d-block mb-1">
                                <div class="forcast-icon v-middle">
                                    <img class="img-fluid" src="${list[i].current.condition.icon}" alt="">
                                </div>
                                <h2 class="num2nd">22.1<Sup>o</Sup>C</h2>
                                <h6 class="num2nd fw-light">11.7<Sup>o</Sup>C</h6>
                            </div>

                            <h4 class="cloud-status  my-4">${list[i].current.condition.text}</h4>
                        </div>
                    </div>`;
  }

  document.getElementById("forcast").innerHTML = blackbox;
}
displayPost();

// async function search(a) {       ${list[i].forecast.forecastday.0.date}
//   let t = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${a}&days=3`);
//   if (t.ok && 400 != t.status) {
//       let a = await t.json();
//       displayCurrent(a.location, a.current), displayAnother(a.forecast.forecastday);
//   }
// }
// document.getElementById("search").addEventListener("keyup", (a) => {
//   search(a.target.value);
// });
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// function displayCurrent(a, t) {
//   if (null != t) {
//       var e = new Date(t.last_updated.replace(" ", "T"));
//       let n = `<div class="today forecast">\n    <div class="forecast-header"  id="today">\n    <div class="day">${days[e.getDay()]}</div>\n    <div class=" date">${
//           e.getDate() + monthNames[e.getMonth()]
//       }</div>\n    </div> \x3c!-- .forecast-header --\x3e\n    <div class="forecast-content" id="current">\n    <div class="location">${a.name}</div>\n    <div class="degree">\n        <div class="num">${
//           t.temp_c
//       }<sup>o</sup>C</div>\n      \n        <div class="forecast-icon">\n            <img src="https:${t.condition.icon}" alt="" width=90>\n        </div>\t\n    \n    </div>\n    <div class="custom">${
//           t.condition.text
//       }</div>\n    <span><img src="images/icon-umberella.png" alt="">20%</span>\n\t\t\t\t\t\t\t\t<span><img src="images/icon-wind.png" alt="">18km/h</span>\n\t\t\t\t\t\t\t\t<span><img src="images/icon-compass.png" alt="">East</span>\n    </div>\n</div>`;
//       document.getElementById("forecast").innerHTML = n;
//   }
// }
// function displayAnother(a) {
//   let t = "";
//   for (let e = 1; e < a.length; e++)
//       t += `\t<div class="forecast">\n        <div class="forecast-header">\n            <div class="day">${
//           days[new Date(a[e].date.replace(" ", "T")).getDay()]
//       }</div>\n        </div> \x3c!-- .forecast-header --\x3e\n        <div class="forecast-content">\n            <div class="forecast-icon">\n                <img src="https:${
//           a[e].day.condition.icon
//       }" alt="" width=48>\n            </div>\n            <div class="degree">${a[e].day.maxtemp_c}<sup>o</sup>C</div>\n            <small>${a[e].day.mintemp_c}<sup>o</sup></small>\n            <div class="custom">${
//           a[e].day.condition.text
//       }</div>\n        </div>\n        </div>`;
//   document.getElementById("forecast").innerHTML += t;
// }
// search("cairo");

/* <div class="forcast-header d-flex justify-content-between text-center ">
<h5>Saturday</h5>
<h5> 14 December</h5>
</div>
<div class="forcast-content p-4">
<h4 class="location">
    Cairo
</h4>
<div class="degree  d-block mb-1">
    <h2 class="num ">20<Sup>o</Sup>C</h2>
    <div class="forcast-icon v-middle">
        <img class="img-fluid" src="./Images/116.png" alt="">
    </div>
</div>

<h4 class="cloud-status  my-4">Partly Cloud</h4>
<span class="m-2">
    <img class="img-fluid" src="./Images/icon-umberella.png" alt="">
    20%
</span>
<span class="m-2">
    <img class="img-fluid" src="./Images/icon-wind.png" alt="">
    18 km/h
</span>
<span class="m-2">
    <img class="img-fluid" src="./Images/icon-compass.png" alt="">
    East
</span>
</div> */
