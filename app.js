
    function getWeather(){

// create a request object
let req = new XMLHttpRequest();
// set the request type and URL
let locationT = document.getElementById('locationText').value;
let url=`https://api.openweathermap.org/data/2.5/weather?q=${locationT}&appid=93f26e3c57081a6210de53b8dcfdfea4`
req.open('GET',url,true);

//onload of request
req.onload = function(){
    if(req.status>=200 && req.status <400){
        //get the information
        let data = JSON.parse(req.responseText);
        console.log(data);
        console.log(data.main.temp-273.15);
        let ctemp =data.main.temp-273.15;
        console.log(data.name);
        document.getElementById('temp').textContent = Math.floor(ctemp);
        document.getElementById('loca').textContent = data.name;
        document.getElementById('windspeed').textContent = " Wind speed is "+data.wind.speed;

        console.log(data.weather[0].icon);
    }
}
//send the request
req.send();

// message on error 
req.onerror = function() {
    console.log("Error!!")
}
}
