
function loadAll() {
    loadPopular();
    loadApps();
    loadGames();
    loadFree();

}


function loadPopular() {
    fetch(delivIP + 'app_store/data/apps.json'|| './../data/apps.json')
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data.software)) {
                document.getElementById("popular-container").innerHTML = ""
                data.software.forEach(app => {
                    if (app.downloads >= 500000) {
                        const card = document.createElement("div");
                        card.style.cursor = "pointer"
                        card.classList.add("card", "h-100", "rounded-2", "me-2", "col-4", "col-sm-4", "col-md-2", "col-lg-2", "col-xl-2", "col-xxl-1");
                        card.setAttribute("onclick", "seeDeatils('" + app.package_name + "')")

                        const cardBody = document.createElement("div");
                        cardBody.classList.add("card-body", "text-center");

                        const gameIcon = document.createElement("img");
                        gameIcon.src = delivIP + app.icon;
                        gameIcon.alt = app.name;
                        gameIcon.classList.add("rounded-3", "img-fluid");

                        const gameName = document.createElement("h4");
                        gameName.classList.add("mt-4")
                        gameName.textContent = app.name;

                        const row = document.createElement("div")
                        row.classList.add("row", "align-items-center");


                        const review = document.createElement("h6");
                        review.classList.add("fs-6", "badge", "col-5", checkRating(app.rating))
                        review.textContent = app.rating

                        const playBTN = document.createElement("h6");
                        playBTN.classList.add("fs-6", "col")
                        playBTN.textContent = checkPrice(app.price, app.currency)


                        cardBody.appendChild(gameIcon);
                        cardBody.appendChild(gameName);
                        row.appendChild(review);
                        row.appendChild(playBTN);
                        cardBody.appendChild(row)
                        card.appendChild(cardBody);

                        document.getElementById("popular-container").appendChild(card);
                    }





                });
            } else {
                console.error("Invalid Software");
                document.getElementById("popular-container").innerHTML = "<h3 class='text-danger'>No popular Apps or Games found!</h3>"
            }
        })
        .catch(err => {
            console.error(err);
        });

}
function loadApps() {
    fetch(delivIP + 'app_store/data/apps.json'|| './../data/apps.json')
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data.software)) {
                document.getElementById("apps-container").innerHTML = ""
                data.software.forEach(app => {
                    if (app.type === "app") {
                        const card = document.createElement("div");
                        card.style.cursor = "pointer"
                        card.classList.add("card", "h-100", "rounded-2", "me-2", "col-4", "col-sm-4", "col-md-2", "col-lg-2", "col-xl-2", "col-xxl-1");
                        card.setAttribute("onclick", "seeDeatils('" + app.package_name + "')")

                        const cardBody = document.createElement("div");
                        cardBody.classList.add("card-body", "text-center");

                        const gameIcon = document.createElement("img");
                        gameIcon.src = delivIP + app.icon;
                        gameIcon.alt = app.name;
                        gameIcon.classList.add("rounded-3", "img-fluid");

                        const gameName = document.createElement("h4");
                        gameName.classList.add("mt-4")
                        gameName.textContent = app.name;

                        const row = document.createElement("div")
                        row.classList.add("row", "align-items-center");


                        const review = document.createElement("h6");
                        review.classList.add("fs-6", "badge", "col-5", checkRating(app.rating))
                        review.textContent = app.rating

                        const playBTN = document.createElement("h6");
                        playBTN.classList.add("fs-6", "col")
                        playBTN.textContent = checkPrice(app.price, app.currency)


                        cardBody.appendChild(gameIcon);
                        cardBody.appendChild(gameName);
                        row.appendChild(review);
                        row.appendChild(playBTN);
                        cardBody.appendChild(row)
                        card.appendChild(cardBody);

                        document.getElementById("apps-container").appendChild(card);
                    }





                });
            } else {
                console.error("Invalid Software");
                document.getElementById("apps-container").innerHTML = "<h3 class='text-danger'>No Apps found!</h3>"
            }
        })
        .catch(err => {
            console.error(err);
        });

}
function loadGames() {
    fetch(delivIP + 'app_store/data/apps.json'|| './../data/apps.json')
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data.software)) {
                document.getElementById("games-container").innerHTML = ""
                data.software.forEach(app => {
                    if (app.type === "game") {
                        const card = document.createElement("div");
                        card.style.cursor = "pointer"
                        card.classList.add("card", "h-100", "rounded-2", "me-2", "col-4", "col-sm-4", "col-md-2", "col-lg-2", "col-xl-2", "col-xxl-1");
                        card.setAttribute("onclick", "seeDeatils('" + app.package_name + "')")

                        const cardBody = document.createElement("div");
                        cardBody.classList.add("card-body", "text-center");

                        const gameIcon = document.createElement("img");
                        gameIcon.src = delivIP + app.icon;
                        gameIcon.alt = app.name;
                        gameIcon.classList.add("rounded-3", "img-fluid");

                        const gameName = document.createElement("h4");
                        gameName.classList.add("mt-4")
                        gameName.textContent = app.name;

                        const row = document.createElement("div")
                        row.classList.add("row", "align-items-center");


                        const review = document.createElement("h6");
                        review.classList.add("fs-6", "badge", "col-5", checkRating(app.rating))
                        review.textContent = app.rating

                        const playBTN = document.createElement("h6");
                        playBTN.classList.add("fs-6", "col")
                        playBTN.textContent = checkPrice(app.price, app.currency)


                        cardBody.appendChild(gameIcon);
                        cardBody.appendChild(gameName);
                        row.appendChild(review);
                        row.appendChild(playBTN);
                        cardBody.appendChild(row)
                        card.appendChild(cardBody);

                        document.getElementById("games-container").appendChild(card);
                    }





                });
            } else {
                console.error("Invalid Software");
                document.getElementById("games-container").innerHTML = "<h3 class='text-danger'>No Games found!</h3>"
            }
        })
        .catch(err => {
            console.error(err);
        });

}
function loadFree() {
    fetch(delivIP + 'app_store/data/apps.json'|| './../data/apps.json')
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data.software)) {
                document.getElementById("free-container").innerHTML = ""
                data.software.forEach(app => {
                    if (app.price === 0) {
                        const card = document.createElement("div");
                        card.style.cursor = "pointer"
                        card.classList.add("card", "h-100", "rounded-2", "me-2", "col-4", "col-sm-4", "col-md-2", "col-lg-2", "col-xl-2", "col-xxl-1");
                        card.setAttribute("onclick", "seeDeatils('" + app.package_name + "')")

                        const cardBody = document.createElement("div");
                        cardBody.classList.add("card-body", "text-center");

                        const gameIcon = document.createElement("img");
                        gameIcon.src = delivIP + app.icon;
                        gameIcon.alt = app.name;
                        gameIcon.classList.add("rounded-3", "img-fluid");

                        const gameName = document.createElement("h4");
                        gameName.classList.add("mt-4")
                        gameName.textContent = app.name;

                        const row = document.createElement("div")
                        row.classList.add("row", "align-items-center");


                        const review = document.createElement("h6");
                        review.classList.add("fs-6", "badge", "col-5", checkRating(app.rating))
                        review.textContent = app.rating

                        const playBTN = document.createElement("h6");
                        playBTN.classList.add("fs-6", "col")
                        playBTN.textContent = checkPrice(app.price, app.currency)


                        cardBody.appendChild(gameIcon);
                        cardBody.appendChild(gameName);
                        row.appendChild(review);
                        row.appendChild(playBTN);
                        cardBody.appendChild(row)
                        card.appendChild(cardBody);

                        document.getElementById("free-container").appendChild(card);
                    }





                });
            } else {
                console.error("Invalid Software");
                document.getElementById("free-container").innerHTML = "<h3 class='text-danger'>No free Apps or Games found!</h3>"
            }
        })
        .catch(err => {
            console.error(err);
        });

}
function loadPremium() {
    fetch(delivIP + 'app_store/data/apps.json'|| './../data/apps.json')
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data.software)) {
                document.getElementById("premium-container").innerHTML = ""
                data.software.forEach(app => {
                    if (app.price === 0) {
                        const card = document.createElement("div");
                        card.style.cursor = "pointer"
                        card.classList.add("card", "h-100", "rounded-2", "me-2", "col-4", "col-sm-4", "col-md-2", "col-lg-2", "col-xl-2", "col-xxl-1");
                        card.setAttribute("onclick", "seeDeatils('" + app.package_name + "')")

                        const cardBody = document.createElement("div");
                        cardBody.classList.add("card-body", "text-center");

                        const gameIcon = document.createElement("img");
                        gameIcon.src = delivIP + app.icon;
                        gameIcon.alt = app.name;
                        gameIcon.classList.add("rounded-3", "img-fluid");

                        const gameName = document.createElement("h4");
                        gameName.classList.add("mt-4")
                        gameName.textContent = app.name;

                        const row = document.createElement("div")
                        row.classList.add("row", "align-items-center");


                        const review = document.createElement("h6");
                        review.classList.add("fs-6", "badge", "col-5", checkRating(app.rating))
                        review.textContent = app.rating

                        const playBTN = document.createElement("h6");
                        playBTN.classList.add("fs-6", "col")
                        playBTN.textContent = checkPrice(app.price, app.currency)


                        cardBody.appendChild(gameIcon);
                        cardBody.appendChild(gameName);
                        row.appendChild(review);
                        row.appendChild(playBTN);
                        cardBody.appendChild(row)
                        card.appendChild(cardBody);

                        document.getElementById("premium-container").appendChild(card);
                    }





                });
            } else {
                console.error("Invalid Software");
                document.getElementById("premium-container").innerHTML = "<h3 class='text-danger'>No Premium Apps or Games found!</h3>"
            }
        })
        .catch(err => {
            console.error(err);
        });

}












function seeDeatils(id) {
    location.href = "/app_store/detail/details.html?pid=" + id
}

function checkRating(value) {
    if (value < 2) {
        return "bg-danger"
    } else if (value < 3) {
        return "bg-danger"
    } else if (value < 4) {
        return "bg-warning"
    } else if (value <= 5) {
        return "bg-success"
    } {

    }
}

function checkPrice(v, c) {
    if (v === 0) {
        return "Free"
    } else {
        return v + c
    }
}

//SETTINGS

var translations;

function translate(key, lang, translations) {
    return translations[lang][key];
}
function changeLanguage() {
    fetch(delivIP + 'data/lang/language.json'|| '/assets/data/lang/language.json')
        .then(response => response.json()) // Analysiere die Antwort als JSON
        .then(data => {
            const html = document.getElementById("html");
            let lang = localStorage.getItem("lang");
            html.setAttribute("lang", lang);

            translations = data; // Speichere die Übersetzungen in der Variablen translations
            document.getElementById("").innerHTML = translate("", lang, translations);
            document.getElementById("").innerHTML = translate("", lang, translations);
            document.getElementById("").innerHTML = translate("", lang, translations);
            document.getElementById("").innerHTML = translate("", lang, translations);
            document.getElementById("").innerHTML = translate("", lang, translations);
            document.getElementById("").innerHTML = translate("", lang, translations);
            document.getElementById("").innerHTML = translate("", lang, translations);
            document.getElementById("").innerHTML = translate("", lang, translations);
            document.getElementById("").innerHTML = translate("", lang, translations);
            document.getElementById("").innerHTML = translate("", lang, translations);
            document.getElementById("").innerHTML = translate("", lang, translations);
            document.getElementById("").innerHTML = translate("", lang, translations);
            document.getElementById("").innerHTML = translate("", lang, translations);
            document.getElementById("").innerHTML = translate("", lang, translations);
            document.getElementById("").innerHTML = translate("", lang, translations);
            document.getElementById("").innerHTML = translate("", lang, translations);
            document.getElementById("").innerHTML = translate("", lang, translations);
            document.getElementById("").innerHTML = translate("", lang, translations);
        })
        .catch(error => {
            console.error('Error fetching translations:', error);
        });



}

function selectLang() {
    const select = document.getElementById("user-selected-lang");
    const selectValue = select.value;

    localStorage.setItem("lang", selectValue)
    changeLanguage()
}


loadAll()
changeLanguage()