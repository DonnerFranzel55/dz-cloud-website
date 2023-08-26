const delivIP = "http://192.168.178.27:5501/"
window.onload = function auth() {
    fetch(delivIP + 'account/json/users.json')
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data.users)) {
                data.users.forEach(user => {
                    let sessionToken = sessionStorage.getItem("localUPST");
                    let localToken = localStorage.getItem("localUPST");
                    if (user.secret_token === sessionToken || user.secret_token === localToken) {
                        loadMaterial()
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

function loadMaterial() {
    fetch(delivIP + '/vodify/data/vodify.json')
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data.content)) {
                data.content.forEach(instanceData => {
                    let sessionID = sessionStorage.getItem("movserID");
                    if (instanceData.id === sessionID) {
                        loadStream(instanceData)
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

function loadStream(instance) {
    console.log(instance);
    showLoadingIndicator()
    const id = instance.id;
    const type = instance.about.type;
    const name = instance.about.name;
    const video = instance.files.videos.video;
    const videoSubtitle = video.subtitle


    const videoElement = document.getElementById("streamElement")
    const pervious_episode = document.getElementById("previous_episode")
    const pervious_10 = document.getElementById("previous_10")
    const playPause = document.getElementById("playPauseButton")
    const next_10 = document.getElementById("next_10");
    const fullscreen = document.getElementById("fullscreenToggler")
    const timeline = document.getElementById("timeline");
    const timelineC = document.getElementById("timeline-container")
    const timeleft = document.getElementById("restTime");
    const overlay = document.getElementById("overlay");
    const body = document.getElementById("player-parnet")
    const next_episode = document.getElementById("next_episode");
    const nameText = document.getElementById('movie-title');
    const langSelect = document.getElementById("language-select");
    const subtitleSelect = document.getElementById("subtitle-select")
    nameText.textContent = name
    timelineC.style.cursor = "pointer"


    const videosLength = instance.files.videos.video.length
    console.log(videosLength);



    if (type === "Movie") {
        const nameText = document.getElementById('movie-title')
        nameText.textContent = name
        const video = instance.files.videos.video[0];
        const srcE = document.createElement("source")
        srcE.src = video.src;
        videoElement.appendChild(srcE)
        pervious_episode.style.display = "none"
        next_episode.style.display = "none"
        console.log(video);
    } else {
        const arrayID = sessionStorage.getItem("arrayKey")
        const video = instance.files.videos.video[arrayID];
        console.log(video);


        const videoSeason = video.season;
        const videoEpisode = video.episode;
        const videoName = video.name;



        const episodeInfo = document.getElementById("video-info")
        const nameText = document.getElementById('movie-title')
        nameText.textContent = name
        episodeInfo.textContent = "S" + videoSeason + ":" + "E" + videoEpisode + " " + videoName



        const srcE = document.createElement("source")
        srcE.src = video.src;
        videoElement.appendChild(srcE)
        console.log(video);
    }









    // Event-Listener für das onloadeddata-Event des Videoelements
    videoElement.onloadeddata = function () {
        hideLoadingIndicator(); // Verstecke den Ladeindikator, wenn genügend Daten geladen wurden
    };

    videoElement.onwaiting = function () {
        showLoadingIndicator()
    }
    videoElement.onplaying = function () {
        hideLoadingIndicator()
    }

    // videoElement.onerror = function () {
    //     console.error();
    //     hideLoadingIndicator()
    //     showErrorMessage()
    // }


    playPause.addEventListener("click", function () {
        if (videoElement.paused) {
            playPause.innerHTML = '<img src="./player/symbols/pause.svg" alt=""></img>';
            videoElement.play(); // Video abspielen, wenn es pausiert ist
        } else {
            playPause.innerHTML = '<img src="./player/symbols/play_arrow.svg" alt=""></img>';
            videoElement.pause(); // Video pausieren, wenn es abgespielt wird
        }
    });

    pervious_episode.addEventListener("click", function () {
        const currentEpisode = parseInt(sessionStorage.getItem("arrayKey"))
        if (currentEpisode === 0) {
            console.log("Episode 0 dosnt exist");
        } else {
            sessionStorage.setItem("arrayKey", currentEpisode - 1)
            location.reload()
        }
    })

    next_episode.addEventListener("click", function playnextEpisode() {
        const currentEpisode = parseInt(sessionStorage.getItem("arrayKey"))
        const next = currentEpisode + 1


        const videosLength = instance.files.videos.video.length - 1
        if (next - 1 >= videosLength) {

        } else {
            sessionStorage.setItem("arrayKey", next)
            location.reload()
        }
    })

    pervious_10.addEventListener("click", function () {
        const currentTime = videoElement.currentTime;
        videoElement.currentTime = Math.max(0, currentTime - 10); // Zurückspulen um 10 Sekunden, aber nicht unter 0 gehen
    });

    next_10.addEventListener("click", function () {
        const currentTime = videoElement.currentTime;
        videoElement.currentTime = Math.min(videoElement.duration, currentTime + 10); // Vorwärtsspulen um 10 Sekunden, aber nicht über die Videolänge hinausgehen
    });

    fullscreen.addEventListener("click", function () {

        if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { // Firefox
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { // Chrome, Safari und Opera
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { // Internet Explorer und Edge
                document.msExitFullscreen();
            }

            fullscreen.innerHTML = '<img src="./player/symbols/fullscreen.svg" alt="">'
        } else {

            if (body.requestFullscreen) {
                body.requestFullscreen();
            } else if (body.mozRequestFullScreen) { // Firefox
                body.mozRequestFullScreen();
            } else if (body.webkitRequestFullscreen) { // Chrome, Safari und Opera
                videoElement.webkitRequestFullscreen();
            } else if (body.msRequestFullscreen) { // Internet Explorer und Edge
                body.msRequestFullscreen();
            }
            fullscreen.innerHTML = '<img src="./player/symbols/fullscreen_exit.svg" alt="">'

        }


    })


    // Event-Listener für die Fortschrittsaktualisierung
    videoElement.addEventListener("timeupdate", function () {
        const currentTime = videoElement.currentTime;
        const duration = videoElement.duration;
        const progress = (currentTime / duration) * 100;
        timeline.style.width = progress + "%";

        const currentWidth = (timeline.offsetWidth / timelineC.offsetWidth) * 100;

        console.log(currentWidth);
        // if (currentWidth >= 0) {
        //     const nextUp = document.getElementById("next-up-card")
        //     nextUp.classList.remove("d-none")
        // } else if (currentWidth === 100) {
        //     playnextEpisode()
        // } {

        // }

    });
    // Event-Listener für das Klicken auf die Progress-Bar
    timelineC.addEventListener("click", function (event) {
        const progressWidth = this.offsetWidth; // Breite der Fortschrittsleiste
        const clickX = event.offsetX; // Klick-Position auf der Fortschrittsleiste
        const duration = videoElement.duration;

        // Berechne die neue Zeit im Video basierend auf dem Klick-Verhältnis zur Breite der Fortschrittsleiste
        const newTime = (clickX / progressWidth) * duration;

        // Setze das Video an die ausgewählte Stelle
        videoElement.currentTime = newTime;
    });

    videoElement.addEventListener("timeupdate", function () {
        const currentTime = videoElement.currentTime;
        const duration = videoElement.duration;

        // Berechne die verbleibende Zeit im Video
        const remainingTime = duration - currentTime;
        timeleft.textContent = formatTime(currentTime);
        timeleft.textContent = "-" + formatTime(remainingTime);
    });

    // Füge ein Event-Listener hinzu, der das Overlay nach einer bestimmten Zeit ausblendet
    document.addEventListener('DOMContentLoaded', function () {

        // Anzahl der Millisekunden, nach denen das Overlay verschwinden soll
        const fadeOutTime = 3000; // 3000 Millisekunden = 3 Sekunden

        // Funktion zum Ausblenden des Overlays
        function hideOverlay() {
            overlay.style.opacity = '0';
        }

        // Setze einen Timer, um die hideOverlay-Funktion nach fadeOutTime Millisekunden auszuführen
        setTimeout(hideOverlay, fadeOutTime);
    });

    let timeoutId;

    overlay.addEventListener("touchstart", function () {
        clearTimeout(timeoutId); // Clear the previous timeout (if any)
        overlay.style.opacity = "1";

        timeoutId = setTimeout(() => {
            overlay.style.opacity = "0";
        }, 8000);
    });

    overlay.addEventListener("touchend", function () {
        clearTimeout(timeoutId); // Clear the previous timeout (if any)
        overlay.style.opacity = "1";

        timeoutId = setTimeout(() => {
            overlay.style.opacity = "0";
        }, 4000);
    });

    overlay.addEventListener("mousemove", function () {
        clearTimeout(timeoutId); // Clear the previous timeout (if any)
        overlay.style.opacity = "1";
        overlay.style.backgroundImage = "linear-gradient(to top, #000000 0%, #FFFFFF00 50%)";

        // Set a new timeout to fade out the overlay after 10 seconds (10000 milliseconds)
        timeoutId = setTimeout(() => {
            overlay.style.opacity = "0";
        }, 6000);
    });



    // Extras
    timeline, addEventListener("timeupdate", function () {

    })


    const currentEpisode = parseInt(sessionStorage.getItem("arrayKey"))

    const languageMap = {
        "en": "English",
        "es": "Spanish",
        "fr": "French",
        "zn": "Chinese",
        "de": "Deutsch"
        // Add more language code to language name mappings as needed
    };

    const videoLang = video[currentEpisode].lang;

    console.log(videoLang);

    videoLang.forEach(langItem => {
        const langOption = document.createElement("option");
        langOption.setAttribute("value", langItem);
        langOption.textContent = languageMap[langItem];
        langSelect.appendChild(langOption);
    });





}
// Funktion, um den Ladeindikator anzuzeigen
function showLoadingIndicator() {
    const loadingContainer = document.getElementById('loading-element')

    loadingContainer.style.display = 'flex';
}

// Funktion, um den Ladeindikator auszublenden
function hideLoadingIndicator() {
    const loadingContainer = document.getElementById('loading-element')

    loadingContainer.style.display = 'none';
}

function showErrorMessage() {
    console.log("ihzbo")
    const errorElement = document.getElementById("error")
    errorElement.style.display = "flex"
    errorElement.classList.remove("d-none")
}

function formatTime(timeInSeconds) {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    // Füge führende Nullen hinzu, falls notwendig
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function playnextEpisode() {
    const currentEpisode = parseInt(sessionStorage.getItem("arrayKey"))
    const next = currentEpisode + 1


    const videosLength = instance.files.videos.video.length - 1
    if (next - 1 >= videosLength) {

    } else {
        sessionStorage.setItem("arrayKey", next)
        location.reload()
    }
}


function changeLanguage() {
    const videoElement = document.getElementById("streamElement")
    const langSelect = document.getElementById("language-select");


    const selectedLanguage = langSelect.value.toUpperCase();
    console.log(selectedLanguage);

    const currentSrc = videoElement.src;
    console.log(currentSrc);
    const newSrc = currentSrc.replace(/\(DE\)/, '( ' + selectedLanguage + ')');
    console.log(newSrc);

    videoElement.src = newSrc;
}