function checkUserSubscription() {
    fetch(delivIP +'account/json/users.json')
    .then(res => res.json())
    .then(data => {
        if (Array.isArray(data.users)) {
            data.users.forEach(user => {
                let sessionToken = sessionStorage.getItem("localUPST");
                let localToken = localStorage.getItem("localUPST");
                if (user.secret_token === sessionToken || user.secret_token === localToken) {
                    if (user.vodify.aboStatus === true) {
                         loadfetchData()
                    } else {
                        location.href = "/vodify/subscription/invalid_subs.html"
                    }
                   
                }
            });
        } else {
            location.href = "/auth/login/login.html"
        }
    })
    .catch(err => {
        console.error(err);
        location.href = "/auth/login/login.html"

    });
}


function loadfetchData() {
    // Fetch-Aufruf, um die JSON-Daten abzurufen
    fetch(delivIP +'vodify/data/vodify.json')
        .then(response => response.json())
        .then(data => {


            // Daten für die Inhalte
            var filesData = data.content;

            // Funktion zum Erstellen der Inhaltskarten
            function createfilesCard(files) {
                // Erstelle das Hauptelement für die Inhaltskarte
                var card = document.createElement('div');
                card.className = 'card rounded mb-4 me-2 col-8 col-md-4 col-lg-3 col-xl-2 ratio-16x9';
                card.setAttribute("onclick", "setData('" + files.id + "')");
                card.style.cursor = "pointer"


                // Füge das Bild hinzu
                var image = document.createElement('img');
                image.src = files.files.images.path_land;
                image.className = 'mb-0  img-fluid rounded';
                card.appendChild(image);

                // Füge die Inhaltskarte zum Hauptcontainer hinzu
                var container = document.getElementById('card-container');
                container.appendChild(card);
            }

            loadMovies()
            loadEpisodes()
            // Durchlaufe die Inhaltsdaten und erstelle die Inhaltskarten
            filesData.forEach(function (files) {
                createfilesCard(files);

            });
        })
        .catch(error => {
            console.log('Fehler beim Abrufen der Daten:', error);
        });

}


function setData(id) {
    sessionStorage.setItem("movserID", id)
    location.href = "/vodify/details/details.html?q=" + id



}

function loadMovies() {

    fetch(delivIP +'vodify/data/vodify.json')
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data.content)) {
                data.content.forEach(instanceData => {
                    if (instanceData.about.type === "Movie") {
                        // Erstelle das Hauptelement für die Inhaltskarte
                        var card = document.createElement('div');
                        card.className = 'card rounded mb-4 me-2 col-8 col-md-4 col-lg-3 col-xl-2 ratio-16x9';
                        card.setAttribute("onclick", "setData('" + instanceData.id + "')");
                        card.style.cursor = "pointer"


                        // Füge das Bild hinzu
                        var image = document.createElement('img');
                        image.src = instanceData.files.images.path_land;
                        image.className = 'mb-0 rounded';
                        card.appendChild(image);

                        // Füge die Inhaltskarte zum Hauptcontainer hinzu
                        var container = document.getElementById('movie-container');
                        container.appendChild(card);
                    }
                });
            } else {
                console.error("Data content is not an array.");
            }
        })
        .catch(err => {
            console.error(err);
        });
}
function loadEpisodes() {

    fetch(delivIP +'vodify/data/vodify.json')
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data.content)) {
                data.content.forEach(instanceData => {
                    if (instanceData.about.type === "Episode") {

                        // Erstelle das Hauptelement für die Inhaltskarte
                        var card = document.createElement('div');
                        card.className = 'card rounded mb-4 me-2 col-8 col-md-4 col-lg-3 col-xl-2 ratio-16x9';
                        card.setAttribute("onclick", "setData('" + instanceData.id + "')");
                        card.style.cursor = "pointer"


                        // Füge das Bild hinzu
                        var image = document.createElement('img');
                        image.src = instanceData.files.images.path_land;
                        image.className = 'mb-0 rounded';
                        card.appendChild(image);

                        // Füge die Inhaltskarte zum Hauptcontainer hinzu
                        var container = document.getElementById('episode-container');
                        container.appendChild(card);

                    }
                });
            } else {
                console.error("Data content is not an array.");
            }
        })
        .catch(err => {
            console.error(err);
        });
}

function search() {
    
    fetch(delivIP +'vodify/data/vodify.json')
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data.content)) {
                data.content.forEach(instanceData => {
                    const searchInput = document.getElementById("searchbar-input")
                    if (instanceData.about.name == searchInput) {
                        // Erstelle das Hauptelement für die Inhaltskarte
                        var card = document.createElement('div');
                        card.className = 'card rounded mb-4 me-2 col-8 col-md-4 col-lg-3 col-xl-2 ratio-16x9';
                        card.setAttribute("onclick", "setData('" + instanceData.id + "')");
                        card.style.cursor = "pointer"


                        // Füge das Bild hinzu
                        var image = document.createElement('img');
                        image.src = instanceData.files.images.path_land;
                        image.className = 'mb-0 rounded';
                        card.appendChild(image);

                        // Füge die Inhaltskarte zum Hauptcontainer hinzu
                        var container = document.getElementById('search-container');
                        container.appendChild(card);
                    }
                });
            } else {
                console.error("Data content is not an array.");
            }
        })
        .catch(err => {
            console.error(err);
        });
}

//Kategorien
function loadAction() {

    fetch(delivIP +'vodify/data/vodify.json')
    .then(res => res.json())
    .then(data => {
        if (Array.isArray(data.content)) {
            data.content.forEach(instanceData => {
                const allowedCategories = ["Science Fiction", "Comedy", "Animation", "Adventure"];

                // Überprüfen, ob die Kategorie oder der Typ in der Liste der erlaubten Kategorien/Typen enthalten ist
                if (
                    instanceData.about.categories.some(category => allowedCategories.includes(category)) 
                ) {
                    // Erstelle das Hauptelement für die Inhaltskarte
                    const card = document.createElement('div');
                    card.className = 'card rounded mb-4 me-2 col-8 col-md-4 col-lg-3 col-xl-2 ratio-16x9';
                    card.setAttribute("onclick", "setData('" + instanceData.id + "')");
                    card.style.cursor = "pointer"

                    // Füge das Bild hinzu
                    const image = document.createElement('img');
                    image.src = instanceData.files.images.path_land;
                    image.className = 'mb-0 rounded';
                    card.appendChild(image);

                    // Füge die Inhaltskarte zum Hauptcontainer hinzu
                    const container = document.getElementById('episode-container');
                    container.appendChild(card);
                }
            });
        } else {
            console.error("Data content is not an array.");
        }
    })
    .catch(err => {
        console.error(err);
    });


}
