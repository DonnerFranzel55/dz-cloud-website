function getLocation() {

    function success(position) {
        console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const locateURL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

        fetch(locateURL)
            .then(res => res.json())
            .then(data => {
                const locality = data.locality;
                document.querySelector('#location-city').textContent = locality

                document.querySelector('#location-ping-img').src = "/assets/img/icons/location/location_on.svg"




                console.log(locality);
                loadWeather(data, locality)
            })
    }

    function error() {
        document.querySelector('#location-ping-img').src = "/assets/img/icons/location/location_off.svg"
        console.log("404 Not Found");
    }
    navigator.geolocation.getCurrentPosition(success, error)
}
function loadWeather(data, city) {

    const latitude = data.latitude;
    const longitude = data.longitude;
    const weatherAPI = `https://api.meteonomiqs.com/rlknl9m9vxwh91p4/hood/weather/${latitude}/${longitude}/`
    const options = {
        method: 'GET',
        headers: {
            'X-BLOBR-KEY': '2FoYHdQSW9iOlVv9ww6KZHHpSijzZZFb'
        }
    }
    fetch(weatherAPI, options)
        .then(res => res.json())
        .then(data => {
            console.log(data.realtimeWeather.items[0]);
            const nowWeather = data.realtimeWeather.items[0]


            var cardContainer = document.querySelector('#card-container')





            // Erstellen Sie das äußere <div> Element
            var cardDiv = document.createElement("div");
            cardDiv.classList.add("card", "p-2", "d-flex", "flex-column", "me-3", "col-11", "col-sm-4", "col-md-3", "col-lg-4", "col-xl-2")

            //Erstell einen Location Div
            var locDiv = document.createElement('div');
            var cityName = document.createElement('h6');
            cityName.textContent = city
            locDiv.appendChild(cityName)



            // Erstellen Sie das innere <div> Element für die Zeile mit Inhalten
            var innerDiv = document.createElement("div");
            innerDiv.classList.add("clearfix")

            // Erstellen Sie das <div> Element für die Temperaturanzeige
            var tempDiv = document.createElement("div");
            tempDiv.classList.add("float-start")
            var tempText = document.createElement("h1");
            tempText.textContent = nowWeather.temperature.avg + "°C";
            tempDiv.appendChild(tempText);

            // Erstellen Sie das <div> Element für das Wetter-Icon
            var iconDiv = document.createElement("div");
            iconDiv.classList.add("float-end")
            var iconImg = document.createElement("img");
            iconImg.src = WbIconPath(nowWeather.weather.shortText);
            iconImg.width = "35";
            iconImg.alt = nowWeather.weather.shortText;
            iconImg.title = nowWeather.weather.shortText
            iconImg.classList.add("mt-1")
            iconDiv.appendChild(iconImg);

            // Fügen Sie die beiden inneren <div> Elemente zum äußeren <div> hinzu
            innerDiv.appendChild(tempDiv);
            innerDiv.appendChild(iconDiv);

            // Fügen Sie das innere <div> Element zum äußeren <div> hinzu
            cardDiv.appendChild(locDiv)
            cardDiv.appendChild(innerDiv);

            // Fügen Sie das gesamte erstellte Element zum Dokument hinzu (zum Beispiel zum Body)

            cardContainer.appendChild(cardDiv);
        })
}
function WbIconPath(weather) {
    if (weather === "sonnig" || weather === "klar" || weather === "wolkenlos") {
        return "/assets/img/icons/weather/wb_sunny.svg"
    } else if (weather === "leicht bewölkt" || weather === "bedeckt" || weather === "stark bewölkt") {
        return "/assets/img/icons/weather/wb_cloudy.svg"
    } else if (weather === "wolkig" || weather === "heiter" || weather === "bewölkt") {
        return "/assets/img/icons/weather/wb_cloudy.svg"
    } else if (weather === "starker Regen" || weather === "leichter Regen" || weather === "starker Regenschauer") {
        return "/assets/img/icons/weather/wb_rain.svg"
    } else {

    }

}