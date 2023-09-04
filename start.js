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
function loadStocks() {
    fetch("/assets/data/stocks/stocks.json")
        .then(res => res.json())
        .then(data => {

            data.stocks.forEach(stock => {
                const table = document.querySelector('#stocks-table');

                const tr = document.createElement('tr');

                const tdSymbol = document.createElement('td');
                tdSymbol.textContent = stock.symbol;
                tdSymbol.title = stock.name

                const tdValue = document.createElement('td');
                tdValue.textContent = stock.current_price + stock.currency;

                const tdChange = document.createElement('td');
                tdChange.textContent = (stock.current_price - stock.daily_history[0].price).toFixed(2)

                const tdChangePercent = document.createElement('td');
                tdChangePercent.textContent = ((stock.current_price - stock.daily_history[0].price) / stock.daily_history[0].price * 100).toFixed(2);

                tr.appendChild(tdSymbol);
                tr.appendChild(tdValue);
                tr.appendChild(tdChange);
                tr.appendChild(tdChangePercent);
                table.appendChild(tr)













            });
        })
}
function loadCurrenies() {
    fetch("/assets/data/stocks/stocks.json")
        .then(res => res.json())
        .then(data => {

            data.currencies.forEach(currency => {

                var oldVPI = currency.current_rate;
                var newVPI = currency.history[0].rate

                const table = document.querySelector('#currency-table');

                const tr = document.createElement('tr');

                const tdSymbol = document.createElement('td');
                tdSymbol.textContent = currency.name;
                tdSymbol.title = currency.symbol

                const tdValue = document.createElement('td');
                tdValue.textContent = currency.current_rate;

                const tdChange = document.createElement('td');
                tdChange.textContent = (((newVPI - oldVPI) / oldVPI)).toFixed(2)

                const tdChangePercent = document.createElement('td');
                tdChangePercent.textContent = (((newVPI - oldVPI) / oldVPI) * 100).toFixed(2);

                tr.appendChild(tdSymbol);
                tr.appendChild(tdValue);
                tr.appendChild(tdChange);
                tr.appendChild(tdChangePercent);
                table.appendChild(tr)













            });
        })
}
function loadNews() {
    fetch("/assets/data/news/news.json")
        .then(res => res.json())
        .then(data => {
            data.news.inland.forEach(article => {

                var newsContainer = document.querySelector('#dzjsrtnlc')

                var card = document.createElement('div');
                card.classList.add("card", "me-2", "overflow-hidden", "col-10", "col-sm-7", "col-md-5", "col-lg-4", "col-xl-3", "col-xxl-3")

                var imgDiv = document.createElement('div');
                var img = document.createElement('img');
                img.src = article.path;
                img.alt = article.title;
                img.classList.add("img-fluid")
                imgDiv.appendChild(img);
                card.appendChild(imgDiv)

                var cardBody = document.createElement('div');
                cardBody.classList.add("card-body");

                var title = document.createElement('h3');
                title.textContent = article.title;

                var time = document.createElement('h6');
                time.textContent = formatDateTime(article.publish_time)

                var teaser = document.createElement('h5')
                teaser.textContent = article.shortText

                var sourceAnchor = document.createElement('a');
                sourceAnchor.href = article.source;
                sourceAnchor.target = "_blank"
                sourceAnchor.textContent = "Zur Nachrichten Quelle"

                cardBody.appendChild(title)
                cardBody.appendChild(time)
                cardBody.appendChild(teaser)
                cardBody.appendChild(sourceAnchor)
                card.appendChild(cardBody)


                newsContainer.appendChild(card)













            });
        })
}



function formatDateTime(isoDateTime) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
        timeZoneName: 'short',
    };

    const date = new Date(isoDateTime);
    return date.toLocaleString('de-DE', options);
}











loadCurrenies()
loadStocks()
loadNews()