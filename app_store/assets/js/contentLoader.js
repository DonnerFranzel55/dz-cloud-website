const getURL = "/app_store/assets/data/apps.json";
const devURL = "http://localhost:5501/"
// const getURL = "/app_store/assets/data/apps.json"
function loadAll() {
    loadPopular();
    loadApps();
    loadGames();
    loadFree();
    loadPremium()

}


function loadPopular() {
    fetch(getURL)
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
                        //gameIcon.src = devURL + app.icon;
                        gameIcon.src = app.icon;
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
    fetch(getURL)
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
                        //gameIcon.src = devURL + app.icon;
                        gameIcon.src = app.icon;
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
    fetch(getURL)
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
                        //gameIcon.src = devURL + app.icon;
                        gameIcon.src = app.icon;
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
    fetch(getURL)
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
                        //gameIcon.src = devURL + app.icon;
                        gameIcon.src = app.icon;
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
    fetch(getURL)
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data.software)) {
                document.getElementById("premium-container").innerHTML = ""
                data.software.forEach(app => {
                    if (app.price > 5) {
                        const card = document.createElement("div");
                        card.style.cursor = "pointer"
                        card.classList.add("card", "h-100", "rounded-2", "me-2", "col-4", "col-sm-4", "col-md-2", "col-lg-2", "col-xl-2", "col-xxl-1");
                        card.setAttribute("onclick", "seeDeatils('" + app.package_name + "')")

                        const cardBody = document.createElement("div");
                        cardBody.classList.add("card-body", "text-center");

                        const gameIcon = document.createElement("img");
                        //gameIcon.src = devURL + app.icon;
                        gameIcon.src = app.icon;
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
