const API_KEY = "3b65430b2bfdf313e69011099018150d";

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;

	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(url)
		.then(response => response.json())
		.then(data => {
			const icon = document.createElement("img");
			icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
			icon.className = "weather-icon";
			document.querySelector("#weather").prepend(icon);

			const city = document.querySelector(".weather-city");
			const temp = document.querySelector(".weather-temp");
			city.innerText = data.name;
			temp.innerText = Math.round(data.main.temp * 10) / 10 + "º";
			// console.log(data);
		});
}

function onGeoError() {
	alert("Can;t find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);