const delivIP = "http://192.168.178.27:5501/"

window.onload = function handleToken() {
    loadApps()
    setTimeout(() => {
        fetch(delivIP +'account/json/users.json')
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data.users)) {
                data.users.forEach(user => {
                    let sessionToken = sessionStorage.getItem("localUPST");
                    let localToken = localStorage.getItem("localUPST");
                    if (user.secret_token === sessionToken || user.secret_token === localToken) {

                        loadData(user)

                    } else {
                        console.log("Data recived!")
                    }
                });
            } else {
                console.error("Invalid Token");
                location.href = "/auth/logout/logout.html"
            }
        })
        .catch(err => {
            console.error(err);
        });
    }, 500);
    
}

function loadData(user) {
    console.log("Loading user data...");
    console.log("Sync user...");


    const id = user.id;
    const profile = user.profile;
    const adress = profile.adress
    const banking = user.banking
    const delivIP = "http://192.168.178.27:5501/"

    //Profile
    const name = profile.name;
    const surname = profile.surname;
    const path = profile.path;
    const pathlocal = localStorage.getItem("lsppfu")
    const email = profile.email;
    const birthday = profile.birthday;
    const phonenumber = profile.phone;
    const gender = profile.gender;
    const pronaouce = profile.pronaouce;
    const language = profile.language;
    const color = profile.color;
    const info = profile.info

    //Adress
    const number = adress.number;
    const street = adress.street;
    const city = adress.city;
    const zip = adress.zip;
    const region = adress.region;
    const country = adress.country;

    //Banking
    const BankingCountry = banking.country
    mapCountryCodeToName(BankingCountry).then(result => bankingCountry.textContent = result)
    const cards = banking.currency;



    const fullname = name + " " + surname;
    const fullAdress = street + " " + number + ", " + zip + " " + city + ", " + region + " " + country
    mapLanguageCodeToName(language).then(result => tableLanguage.textContent = result)
    mapGenderToName(gender).then(result => tableGender.textContent = result)

    const imgApp = document.getElementById('user-profile-picture-apps')
    const imgHeader = document.getElementById('user-profile-picture-header')
    const imgAccountSection = document.getElementById('user-profile-picture-accounts')
    const nameAccounts = document.getElementById('user-profile-name-accounts')
    const emailAccounts = document.getElementById('user-profile-email-accounts')
    const ManageAccountBtn = document.getElementById("user-account-access-btn");
    const AccountBtn = document.getElementById("user-account-btn");
    const logoutbtn = document.getElementById("user-logout-btn");
    const tableName = document.getElementById("user-personal-name");
    const tableBirthday = document.getElementById("user-personal-birthday");
    const tableGender = document.getElementById("user-personal-gender");
    const tableEmail = document.getElementById("user-personal-email");
    const tablePhone = document.getElementById("user-personal-phone");
    const tableAdress = document.getElementById("user-personal-adress");
    const tablePronaouce = document.getElementById("user-personal-pronaouce");
    const tableLanguage = document.getElementById("user-personal-language");
    const tableColor = document.getElementById("user-personal-color");
    const bankingCountry = document.getElementById("user-banking-country");
    // const = document.getElementById("");
    // const = document.getElementById("");
    // const = document.getElementById("");
    // const = document.getElementById("");
    // const = document.getElementById("");
    // const = document.getElementById("");
    // const = document.getElementById("");
    // const = document.getElementById("");
    // const = document.getElementById("");
    // const = document.getElementById("");
    // const = document.getElementById("");
    // const = document.getElementById("");
    // const = document.getElementById("");
    // const = document.getElementById("");
    // const = document.getElementById("");
    // const = document.getElementById("");
    // const = document.getElementById("");
    // const = document.getElementById("");
    // const = document.getElementById("");
    // const = document.getElementById("");
    // const = document.getElementById("");
    // const = document.getElementById("");
    // const = document.getElementById("");
    // const = document.getElementById("");
    // const = document.getElementById("");
    // const = document.getElementById("");
    // const = document.getElementById("");
    // const = document.getElementById("");

    logoutbtn.classList.remove('d-none')
    logoutbtn.href = "/auth/logout/logout.html?logoutuserid=" + id;

    nameAccounts.textContent = fullname;

    emailAccounts.textContent = email;


    AccountBtn.href = "/account/" + "?userid=" + id


    ManageAccountBtn.textContent = "DZ Account verwalten";
    ManageAccountBtn.href = "/account/" + "?userid=" + id







    //Account SIte
    const title = document.getElementById('title')
    const nameHeaderElement = document.getElementById('account-user-name');
    const emailAccountsHeaderElement = document.getElementById('account-user-email');
    const imgAccountsHeaderElement = document.getElementById('account-user-img-header');

    title.textContent = fullname + " - DZ Account"
    nameHeaderElement.textContent = name + " " + surname;
    emailAccountsHeaderElement.textContent = email;

   


    tableName.textContent = fullname;
    tableBirthday.textContent = birthday;
    tableGender.textContent = gender;
    tableEmail.textContent = email;
    tablePhone.textContent = phonenumber;
    tableAdress.textContent = fullAdress;
    tablePronaouce.textContent = pronaouce;
    tableColor.textContent = color;


    cards.forEach(card => {
        // Erstelle das äußere div-Element
        var outerDiv = document.createElement("div");
        outerDiv.classList.add("p-2", "border", "rounded", "mb-2");
        outerDiv.style.cursor = "pointer"
        outerDiv.setAttribute("data-bs-target", "#" + card.id)
        outerDiv.setAttribute("data-bs-toggle", "modal")

        // Erstelle das innere div-Element (row)
        var innerDivRow = document.createElement("div");
        innerDivRow.classList.add("row");

        // Erstelle die linke Spalte mit dem Bild
        var leftColumn = document.createElement("div");
        leftColumn.classList.add("col-3");
        var img = document.createElement("img");
        img.src = "/assets/img/icons/account/credit_card.svg";
        img.width = "50";
        img.alt = "Card";
        leftColumn.appendChild(img);

        const countryCode = card.country;
        const lowCountryCode = countryCode.toLowerCase();

        var flag = document.createElement("img");
        flag.src = delivIP + "img/flags/" + lowCountryCode + ".png";
        flag.width = "30";
        flag.alt = countryCode;
        flag.classList.add("ratio16x9")
        leftColumn.appendChild(flag);




        // Erstelle die rechte Spalte mit den Überschriften
        var rightColumn = document.createElement("div");
        rightColumn.classList.add("col");
        var h3 = document.createElement("h3");
        h3.textContent = card.name;
        var type = document.createElement("span");
        type.textContent = card.type;
        type.classList.add("ms-3")
        type.style.fontSize = "16px"
        var country = document.createElement("span");
        mapCountryCodeToName(card.country).then(result => country.textContent = result)
        country.classList.add("ms-3")
        country.style.fontSize = "16px"
        var h5 = document.createElement("h5");
        h5.textContent = card.country + card.iban;
        h3.appendChild(type)
        h3.appendChild(country)
        rightColumn.appendChild(h3);
        rightColumn.appendChild(h5);

        // Füge die linken und rechten Spalten dem inneren div hinzu
        innerDivRow.appendChild(leftColumn);
        innerDivRow.appendChild(rightColumn);

        // Füge das innere div dem äußeren div hinzu
        outerDiv.appendChild(innerDivRow);

        // Füge das äußere div dem gewünschten Elternelement hinzu (z.B. dem Body)
        var parentElement = document.getElementById("card-container"); // Ändern Sie dies entsprechend Ihrem Szenario
        parentElement.appendChild(outerDiv);

    });

    cards.forEach(card => {
        const modal = document.createElement('div');
        modal.classList.add('modal', 'fade');
        modal.id = card.id;

        const modalDialog = document.createElement('div');
        modalDialog.classList.add('modal-dialog', "modal-dialog-scrollable");

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        const modalHeader = document.createElement('div');
        modalHeader.classList.add('modal-header');

        const modalTitle = document.createElement('h5');
        modalTitle.classList.add('modal-title');
        modalTitle.textContent = card.name;

        const closeButton = document.createElement('button');
        closeButton.type = 'button';
        closeButton.classList.add('btn-close');
        closeButton.setAttribute('data-bs-dismiss', 'modal');
        closeButton.setAttribute('aria-label', 'Close');

        const modalBody = document.createElement('div');
        modalBody.classList.add('modal-body');
        const cardContainer = modalBody

        const cardInfo = document.createElement('div');
        cardInfo.classList.add('card');

        const cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header');
        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = 'Kreditkarten-Details';
        cardHeader.appendChild(cardTitle);

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const row = document.createElement('div');
        row.classList.add('row');

        const col1 = document.createElement('div');
        col1.classList.add('col-md-6');
        const cardImg = document.createElement('img');
        cardImg.src = '/assets/img/icons/account/credit_card.svg';
        cardImg.classList.add('card-img-top');
        cardImg.alt = 'Kreditkartenbild';
        col1.appendChild(cardImg);

        const col2 = document.createElement('div');
        col2.classList.add('col-md-6');
        const cardSubtitle1 = document.createElement('h6');
        cardSubtitle1.classList.add('card-subtitle', 'mb-2', 'text-muted');
        cardSubtitle1.textContent = 'Kreditkartennummer';
        const cardText1 = document.createElement('p');
        cardText1.classList.add('card-text');
        cardText1.textContent = card.country + card.iban;
        const cardSubtitle2 = document.createElement('h6');
        cardSubtitle2.classList.add('card-subtitle', 'mb-2', 'text-muted');
        cardSubtitle2.textContent = 'Gültig bis';
        const cardText2 = document.createElement('p');
        cardText2.classList.add('card-text');
        cardText2.textContent = card.expires;
        const cardSubtitle3 = document.createElement('h6');
        cardSubtitle3.classList.add('card-subtitle', 'mb-2', 'text-muted');
        cardSubtitle3.textContent = 'Inhaber';
        const cardText3 = document.createElement('p');
        cardText3.classList.add('card-text');
        cardText3.textContent = fullname;
        const cardSubtitle4 = document.createElement('h6');
        cardSubtitle4.classList.add('card-subtitle', 'mb-2', 'text-muted');
        cardSubtitle4.textContent = 'Kartenanbieter';
        const cardText4 = document.createElement('p');
        cardText4.classList.add('card-text');
        cardText4.textContent = getCardProvider(card.iban);

        col2.appendChild(cardSubtitle1);
        col2.appendChild(cardText1);
        col2.appendChild(cardSubtitle2);
        col2.appendChild(cardText2);
        col2.appendChild(cardSubtitle3);
        col2.appendChild(cardText3);
        col2.appendChild(cardSubtitle4);
        col2.appendChild(cardText4);

        row.appendChild(col1);
        row.appendChild(col2);

        cardBody.appendChild(row);

        cardInfo.appendChild(cardHeader);
        cardInfo.appendChild(cardBody);

        cardContainer.appendChild(cardInfo);

        const modalFooter = document.createElement('div');
        modalFooter.classList.add('modal-footer');

        const closeButtonFooter = document.createElement('button');
        closeButtonFooter.type = 'button';
        closeButtonFooter.classList.add('btn', 'btn-secondary');
        closeButtonFooter.setAttribute('data-bs-dismiss', 'modal');
        closeButtonFooter.textContent = 'Schließen';

        modalHeader.appendChild(modalTitle);
        modalHeader.appendChild(closeButton);

        modalFooter.appendChild(closeButtonFooter);

        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalContent.appendChild(modalFooter);

        modalDialog.appendChild(modalContent);

        modal.appendChild(modalDialog);

        body.appendChild(modal);
    });

 if (pathlocal === null) {
        imgAccountsHeaderElement.src = path;
        imgApp.src = path;
        imgHeader.src = path;
        imgAccountSection.src = path
        localStorage.setItem("lsppfu", path)

    } else {
        imgAccountsHeaderElement.src = pathlocal;
        imgApp.src = pathlocal;
        imgHeader.src = pathlocal;
        imgAccountSection.src = pathlocal
    }



    tableColor.style.color = color
    unselectMode()
    checkCode()

    console.log("Successfully sync from: " + name + " " + surname);



}

function loadPP() {
    //Profile Picture Modal Elemente
    const ppcmlid = document.getElementById("ppcmlid");
    const ppcmppscd = document.getElementById("ppcmppscd");
    const picArray = [
        //PNG
        "img/Avatare/png/00000-00002-md.png",
        "img/Avatare/png/00002-00005-md.png",
        "img/Avatare/png/00003-00030-md.png",
        "img/Avatare/png/00005-00017-md.png",
        "img/Avatare/png/00006-00025-md.png",
        "img/Avatare/png/00011-00000-md.png",
        "img/Avatare/png/00015-00008-md.png",
        "img/Avatare/png/00016-00003-md.png",
        "img/Avatare/png/00016-00004-md.png",
        "img/Avatare/png/00016-00005-md.png",
        "img/Avatare/png/00016-00006-md.png",
        "img/Avatare/png/00016-00007-md.png",
        "img/Avatare/png/00016-00008-md.png",
        "img/Avatare/png/00016-00009-md.png",
        "img/Avatare/png/00017-00000-md.png",
        "img/Avatare/png/00017-00001-md.png",
        "img/Avatare/png/00017-00005-md.png",
        "img/Avatare/png/00018-00007-md.png",
        "img/Avatare/png/00021-00001-md.png",
        "img/Avatare/png/00021-00005-md.png",
        "img/Avatare/png/00023-00002-md.png",
        "img/Avatare/png/00034-00004-md.png",
        "img/Avatare/png/00044-00000-md.png",
        "img/Avatare/png/00051-00000-md.png",
        "img/Avatare/png/00052-00000-md.png",
        "img/Avatare/png/00054-00000-md.png",
        "img/Avatare/png/00055-00000-md.png",
        "img/Avatare/png/00057-00001-md.png",
        "img/Avatare/png/00060-00001-md.png",
        "img/Avatare/png/00060-00002-md.png",
        "img/Avatare/png/00061-00000-md.png",
        "img/Avatare/png/00067-00004-md.png",
        "img/Avatare/png/00100-00000-md.png",
        "img/Avatare/png/Ariele.png",
        "img/Avatare/png/bart.png",
        "img/Avatare/png/dagobert.png",
        "img/Avatare/png/edney.png",
        "img/Avatare/png/enderman.png",
        "img/Avatare/png/fox.png",
        "img/Avatare/png/hermet.png",
        "img/Avatare/png/hock.png",
        "img/Avatare/png/homer.png",
        "img/Avatare/png/hopps.png",
        "img/Avatare/png/anna.png",
        "img/Avatare/png/dipper.png",
        "img/Avatare/png/doofenschmirz.png",
        "img/Avatare/png/drStrange.png",
        "img/Avatare/png/elsa.png",
        "img/Avatare/png/raya.png",
        "img/Avatare/png/rapunzel.png",
        "img/Avatare/png/vaiana.png",
        "img/Avatare/png/hulk.png",
        "img/Avatare/png/kimpossible.png",
        "img/Avatare/png/lisa.png",
        "img/Avatare/png/lupinheist.png",
        "img/Avatare/png/march.png",
        "img/Avatare/png/melon.png",
        "img/Avatare/png/minnie.png",
        "img/Avatare/png/panda.png",
        "img/Avatare/png/penguin.png",
        "img/Avatare/png/Perry.png",
        "img/Avatare/png/player456.png",
        "img/Avatare/png/robinhood.png",
        "img/Avatare/png/sheep.png",
        "img/Avatare/png/sirengirl.png",
        "img/Avatare/png/SQBoss.png",
        "img/Avatare/png/squirrel.png",
        "img/Avatare/png/stormtrooper.png",
        "img/Avatare/png/wednesday.png",
        "img/Avatare/png/wednesdayDad.png",
        "img/Avatare/png/wednesdayMom.png",
        "img/Avatare/png/winnie.png",
        "img/Avatare/png/6f26ddd1bf59740c536d2274bb834a05.png",
        "img/Avatare/png/7c8f476123d28d103efe381543274c25.png",
        "img/Avatare/png/c09a43a372ba81e3018c3151d4ed4773.png",
        "img/Avatare/png/AAAABfMnIhIdkM8LdU5BZaYVaxoVTrMGzIjafPBzCQUwebzxeK7JKvcI7-Jm-5AituzcdJYIT_45NSkbbTwfVva-E01G9J1YVVBveA.png",
        "img/Avatare/png/AAAABQ-J0xxqaAfVMOdAGYqD2kLbR95eum0jvCaYFXpwCksku5wKBwXcMesEpoOaLYERI2KzsRkAVXNlO6s7AlAYm7AWOuo-ux_u3w.png",
        "img/Avatare/png/AAAABQ1QyQM7KlZtw3A0yC4Gf-TsjFkQCw59OLaMmUbaQnudIX5CPscJ7hcoifVKY8jruYv7soLo23qZAioWtzJ-nXMmYqiFIkdm7A.png",
        "img/Avatare/png/AAAABQbPHLHMADSYHIjUxUrTHwEeJXOX-rF9NpbKyfLmXJnukropAUAR-faZGpu9eIgjUKX5udaZMo6Wze-ifSqCOKW7CfizWSlYJg.png",
        "img/Avatare/png/AAAABQLGmFynSN-44kcdclbjgaSIgThBZ9NqR31wLt0s4wvec8XoDyc6eNvapsKe-xy6CJEbWVpshUoyer1WwfMKLy0AplsmtNhATg.png",
        "img/Avatare/png/AAAABRHaDuNoRXKqSTEcAZY0gXxm_1PORu-nHZOb67R0qXflCAgDsB-tBqmZIFU9JPGSHl2Qa9OyzvqcDWbjzgaMLe1W7mpUmuGuTg.png",
        "img/Avatare/png/AAAABRvZjptlRH4zkZeMHEz_8KY-bIllS3vmndJphxMgOE_M_DFcLJlPTk0qgDTEFPlR4F3zZxjjNQohbFaLYnJAqVtOyjpVcy-m-g.png",
        "img/Avatare/png/AAAABSjWB2nFuR8Ri6xzQ3Wu0djefSIhCdrWkFyFfNOCh612BZUZDykQpK4CrzvnhZeSyTWqUh0aSVaISMQteTWOkIdHIuDCigFMfA.png",
        "img/Avatare/png/AAAABSQGQWkzf71tVsbzO1dU6kvtezyXhoWTkUzebNS_MSeRVGdckDNMVs1q7DIks1J_qGDNfrVjr2OEZvTPsNq9zBLKCbgRvCj-RA.png",
        "img/Avatare/png/AAAABSu7vTcLsqapL1tWbSKc-Ac70mFst-qkclkO1SY3b2-MQsAhM5tCmBQbSqORBobdaLxpYhqeECA2ebA57GhlptujRayBZLOx6A.png",
        "img/Avatare/png/AAAABTSHVug1LQSgwFxSPxlVezOCbOYLpHvy1rNPZbpx5Q_7Yxj8GJPsumOnmqNWog-nr_oFZ4sIDIspHWQsKM1CGdWbqx9rwcuZVA.png",
        "img/Avatare/png/AAAABURII1Uzlnm4-yPz2g5gl1Ysr2sgh0lKyWIWJPAia-UOTYcZAA0S2qecB6ALQgY-CKgbuPhVWmTPUWyTyXdVZ98FeK91A6JIjA.png",
        "img/Avatare/png/AAAABX0KgNbm96sWwrerIqVp4Dmk-ri5I3-ktNYfFUHTxGu2M7S_AbiaYc7nu_X23VKWLfHMe6FDGMZ0s7QpR-I2oDYF6lG3ucgcRQ.png",
        "img/Avatare/png/AAAABXxCuJHbtT8hTgZ9wcBbe-9dvVaQi6lg_rRJ6_hzSzLreMCrcm1WAVa4bTwkPW6CSFDLB4rN7Eq26WVEY5cDTQJ52SFQQhfStw.png",
        "img/Avatare/png/A2001_m.png",
        "img/Avatare/png/A2002_m.png",
        "img/Avatare/png/A2004_m.png",
        "img/Avatare/png/A2072_m.png",
        "img/Avatare/png/A2104_m.png",
        "img/Avatare/png/A2115_m.png",
        "img/Avatare/png/A2119_m.png",
        "img/Avatare/png/7a4b1ca6a72a50a555c236e29f35eaab.png",
        //JPG
        "img/Avatare/jpg/420-elon-30765670.jpg",
        "img/Avatare/jpg/cool-pepe-d239a60d.jpg",
        "img/Avatare/jpg/drake-84363f8e.jpg",
        "img/Avatare/jpg/evil-doge-235c2d80.jpg",
        "img/Avatare/jpg/harold-ca4e0811.jpg",
        "img/Avatare/jpg/leonardo-009af50d.jpg",
        "img/Avatare/jpg/merkel-clap-3116d8c3.jpg",
        "img/Avatare/jpg/mim-chan-9decefed.jpg",
        "img/Avatare/jpg/spongegar-cad444b7.jpg",
        "img/Avatare/jpg/surprised-pikachu-983150f6.jpg",
        "img/Avatare/jpg/tuxedo-pooh-5d0423df.jpg",
        "img/Avatare/jpg/what-shrek-b7f14e76.jpg",
        //GIF
        "img/Avatare/gif/a_5c83ebe27bbf5fc1798dd0559062d464.gif",
        "img/Avatare/gif/9oh87gw34vtzj9834wft0hj790z34wqdf.gif",
        "img/Avatare/gif/809jh3124rt79h3re89zgf9uhtreqw8z6g.gif"
    ]


    picArray.forEach(path => {
        const imgDiv = document.createElement("div");
        imgDiv.classList.add("col", "mb-2")
        const img = document.createElement("img");
        img.src = delivIP + path;
        img.alt = "Profile Picture"
        img.width = "80"
        img.style.cursor = "pointer"
        img.classList.add("rounded-circle")
        img.setAttribute("onclick", "selectPP('" + delivip + path + "')")
        imgDiv.appendChild(img);
        ppcmppscd.appendChild(imgDiv);

    });
    ppcmlid.classList.add("d-none")


}

function selectPP(picLink) {
    localStorage.setItem("lsppfu", picLink)
    location.href = ""
}

function resetPP() {
    localStorage.removeItem("lsppfu")
    location.href = ""

}

function unselectMode() {
    const body = document.getElementById("body");
    const toggler = document.getElementById("unselectModeToggler")
    const asmlocal = localStorage.getItem("asm")

    if (toggler.checked === true) {
        body.classList.add("user-select-none")
        localStorage.setItem("asm", true)
    } else if (toggler.checked === false) {
        body.classList.remove("user-select-none")
        localStorage.setItem("asm", false)
    } else if (asmlocal === true) {
        body.classList.add("user-select-none")
        localStorage.setItem("asm", true)
        toggler.checked = true
    } else if (asmlocal === false) {
        body.classList.remove("user-select-none")
        localStorage.setItem("asm", false)
        toggler.checked = false
    } else {
        console.log("Fehler beim Einstellen");
    }

}

function checkCode() {
    const Codelocal = localStorage.getItem("umsecCfAccPro")
    if (Codelocal === null) {
        const inputCode = document.getElementById("user-input-sec-code");
        const confirmBTN = document.getElementById("confirm-set-code-button-83928");
        inputCode.classList.add("d-block")
        confirmBTN.classList.add("d-block")
    } else {
        const confirmBTN = document.getElementById("confirm-set-code-button-83928");
        const confirmDelBTN = document.getElementById("confirm-del-code-button-94504");
        const confirmForgottenBTN = document.getElementById("confirm-forgot-code-button-57373");
        confirmForgottenBTN.classList.remove("d-none")
        confirmBTN.classList.add("d-none")
        confirmDelBTN.classList.remove("d-none")
    }
}
function setCode() {
    const inputCode = document.getElementById("user-input-sec-code").value;
    const confirmBTN = document.getElementById("confirm-set-code-button-83928");
    const confirmDelBTN = document.getElementById("confirm-del-code-button-94504");
    confirmBTN.disabled = true
    confirmDelBTN.disabled = false
    if (inputCode.length >= 4) {
        localStorage.setItem("umsecCfAccPro", inputCode)

    } else {
        console.log("Code is to short.");
        confirmBTN.disabled = false
    }


    setTimeout(() => {
        const inputCodeE = document.getElementById("user-input-sec-code");
        inputCodeE.value = ""
        checkCode()
    }, 1000);
}

function delCode() {
    const Codelocal = localStorage.getItem("umsecCfAccPro");
    const inputCode = document.getElementById("user-input-sec-code").value;
    const confirmBTN = document.getElementById("confirm-set-code-button-83928");
    const confirmDelBTN = document.getElementById("confirm-del-code-button-94504");
    const confirmForgottenBTN = document.getElementById("confirm-forgot-code-button-57373");

    if (Codelocal === inputCode) {
        localStorage.removeItem("umsecCfAccPro")
        confirmDelBTN.disabled = true;
        confirmBTN.disabled = false
        const inputCodeE = document.getElementById("user-input-sec-code");
        inputCodeE.value = ""



        setTimeout(() => {
            confirmForgottenBTN.classList.add("d-none")
            confirmBTN.classList.remove("d-none")
            confirmDelBTN.classList.add("d-none")
        }, 1000);
    } else {
        console.log("Not right");
    }

}

function forgotCode() {

    const inputCodeE = document.getElementById("user-input-sec-code");
    const confirmDelBTN = document.getElementById("confirm-del-code-button-94504");
    const confirmForgottenBTN = document.getElementById("confirm-forgot-code-button-57373");
    inputCodeE.setAttribute("placeholder", "DZ CLOUD Password");
    inputCodeE.setAttribute("type", "password")
    confirmDelBTN.classList.add("d-none")
    confirmForgottenBTN.classList.replace("btn-link", "btn-danger");
    confirmForgottenBTN.textContent = ""
    confirmForgottenBTN.textContent = "Code löschen";




    fetch(delivIP +'accounts/json/users.json')
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data.users)) {
                data.users.forEach(user => {
                    let sessionToken = sessionStorage.getItem("localUPST");
                    let localToken = localStorage.getItem("localUPST");
                    if (user.secret_token === sessionToken || user.secret_token === localToken) {

                        const pswd = user.profile.password;
                        const inputCode = document.getElementById("user-input-sec-code").value;

                        if (pswd === inputCode) {
                            localStorage.removeItem("umsecCfAccPro")
                            const confirmBTN = document.getElementById("confirm-set-code-button-83928");
                            const confirmDelBTN = document.getElementById("confirm-del-code-button-94504");
                            const confirmForgottenBTN = document.getElementById("confirm-forgot-code-button-57373");
                            const inputCodeE = document.getElementById("user-input-sec-code");

                            inputCodeE.setAttribute("placeholder", "Code");
                            inputCodeE.setAttribute("type", "text")
                            confirmForgottenBTN.classList.replace("btn-danger", "btn-link");
                            confirmForgottenBTN.textContent = ""
                            confirmForgottenBTN.textContent = "Code vergessen?";







                            confirmBTN.classList.remove("d-none")
                            confirmBTN.disabled = false
                            confirmDelBTN.classList.add("d-none")
                            confirmForgottenBTN.classList.add("d-none")
                            inputCodeE.value = ""
                        } else {
                            console.log("Password ist falsch");
                        }






                    } else {
                        console.log("Data recived!")
                    }
                });
            } else {
                console.error("Invalid Token");
                location.href = "/auth/logout/logout.html"
            }
        })
        .catch(err => {
            console.error(err);
        });
}

function getCardProvider(cardNumber) {
    const firstDigit = cardNumber.charAt(0);
    switch (firstDigit) {
        case '1':
            return 'Girocard';
        case '4':
            return 'Visa';
        case '5':
            return 'Mastercard';
        case '3':
            if (cardNumber.charAt(1) === '4' || cardNumber.charAt(1) === '7') {
                return 'American Express';
            }
        default:
            return 'Unknown';
    }
}

function loadApps() {
    fetch(delivIP +'data/services/dzservice.json')
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data.apps)) {
                data.apps.forEach((app, index) => {
                    const appList = document.getElementById("appList");
                    if (index % 3 === 0) {
                        const row = document.createElement("div");
                        row.classList.add("row", "mb-3");
                        appList.appendChild(row);
                    }
                    const link = document.createElement("a");
                    link.classList.add("col-4")
                    link.id = app.id;
                    link.href = app.link;

                    const container = document.createElement("div");
                    container.classList.add("d-flex", "flex-column", "align-items-center");

                    const imageContainer = document.createElement("div");
                    imageContainer.classList.add("p-2");

                    const image = document.createElement("img");
                    image.id = app.icon_id;
                    image.width = 42;
                    image.classList.add("rounded-2");
                    image.src = app.icon;
                    image.alt = "";

                    const textContainer = document.createElement("div");
                    textContainer.classList.add("p-2", "text-truncate");
                    textContainer.textContent = app.name;

                    imageContainer.appendChild(image);
                    container.appendChild(imageContainer);
                    container.appendChild(textContainer);

                    link.appendChild(container);

                    const rows = appList.getElementsByClassName("row");
                    const lastRow = rows[rows.length - 1];
                    lastRow.appendChild(link);
                });
            } else {
                console.error(Error);
            }
        })
        .catch(err => {
            console.error(err);
        });


    // Listenelemente erstellen und hinzufügen

};

async function mapLanguageCodeToName(languageCode) {
    try {
        const response = await fetch(delivIP +'/data/mapping/language_mapping.json');
        const languageMapping = await response.json();
        return languageMapping[languageCode] || 'Unknown';
    } catch (error) {
        return 'Unknown';
    }
}
async function mapCountryCodeToName(countryCode) {
    try {
        const response = await fetch(delivIP +'/data/mapping/country_mapping.json');
        const countryMapping = await response.json();
        return countryMapping[countryCode] || 'Unknown';
    } catch (error) {
        return 'Unknown';
    }
}
async function mapGenderToName(genderCode) {
    try {
        const response = await fetch(delivIP +'data/mapping/gender_mapping.json');
        const genderMapping = await response.json();
        return genderMapping[genderCode] || 'Special';
    } catch (error) {
        return 'No Gender';
    }
}

