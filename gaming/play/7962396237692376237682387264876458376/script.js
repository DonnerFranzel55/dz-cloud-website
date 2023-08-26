let tokens = 1000;
let gems = 2000;
let multiplier = 1.05;
let bettedTokens = 0;
let bettedNumber = 1;
let maxNumber = 2;
let freeSpins = 10;
let originalMultiplier = 1.05; // Ursprünglicher Multiplikator

let effectTimeout; // Variable zum Speichern des Timeout-Objekts

function display() {

    winChance = 1 / maxNumber * 100



    document.getElementById("user-tokens").textContent = tokens.toFixed(0)
    document.getElementById("user-gems").textContent = gems.toFixed(2)
    document.getElementById("user-freespins").textContent = freeSpins.toFixed(0)
    document.getElementById("multiplier").textContent = multiplier.toFixed(2)
    document.getElementById("user-betted-tokens").textContent = bettedTokens.toFixed(2)
    document.getElementById("user-betted-number-result").textContent = bettedNumber
    document.getElementById("maxNumber").textContent = maxNumber
    document.getElementById("win-chance").textContent = winChance.toFixed(2) + "%"
}
function set() {
    const userbet = document.getElementById("user-bet");
    userbet.setAttribute("max", tokens)
    if (tokens <= 0) {
        betBTN.disabled = true
        tokens = 0
    }
}

function bet() {
    const userbet = document.getElementById("user-bet").value;
    const userbetE = document.getElementById("user-bet");
    const userbettedNumber = document.getElementById("user-betted-number").value;
    const betBTN = document.getElementById("bet-btn");


    if (userbet === "" || userbettedNumber === "") {
        console.log("Nicht setzen geht nicht");
    } else if (tokens <= 0) {
        betBTN.disabled = true
        tokens = 0
    } else if (userbet > tokens) {
        userbetE.value = tokens.toFixed(0)
    } else if (freeSpins > 0) {
        bettedTokens = parseInt(userbet)
        bettedNumber = parseInt(userbettedNumber)
        betBTN.disabled = true
        freeSpins -= 1
        randomNumber()
    } else if (parseFloat(userbet) <= 0) {
        tokens = 0
    } else {
    
        bettedTokens = parseInt(userbet)
        bettedNumber = parseInt(userbettedNumber)
        betBTN.disabled = true
        tokens = tokens - parseInt(userbet)
        randomNumber()
    }

    display()
}

function randomNumber() {
    const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    document.getElementById("number").textContent = randomNumber
    result(randomNumber)
}

function result(number) {
    const betBTN = document.getElementById("bet-btn");
    const status = document.getElementById("user-state");
    if (number === bettedNumber) {
        tokens = tokens + bettedTokens * multiplier
        gems = gems + 0.75 * multiplier
        status.textContent = "JACKPOT"
        status.classList.add("text-jackpot")
        betBTN.disabled = false
    } else if (tokens <= 0) {
        betBTN.disabled = true
        status.textContent = "ALLES VERLOREN"
        status.classList.remove("text-jackpot")
        status.classList.add("text-danger")
    } else {
        betBTN.disabled = false
        status.textContent = "VERLOREN"
        status.classList.remove("text-jackpot")
        status.classList.add("text-danger")

    }
}

function buy(type, item, duration, amount) {
    const y = parseInt(item);
    const milliseconds = duration * 60 * 1000 || 200; // Standarddauer des Effekts in Millisekunden
    let x = type.toString();
    const moneyType = gems;
    const moneyAmount = parseInt(amount);

    if (moneyAmount > moneyType) {
        console.log("Zu teuer");
    } else if (type === "multiplier") {
        
        gems -= moneyAmount;
        console.log("Artikel gekauft:", x);
        console.log("Verbleibende Edelsteine:", gems);

        if (effectTimeout) {
            clearTimeout(effectTimeout); // Vorherigen Effekt abbrechen
        }

        x = y;
        console.log("Effekt des gekauften Artikels aktiv!");
        multiplier = y; // Setzen Sie den Multiplikator auf den gekauften Wert
        display();

        effectTimeout = setTimeout(() => {
            multiplier = originalMultiplier; // Effekt rückgängig machen
            console.log("Effekt abgelaufen.");
            display();
        }, milliseconds);
    }else if (type === "freeSpins") {
        
        gems -= moneyAmount;
        console.log("Artikel gekauft:", type);
        console.log("Verbleibende Edelsteine:", gems);

        freeSpins += y; // Setzen Sie den Multiplikator auf den gekauften Wert
        display();
    }
}






display()
set()