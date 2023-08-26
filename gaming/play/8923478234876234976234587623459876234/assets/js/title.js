function show(id) {
    const shopElement = document.querySelector(".game-shop")
    const creditsElement = document.querySelector(".game-credits")
    const settingsElement = document.querySelector(".game-settings")
    const settingsControlElement = document.querySelector(".settings-control")
    const settingsControlBTNElement = document.querySelector(".settings-control-btn")


    if (id === 0) {
        creditsElement.style.display = "none"
        shopElement.style.display = "none"
        console.log("PLAY");
        play()
    } else if (id === 1) {
        creditsElement.style.display = "none"
        shopElement.style.display = "block"
        settingsElement.style.display = "none"
        loadShopData(2790)
    } else if (id === 2) {
        shopElement.style.display = "none"
        creditsElement.style.display = "block"
        settingsElement.style.display = "none"

        setTimeout(() => {
            creditsElement.style.display = "none"
        }, 18000);

    } else if (id === 3) {
        shopElement.style.display = "none"
        creditsElement.style.display = "none"
        settingsElement.style.display = "block"

        console.log("Einstellungen");

    } else if (id === 4) {
        shopElement.style.display = "none"
        creditsElement.style.display = "none"
        settingsElement.style.display = "none"
        console.log("EXIT");

    } else if (id === 5) {
        settingsControlElement.classList.remove("d-none")
        settingsControlBTNElement.setAttribute("onclick", "hide(5)")

    }
}
function hide(id) {
    const shopElement = document.querySelector(".game-shop")
    const creditsElement = document.querySelector(".game-credits")
    const settingsElement = document.querySelector(".game-settings")
    const settingsControlElement = document.querySelector(".settings-control")
    const settingsControlBTNElement = document.querySelector(".settings-control-btn")


    if (id === 1) {
        creditsElement.style.display = "none"
        shopElement.style.display = "none"
        settingsElement.style.display = "none"
    } else if (id === 2) {
        shopElement.style.display = "none"
        creditsElement.style.display = "none"
        settingsElement.style.display = "none"
    } else if (id === 3) {
        shopElement.style.display = "none"
        creditsElement.style.display = "none"
        settingsElement.style.display = "none"
    } else if (id === 4) {
        shopElement.style.display = "none"
        creditsElement.style.display = "none"
        settingsElement.style.display = "none"
    } else if (id === 5) {
        settingsControlElement.classList.add("d-none")
        settingsControlBTNElement.setAttribute("onclick", "show(5)")

    }

}

function play() {
    const playBTN = document.getElementById("play-button-72819")
    playBTN.textContent = "LOADING..."

    setTimeout(() => {
        location.href = "./run.html"
    }, 1200);
}

function music() {
    let audio = new Audio("./assets/sfx/0815.MP3")
    audio.loop = true;
    audio.play()
}

function setLang() {
    let localLang = localStorage.getItem("lang")
    if (localLang === null) {
        localStorage.setItem("lang", en)
    } else {
        lang = localStorage.getItem("lang")
    }
}


//SHOP
function loadShopData(id) {
    const skinSection = document.getElementById("skin-section-72610")
    const dailySection = document.getElementById("daily-section-29472")
    const gemSection = document.getElementById("gams-section-00125")
    const specialSection = document.getElementById("special-section-91023")

    if (id === 2790) {
        skinSection.classList.add("shop", "active")
        dailySection.classList.remove("shop", "active")
        gemSection.classList.remove("shop", "active")
        specialSection.classList.remove("shop", "active")
        loadSkins()
    } else if (id === 2791) {
        skinSection.classList.remove("shop", "active")
        dailySection.classList.add("shop", "active")
        gemSection.classList.remove("shop", "active")
        specialSection.classList.remove("shop", "active")
    } else if (id === 2792) {
        skinSection.classList.remove("shop", "active")
        dailySection.classList.remove("shop", "active")
        gemSection.classList.add("shop", "active")
        specialSection.classList.remove("shop", "active")
        loadGems()
    } else if (id === 2793) {
        skinSection.classList.remove("shop", "active")
        dailySection.classList.remove("shop", "active")
        gemSection.classList.remove("shop", "active")
        specialSection.classList.add("shop", "active")
    } else {
        error(2404)

    }
}
function loadSkins() {
    const container = document.getElementById("shop-container");
    container.innerHTML = ""

    fetch('./assets/data/shop/shop.json')
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data.instances.skins)) {
                data.instances.skins.forEach(skin => {
                    const id = skin.id;
                    const name = skin.name;
                    const path = skin.path;
                    const price = skin.price;
                    const rareity = skin.rareity;
                    const currency = skin.currency;
                    const visible = skin.visible;
                    const type = skin.type;
                    const isDefault = skin.default;

                    const fullprice = price + " " + currency

                    if (visible === true) {
                        const container = document.getElementById("shop-container");

                        const card = document.createElement("div")
                        card.classList.add("card", "border", "col-8", "col-sm-6", "col-md-5", "col-lg-3", "me-3");

                        const top = document.createElement("div");
                        top.classList.add("card-header")
                        card.appendChild(top)

                        const nameElement = document.createElement("h3");
                        nameElement.classList.add("text-center")
                        nameElement.textContent = name
                        top.appendChild(nameElement)

                        const body = document.createElement("div");
                        body.classList.add("card-body")
                        card.appendChild(body)

                        const imageElement = document.createElement("img");
                        imageElement.src = path;
                        imageElement.alt = name;
                        imageElement.width = "80"
                        imageElement.classList.add("img-fluid", "img-pixeled")
                        body.appendChild(imageElement);

                        const rareityElement = document.createElement("h3");
                        rareityElement.classList.add("text-center", "text-capitalize", "text-" + rareity)
                        rareityElement.textContent = rareity
                        body.appendChild(rareityElement)

                        const footer = document.createElement("div");
                        footer.classList.add("card-footer");
                        card.appendChild(footer)

                        if (isDefault === true) {
                            const purchaseElement = document.createElement("button");
                            purchaseElement.classList.add("text-center", "w-100", "btn", "btn-secondary")
                            purchaseElement.textContent = "STANDART"
                            purchaseElement.disabled = true
                            footer.appendChild(purchaseElement)
                        } else if (price === 0) {
                            const purchaseElement = document.createElement("button");
                            purchaseElement.classList.add("text-center", "w-100", "btn", "btn-success")
                            purchaseElement.textContent = "FREE"
                            footer.appendChild(purchaseElement)
                        } else {

                            const purchaseElement = document.createElement("button");
                            purchaseElement.classList.add("text-center", "w-100", "btn", "btn-success")
                            purchaseElement.textContent = fullprice
                            footer.appendChild(purchaseElement)
                        }









                        container.appendChild(card)
                    } else {

                    }




                });
            } else {
                console.error("Invalid Skin Array");
            }
        })
        .catch(err => {
            console.error(err);
        });
}
function loadGems() {
    const container = document.getElementById("shop-container");
    container.innerHTML = ""

    fetch('./assets/data/shop/shop.json')
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data.instances.gems)) {
                data.instances.gems.forEach(gem => {
                    const id = gem.id;
                    const name = gem.name;
                    const path = gem.path;
                    const price = gem.price;
                    const rareity = gem.rareity;
                    const currency = gem.currency;
                    const visible = gem.visible;
                    const type = gem.type;
                    const isDefault = gem.default;

                    const fullprice = price + " " + currency

                    if (visible === true) {
                        const container = document.getElementById("shop-container");

                        const card = document.createElement("div")
                        card.classList.add("card", "border", "col-8", "col-sm-6", "col-md-5", "col-lg-3", "me-3");

                        const top = document.createElement("div");
                        top.classList.add("card-header")
                        card.appendChild(top)

                        const nameElement = document.createElement("h3");
                        nameElement.classList.add("text-center")
                        nameElement.textContent = name + " "
                        top.appendChild(nameElement)

                        const typeElement = document.createElement("span");
                        typeElement.classList.add("text-capitalize")
                        typeElement.textContent = type;
                        nameElement.appendChild(typeElement)

                        const body = document.createElement("div");
                        body.classList.add("card-body")
                        card.appendChild(body)

                        const imageElement = document.createElement("img");
                        imageElement.src = path;
                        imageElement.alt = name;
                        imageElement.width = "80"
                        imageElement.classList.add("img-fluid", "img-pixeled")
                        body.appendChild(imageElement);

                        const rareityElement = document.createElement("h3");
                        rareityElement.classList.add("text-center", "text-capitalize")
                        rareityElement.textContent = rareity
                        body.appendChild(rareityElement)

                        const footer = document.createElement("div");
                        footer.classList.add("card-footer");
                        card.appendChild(footer)

                        if (isDefault === true) {
                            const purchaseElement = document.createElement("button");
                            purchaseElement.classList.add("text-center", "w-100", "btn", "btn-secondary")
                            purchaseElement.textContent = "STANDART"
                            purchaseElement.disabled = true
                            footer.appendChild(purchaseElement)
                        } else if (price === 0) {
                            const purchaseElement = document.createElement("button");
                            purchaseElement.classList.add("text-center", "w-100", "btn", "btn-success")
                            purchaseElement.textContent = "FREE"
                            footer.appendChild(purchaseElement)
                        } else {

                            const purchaseElement = document.createElement("button");
                            purchaseElement.classList.add("text-center", "w-100", "btn", "btn-success")
                            purchaseElement.textContent = fullprice
                            purchaseElement.type = "button"
                            purchaseElement.setAttribute("onclick", "purchase('" + id + "')")
                            footer.appendChild(purchaseElement)
                        }

                        container.appendChild(card)
                    } else {

                    }




                });
            } else {
                console.error("Invalid Skin Array");
            }
        })
        .catch(err => {
            console.error(err);
        });
}



function purchase(id) {

    const confirmPayment = document.querySelector(".game-payment-confirm");
    confirmPayment.classList.remove("d-none")

    sessionStorage.setItem("HDNtdio2d", id);

    fetch('./../data/shop/shop.json')
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data.instances.gems)) {
                data.instances.gems.forEach(gem => {

                    let sessionID = sessionStorage.getItem("HDNtdio2d");
                    let id = gem.id
                    if (id === sessionID) {
                        const gameName = "REC RUNNER"
                        const id = gem.id;
                        const name = gem.name;
                        const path = gem.path;
                        const price = gem.price;
                        const rareity = gem.rareity;
                        const currency = gem.currency;
                        const visible = gem.visible;
                        const type = gem.type;
                        const isDefault = gem.default;




                        const Itemname = document.getElementById("item-name");
                        Itemname.textContent = name + " " + type;
                        document.getElementById("game-name").textContent = gameName;
                        document.getElementById("item-price").textContent = price + currency;
                        let buyBTN = document.getElementById("buy-offer-btn-62918");

                        buyBTN.addEventListener("click", () => {
                            error(2500);
                        })




                    } else {

                    }
                });
            } else {
                console.error("Invalid Token");
            }
        })
        .catch(err => {
            console.error(err);
        });
}

function cancel() {
    location.reload()
}



//SETTINGS
var translations;

function translate(key, lang, translations) {
    return translations[lang][key];
}
function changeLanguage() {
    fetch('./assets/data/lang/language.json')
        .then(response => response.json()) // Analysiere die Antwort als JSON
        .then(data => {
            const html = document.getElementById("html");
            let lang = localStorage.getItem("lang");
            html.setAttribute("lang", lang);

            translations = data; // Speichere die Übersetzungen in der Variablen translations
            document.getElementById("site-title").innerHTML = translate("title", lang, translations);
            document.getElementById("game-main-name-text").innerHTML = translate("title", lang, translations);
            document.getElementById("language-text").innerHTML = translate("language", lang, translations);
            document.getElementById("general-text").innerHTML = translate("general", lang, translations);
            document.getElementById("settings-text").innerHTML = translate("settings", lang, translations);
            document.getElementById("play-button-72819").innerHTML = translate("play", lang, translations);
            document.getElementById("shop-text").innerHTML = translate("shop", lang, translations);
            document.getElementById("skins-text").innerHTML = translate("shop_skins", lang, translations);
            document.getElementById("daily-text").innerHTML = translate("shop_daily", lang, translations);
            document.getElementById("gems-text").innerHTML = translate("shop_gems", lang, translations);
            document.getElementById("special-text").innerHTML = translate("shop_special", lang, translations);
            document.getElementById("shop-btn-text").innerHTML = translate("shop", lang, translations);
            document.getElementById("credit-btn-text").innerHTML = translate("credits", lang, translations);
            document.getElementById("settings-btn-text").innerHTML = translate("settings", lang, translations);
            document.getElementById("exit-btn-text").innerHTML = translate("exit", lang, translations);
            document.getElementById("about-nav-text").innerHTML = translate("about", lang, translations);
            document.getElementById("general-nav-text").innerHTML = translate("general", lang, translations);
            document.getElementById("profile-nav-text").innerHTML = translate("profile", lang, translations);
            document.getElementById("buy-confirm-btn-text").innerHTML = translate("buy", lang, translations);
            document.getElementById("cancel-confirm-btn-text").innerHTML = translate("cancel", lang, translations);
            document.getElementById("profile-text").innerHTML = translate("profile", lang, translations);
            document.getElementById("best-score-text").innerHTML = translate("best_score", lang, translations);
            document.getElementById("current-score-text").innerHTML = translate("current_score", lang, translations);
            document.getElementById("advanced-settings-text").innerHTML = translate("advanced_settings", lang, translations);
            document.getElementById("delete-profile-btn-text").innerHTML = translate("profile_delete", lang, translations);
            document.getElementById("signed-in-profile-text").innerHTML = translate("signed_in_as", lang, translations);
            document.getElementById("about-text").innerHTML = translate("about", lang, translations);
            document.getElementById("about-version-text").innerHTML = translate("version", lang, translations);
            document.getElementById("about-realease-text").innerHTML = translate("realease", lang, translations);
            document.getElementById("version-about-beta-text").innerHTML = translate("beta", lang, translations);
            document.getElementById("about-buildnumber-text").innerHTML = translate("buildnumber", lang, translations);
            document.getElementById("about-script-text").innerHTML = translate("script", lang, translations);
            document.getElementById("script-about-text").innerHTML = translate("javascript", lang, translations);
            document.getElementById("about-style-text").innerHTML = translate("style", lang, translations);
            document.getElementById("styling-about-text").innerHTML = translate("css", lang, translations);
            document.getElementById("about-framework-text").innerHTML = translate("framework", lang, translations);
            document.getElementById("external-links-text").innerHTML = translate("external_links", lang, translations);
            document.getElementById("more-games-text").innerHTML = translate("more_games", lang, translations);
            document.getElementById("credit-idea-title").innerHTML = translate("idea", lang, translations);
            document.getElementById("credit-software-developer-title").innerHTML = translate("software_developer", lang, translations);
            document.getElementById("credit-audio-title").innerHTML = translate("audio", lang, translations);
            document.getElementById("credit-graphic-title").innerHTML = translate("graphic", lang, translations);
            document.getElementById("credit-style-title").innerHTML = translate("style", lang, translations);
            document.getElementById("credit-scripting-title").innerHTML = translate("scripting", lang, translations);
            document.getElementById("credit-snake-idea-title").innerHTML = translate("idea", lang, translations);
            document.getElementById("credit-snake-software-developer-title").innerHTML = translate("software_developer", lang, translations);
            document.getElementById("credit-snake-co-software-developer-title").innerHTML = translate("co_software_developer", lang, translations);
            document.getElementById("credit-snake-graphic-title").innerHTML = translate("graphic", lang, translations);
            document.getElementById("credit-snake-style-title").innerHTML = translate("style", lang, translations);
            document.getElementById("credit-snake-scripting-title").innerHTML = translate("scripting", lang, translations);
            document.getElementById("game-credit-name").innerHTML = translate("title", lang, translations);
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



function changeUsername() {
    const username = localStorage.getItem("username");
    const usernameElement = document.getElementById("username-text");
    let usernameElementValue = usernameElement.value;

    localStorage.setItem("username", usernameElementValue);
    usernameElementValue = username
    usernameElement.disabled = true
    setTimeout(() => {
        location.reload()
    }, 300);
    


}
function load() {
    const username = localStorage.getItem("username");
    const usernameElement = document.getElementById("username-text");
    if (username === "" || username === null) {
        usernameElement.value = "guest"
    } else {
        usernameElement.value = username;
    }

    const bestScore = localStorage.getItem("BestScore")
    document.getElementById("best-score-number").textContent = bestScore || 0;
    const curScore = localStorage.getItem("score")
    document.getElementById("current-score-number").textContent = curScore || 0;
    document.getElementById("signed-in-profile-name").textContent = username || "guest";




}

function delProfile() {
    const username = localStorage.getItem("username");
    let confirmDeletion = confirm("Do you want to delete all your stuff!");
    if (confirmDeletion === true) {
        console.log("Deleting Account from " + username);
        localStorage.clear();
        localStorage.setItem("lang", "de")
        location.reload()
    } else {

    }
}





//ERROR Handler
function error(errorID) {
    const category = Math.floor(errorID / 1000); // Extract the first digit as category
    const errorCode = errorID % 1000; // Extract the remaining digits as error code

    if (category === 1) {
        // Do something for SHOP category
        console.log("Error in SHOP with code:", errorCode);
    } else if (category === 2) {
        // Do something for another category
        console.log("In Shop th error ", errorCode + " occured!");
    } else if (category === 3) {
        // Do something for another category
        console.log("Error in another category with code:", errorCode);
    } else if (category === 4) {
        // Do something for another category
        console.log("Error in another category with code:", errorCode);
    } else if (category === 5) {
        // Do something for another category
        console.log("Error in another category with code:", errorCode);
    } else {
        // Handle other cases
        console.log("Unknown category with code:", errorCode);
    }
}

load()
changeLanguage()
music()