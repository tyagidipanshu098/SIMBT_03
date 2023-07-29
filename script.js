
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5e0d5f0203msh1789e99066d7d86p11a902jsn90bf4844af78',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

 /*-------Search city and display Temperature-------*/

	async function getWeatherData(city) {		
	try {
		
		const city = document.getElementById("input").value;
		const cityname=document.getElementById("cityName");
        cityname.innerHTML=city;
		const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
		const response = await fetch(url, options);
		const result = await response.text();

		const lastResult = JSON.parse(result);
		const Temp = lastResult.temp;
		const Humidity = lastResult.humidity;
		const Windspeed = lastResult.wind_speed;
		const winddegrees = lastResult.wind_degrees;
		const mintemp = lastResult.min_temp;
		const maxtemp = lastResult.max_temp;


        

		document.getElementById("temp").innerHTML = Temp + '°C';
		document.getElementById("humidity").innerHTML = Humidity + '%';
		document.getElementById("windspeed").innerHTML = Windspeed +'kph';
		document.getElementById("winddegrees").innerHTML = winddegrees + '°';
		document.getElementById("mintemp").innerHTML = mintemp + '°C';
		document.getElementById("maxtemp").innerHTML = maxtemp + '°C';

       /*----------Change weather icons acc to temp value----------*/
	   
        var img = document.getElementById("img1");
		if(Temp>=28){
			img.src="images/sunny.png";
		}
		else if(Temp<28 && Temp>=15){
            img.src="images/clouds.png"
		}
		else{
			img.src="images/snow.png"
		}
		

	} catch (error) {
		console.error(error);
	}
}


const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    getWeatherData();
});

 /*----------Convert degree to farenheit-----*/

const checkbox = document.getElementById("f");
checkbox.addEventListener("change", function() {
    const temperatureElement = document.getElementById("temp");
    const currentTemperature = parseFloat(temperatureElement.innerText);

    if (checkbox.checked) {
        const fahrenheitTemperature = (currentTemperature * 9) / 5 + 32;
        temperatureElement.innerHTML = fahrenheitTemperature.toFixed(0) + '°F';
    } else {
        const celsiusTemperature = ((currentTemperature - 32) * 5) / 9;
        temperatureElement.innerHTML = celsiusTemperature.toFixed(0) + '°C';
    }
});


/*-------change theme-------*/

document.getElementById("theme").addEventListener("click", change); 
function change(){
	if(window.getComputedStyle(container).backgroundImage.slice(34,40) == "01.png"){
		document.getElementById("container").style.backgroundImage = "url(images/04.png)";
	}
	else{
		document.getElementById("container").style.backgroundImage = "url(images/01.png)";
	}

	if(window.getComputedStyle(themescroller).background == "rgb(99, 98, 98)"){
		document.getElementById("themescroller").style.transform = "translateX(10px)";
		document.getElementById("themescroller").style.background = "#ffcc80";
	}
	else{
		document.getElementById("themescroller").style.transform = "translateX(-10px)";
		document.getElementById("themescroller").style.background = "#636262";
	}
   
}
