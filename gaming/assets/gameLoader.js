const delivIp = "./assets/"
function loadGames() {
    fetch(delivIp + 'data/games.json')
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data.games)) {
                data.games.forEach(game => {

                    const card = document.createElement("div");
                    card.classList.add("card", "rounded-4", "me-2", "col-7", "col-sm-7", "col-md-5", "col-lg-4", "col-xl-3", "col-xxl-2");


                    const cardBody = document.createElement("div");
                    cardBody.classList.add("card-body", "text-center");

                    const gameIcon = document.createElement("img");
                    gameIcon.src = game.path;
                    gameIcon.alt = game.name;
                    gameIcon.width = 140;
                    gameIcon.classList.add("rounded");

                    const gameName = document.createElement("h2");
                    gameName.classList.add("mt-4")
                    gameName.textContent = game.name;

                    const playBTN = document.createElement("button");
                    playBTN.classList.add("btn", "btn-success", "w-100", "fs-4")
                    playBTN.textContent = "Play"
                    playBTN.setAttribute("onclick", "playID('" + game.id + "')")

                    cardBody.appendChild(gameIcon);
                    cardBody.appendChild(gameName);
                    cardBody.appendChild(playBTN);
                    card.appendChild(cardBody);
                    document.getElementById("recommended-container").appendChild(card);



                });
            } else {
                console.error("Invalid Token");
            }
        })
        .catch(err => {
            console.error(err);
        });
}

function playID(id) {
    sessionStorage.setItem("sssgID", id)
    location.href = "/gaming/play/" + id + "/"
}