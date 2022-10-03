let data_,data2
const api = async () => {
    let response = await fetch("https://countriesnow.space/api/v0.1/countries/capital/");
    if (!response.ok) {
       throw new Error(`HTTP error! status: ${response.status}`);
   }
data_=await response.json();
   
   let cities;
    cities= data_.data.map((item) => {
        return(
           
            `<li ><a href="#" onclick="getResponse('${item.capital}')"> ${item.capital}</a></li>`
                      
                );   
});
document.querySelector(".switch").innerHTML = cities.join("");
}
 
   api();
let weather=''
   async function getResponse(city) {

    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=52922fa07c551a030f9701eff376927a`);
    if (!response.ok) {
       throw new Error(`HTTP error! status: ${response.status}`);
   }
   data2= await response.json();  
       function getData(){
        return `<img width="100px" src="http://openweathermap.org/img/wn/${data2.weather[0].icon}@2x.png" />
        <div class="C_temp">${CF(data2.main.temp)}</div>
        <div>${data2.name}</div>
        <div>${data2.weather[0].description}</div>
        
        
        <div class="minMx">
        <div class="MX"> ${CF(data2.main.temp_max)}</div>
        <div class="MX"> ${CF(data2.main.temp_min)}</div>
        
       </div>

        <div>Humidity: ${data2.main.humidity}%</div>
        <div>Wind speed: ${data2.wind.speed} MPH</div>

` 
    }
     let weather_=[...getData()]
    // console.log(weather_)
   
   document.querySelector(".cityWeather").innerHTML = weather_.join("");
} 
function CF(v1){
    let x=(v1-32)/1.8;
    return `${Math.round(x)}°C`
}
// function myFunction() {
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.querySelector("#myInput");
//     filter = input.value.toUpperCase();
//     ul = document.querySelector("#myUL");
//     li = ul.querySelector("li");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].querySelector("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }