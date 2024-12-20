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

