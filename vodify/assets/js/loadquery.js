function fetchJson() {

    fetch(delivIP + 'vodify/data/vodify.json')
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data.content)) {
                data.content.forEach(instanceData => {
                    let sessionID = sessionStorage.getItem("movserID");
                    if (instanceData.id === sessionID) {
                        loadModalData(instanceData)
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

function loadModalData(instance) {
    console.log(instance)
    //ID
    const id = instance.id;

    //Infos about the movie
    const name = instance.about.name;
    const description = instance.about.info;
    const rateing = instance.about.rateing;
    const age = instance.about.age;
    const platform = instance.about.platform;
    const minutes = instance.about.duration_min;
    const publish_year = instance.about.publish_year;
    const type = instance.about.type;
    const xray = instance.about.xray;
    const hdr = instance.about.hdr;
    const uhd = instance.about.uhd;
    const haveSubtitles = instance.about.have_subtitles;
    const categories = instance.about.categories;
    const languages = instance.about.languages;
    const subtitles = instance.about.subtitles;
    const studios = instance.about.studios;
    const people = instance.about.people;
    const regie = people.regie;
    const producers = people.producers;
    const main_actor = people.main_actor;
    const incontent = instance.about.InContent;
    const video = instance.files.videos.video;
    const videoLang = video.lang;
    const videoSubtitle = video.subtitle

    //Images
    const path = instance.files.images.path;
    const path_land = instance.files.images.path_land;

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    const formatedTime = hours + "h " + remainingMinutes + "min"


    const nameH1 = document.getElementById('movie-name');
    const movieInfo = document.getElementById("movie-info");
    const movieRateing = document.getElementById("movie-rateing");
    const movieRateingDetail = document.getElementById("movie-rateing-detail")
    const moviePlatform = document.getElementById("movie-platform");
    const movieAge = document.getElementById("movie-age");
    const movieLength = document.getElementById("movie-length");
    const moviePublishYear = document.getElementById("movie-publish-year");
    const movieXrayDot = document.getElementById("xray-dot")
    const movieXray = document.getElementById("movie-xray")
    const movieHdrDot = document.getElementById("hdr-dot")
    const movieHdr = document.getElementById("movie-hdr")
    const movieUhdDot = document.getElementById("uhd-dot")
    const movieUhd = document.getElementById("movie-uhd")
    const movieHaveCCDot = document.getElementById("subtitle-dot")
    const movieHaveCC = document.getElementById("movie-has-subtitle");
    const movieEpisodeSection = document.getElementById("movie-episode-section");
    const modalImage = document.getElementById('movie-image');

    //Extra BTN
    const playBTN = document.getElementById("movie-play-movie");
    playBTN.setAttribute("onclick", "play('" + 0 + "')")

    nameH1.textContent = name;
    movieInfo.textContent = description;
    movieRateing.textContent = rateing;
    movieRateingDetail.textContent = rateing;
    moviePlatform.textContent = platform;
    moviePlatform.setAttribute("class", "")
    moviePlatform.classList.add("badge", platform)
    movieAge.textContent = age;
    movieLength.textContent = formatedTime;
    moviePublishYear.textContent = publish_year;

    if (xray === false) {
        movieXrayDot.style.display = "none"
        movieXray.style.display = "none"
    }
    if (hdr === false) {
        movieHdrDot.style.display = "none"
        movieHdr.style.display = "none"
    }
    if (uhd === false) {
        movieUhdDot.style.display = "none"
        movieUhd.style.display = "none"
    }
    if (haveSubtitles === false) {
        movieHaveCCDot.style.display = "none"
        movieHaveCC.style.display = "none"
    }


    if (age === 0) {
        movieAge.classList.add("badge", "bg-white", "text-black")
    } else if (age === 6) {
        movieAge.classList.add("badge", "bg-warning", "text-black")
    } else if (age === 12) {
        movieAge.classList.add("badge", "bg-success", "text-black")
    } else if (age === 16) {
        movieAge.classList.add("badge", "bg-info", "text-black")
    } else if (age === 18) {
        movieAge.classList.add("badge", "bg-danger", "text-black")
    } else {
        movieAge.textContent = "?";
        movieAge.title = "No Age requirement is setted"
        movieAge.classList.add("badge", "bg-primary", "text-black")

    }

    if (type === "Movie") {
        movieEpisodeSection.style.display = "none"
    } else {
        const video = instance.files.videos.video
        const videoLength = video.length;
        const counter = document.getElementById("episode-counter")
        counter.textContent = videoLength

        var i = 0
        video.forEach(EpisodeData => {



            const EpisodeName = EpisodeData.name
            const EpisodeDuration_min = EpisodeData.duration_min
            const EpisodeAge = EpisodeData.age
            const EpisodeInfo = EpisodeData.info
            const EpisodePublish_year = EpisodeData.publish_year
            const EpisodeformatedTime = EpisodeDuration_min + "min"
            const EpisodeSeason = EpisodeData.season
            const EpisodeEpisode = EpisodeData.episode

       

        const card = document.createElement("div");
        card.classList.add("card", "p-3", "mb-2");
        card.style.cursor = "pointer"
        card.setAttribute("onclick", "play('" + i + "')")

        const cardChildren = document.createElement("div")
        cardChildren.classList.add("d-flex")
        card.appendChild(cardChildren)

        const ImgDiv = document.createElement("div");
        ImgDiv.classList.add("d-none", "d-lg-block")
        const EpisodeImage = document.createElement("img");
        EpisodeImage.src = path_land
        ImgDiv.appendChild(EpisodeImage);
        cardChildren.appendChild(ImgDiv)

        const EpisodeDataDiv = document.createElement("div")
        EpisodeDataDiv.classList.add("ms-lg-5")
        cardChildren.appendChild(EpisodeDataDiv)

        const NameDiv = document.createElement("div")
        const nameh3 = document.createElement("h3");
        nameh3.textContent = EpisodeName;
        NameDiv.appendChild(nameh3)
        EpisodeDataDiv.appendChild(NameDiv)

        const tagDiv = document.createElement("div");
        tagDiv.classList.add("d-flex")
        EpisodeDataDiv.appendChild(tagDiv)

        // Erstelle ein h5-Element für die Kategorie
        const PubYearh5 = document.createElement("h5");
        const PubYearspan = document.createElement("span");
        PubYearspan.textContent = EpisodePublish_year;
        PubYearspan.classList.add("me-3")
        PubYearh5.appendChild(PubYearspan);
        tagDiv.appendChild(PubYearh5);

        // Erstelle ein h5-Element für die Länge
        const EpDurh5 = document.createElement("h5");
        const EpDurspan = document.createElement("span");
        EpDurspan.textContent = EpisodeformatedTime;
        EpDurspan.classList.add("me-3")
        EpDurh5.appendChild(EpDurspan);
        tagDiv.appendChild(EpDurh5);

        // Erstelle ein h5-Element für die Länge
        const EpAgeh5 = document.createElement("h5");
        const EpAgespan = document.createElement("span");
        EpAgespan.textContent = EpisodeAge;
        EpAgeh5.appendChild(EpAgespan);
        tagDiv.appendChild(EpAgeh5);

        const seasonEpisodeInfoDiv = document.createElement("div");
        const SEh4 = document.createElement("h4");
        SEh4.textContent = "S" + EpisodeSeason + " " + "E" + EpisodeEpisode;
        seasonEpisodeInfoDiv.appendChild(SEh4);
        EpisodeDataDiv.appendChild(seasonEpisodeInfoDiv)


        const infoDiv = document.createElement("div");
        const Infoh6 = document.createElement("h4");
        Infoh6.textContent = EpisodeInfo;
        infoDiv.appendChild(Infoh6);
        EpisodeDataDiv.appendChild(infoDiv)

        const episodeListContainer = document.getElementById("episode-container")
        episodeListContainer.appendChild(card)

        const EpContainer = document.getElementById("episode-container");
        EpContainer.appendChild(card)


        if (EpisodeAge === 0) {
            EpAgespan.classList.add("badge", "bg-white", "text-black")
        } else if (EpisodeAge === 6) {
            EpAgespan.classList.add("badge", "bg-warning", "text-black")
        } else if (EpisodeAge === 12) {
            EpAgespan.classList.add("badge", "bg-success", "text-black")
        } else if (EpisodeAge === 16) {
            EpAgespan.classList.add("badge", "bg-info", "text-black")
        } else if (EpisodeAge === 18) {
            EpAgespan.classList.add("badge", "bg-danger", "text-black")
        } else {
            EpAgespan.textContent = "?";
            EpAgespan.title = "No Age requirement is setted"
            EpAgespan.classList.add("badge", "bg-primary", "text-black")

        }



        i++
    });










}


incontent.forEach((part, index) => {
    // Erstelle ein h5-Element für die Kategorie
    const h4 = document.createElement("h4");
    const span = document.createElement("span");
    span.textContent = part;
    h4.appendChild(span);

    // Füge das h5-Element zur Kategorien-Container-Div hinzu
    let container = document.getElementById("movie-in-content");
    container.appendChild(h4);

    // Füge den Mittelpunkt (·) als Trennsymbol hinzu, aber nur wenn es nicht das letzte Element ist
    if (index < incontent.length - 1) {

        const h4Dot = document.createElement("h4");
        const spanDot = document.createElement("span");
        spanDot.textContent = "\u00B7";
        spanDot.classList.add("ms-2", "me-2")
        h4Dot.appendChild(spanDot)
        container.appendChild(h4Dot);
    }
});
categories.forEach((category, index) => {
    // Erstelle ein h5-Element für die Kategorie
    const h5Div = document.createElement("div");
    h5Div.classList.add("col-4", "col-xl-2")
    const h5 = document.createElement("h5");
    const span = document.createElement("span");
    span.textContent = category;
    h5.appendChild(span);
    h5Div.appendChild(h5)

    // Füge das h5-Element zur Kategorien-Container-Div hinzu
    let container = document.getElementById("categories-container");
    container.appendChild(h5Div);

    // Füge den Mittelpunkt (·) als Trennsymbol hinzu, aber nur wenn es nicht das letzte Element ist
    if (index < categories.length - 1) {

        const h5DotDiv = document.createElement("div");
        h5DotDiv.classList.add("col-1")
        const h5Dot = document.createElement("h5");
        const spanDot = document.createElement("span");
        spanDot.textContent = "\u00B7";
        h5Dot.appendChild(spanDot);
        h5DotDiv.appendChild(h5Dot)
        container.appendChild(h5DotDiv);
    }
});

languages.forEach((language, index) => {
    // Erstelle ein h5-Element für die Kategorie
    const h4 = document.createElement("h4");
    const span = document.createElement("span");
    span.textContent = language;
    h4.appendChild(span);

    // Füge das h5-Element zur Kategorien-Container-Div hinzu
    let container = document.getElementById("movie-languages");
    container.appendChild(h4);

    // Füge den Mittelpunkt (·) als Trennsymbol hinzu, aber nur wenn es nicht das letzte Element ist
    if (index < languages.length - 1) {

        const h4Dot = document.createElement("h4");
        const spanDot = document.createElement("span");
        spanDot.textContent = ",";
        spanDot.classList.add("me-2")
        h4Dot.appendChild(spanDot)
        container.appendChild(h4Dot);
    }
});

subtitles.forEach((subtitle, index) => {
    // Erstelle ein h5-Element für die Kategorie
    const h4 = document.createElement("h4");
    const span = document.createElement("span");
    span.textContent = subtitle;
    h4.appendChild(span);

    // Füge das h5-Element zur Kategorien-Container-Div hinzu
    let container = document.getElementById("movie-subtitles");
    container.appendChild(h4);

    // Füge den Mittelpunkt (·) als Trennsymbol hinzu, aber nur wenn es nicht das letzte Element ist
    if (index < subtitles.length - 1) {

        const h4Dot = document.createElement("h4");
        const spanDot = document.createElement("span");
        spanDot.textContent = ",";
        spanDot.classList.add("me-2")
        h4Dot.appendChild(spanDot)
        container.appendChild(h4Dot);
    }
});
regie.forEach((person, index) => {
    // Erstelle ein h5-Element für die Kategorie
    const h4 = document.createElement("h4");
    const span = document.createElement("span");
    span.textContent = person;
    h4.appendChild(span);

    // Füge das h5-Element zur Kategorien-Container-Div hinzu
    let container = document.getElementById("movie-regie");
    container.appendChild(h4);

    // Füge den Mittelpunkt (·) als Trennsymbol hinzu, aber nur wenn es nicht das letzte Element ist
    if (index < regie.length - 1) {

        const h4Dot = document.createElement("h4");
        const spanDot = document.createElement("span");
        spanDot.textContent = ",";
        spanDot.classList.add("me-2")
        h4Dot.appendChild(spanDot)
        container.appendChild(h4Dot);
    }
});
producers.forEach((person, index) => {
    // Erstelle ein h5-Element für die Kategorie
    const h4 = document.createElement("h4");
    const span = document.createElement("span");
    span.textContent = person;
    h4.appendChild(span);

    // Füge das h5-Element zur Kategorien-Container-Div hinzu
    let container = document.getElementById("movie-producers");
    container.appendChild(h4);

    // Füge den Mittelpunkt (·) als Trennsymbol hinzu, aber nur wenn es nicht das letzte Element ist
    if (index < producers.length - 1) {

        const h4Dot = document.createElement("h4");
        const spanDot = document.createElement("span");
        spanDot.textContent = ",";
        spanDot.classList.add("me-2")
        h4Dot.appendChild(spanDot)
        container.appendChild(h4Dot);
    }
});
main_actor.forEach((person, index) => {
    // Erstelle ein h5-Element für die Kategorie
    const h4 = document.createElement("h4");
    const span = document.createElement("span");
    span.textContent = person;
    h4.appendChild(span);

    // Füge das h5-Element zur Kategorien-Container-Div hinzu
    let container = document.getElementById("movie-main-actor");
    container.appendChild(h4);

    // Füge den Mittelpunkt (·) als Trennsymbol hinzu, aber nur wenn es nicht das letzte Element ist
    if (index < main_actor.length - 1) {

        const h4Dot = document.createElement("h4");
        const spanDot = document.createElement("span");
        spanDot.textContent = ",";
        spanDot.classList.add("me-2")
        h4Dot.appendChild(spanDot)
        container.appendChild(h4Dot);
    }
});
studios.forEach((studio, index) => {
    // Erstelle ein h5-Element für die Kategorie
    const h4 = document.createElement("h4");
    const span = document.createElement("span");
    span.textContent = studio;
    h4.appendChild(span);

    // Füge das h5-Element zur Kategorien-Container-Div hinzu
    let container = document.getElementById("movie-studios");
    container.appendChild(h4);

    // Füge den Mittelpunkt (·) als Trennsymbol hinzu, aber nur wenn es nicht das letzte Element ist
    if (index < studios.length - 1) {

        const h4Dot = document.createElement("h4");
        const spanDot = document.createElement("span");
        spanDot.textContent = ",";
        spanDot.classList.add("me-2")
        h4Dot.appendChild(spanDot)
        container.appendChild(h4Dot);
    }
});

modalImage.src = path_land







}

function play(i) {
    const videoID = sessionStorage.getItem("movserID")
    sessionStorage.setItem("arrayKey", i)
    location.href = "/vodify/watch/?watch=" + videoID
}


