function urlshot() {
    const fullURL = window.location.href;
    const index = fullURL.indexOf('pid=');
    if (index !== -1) {
        const queryPidTeil = fullURL.substring(index);
        const queryParams = new URLSearchParams(queryPidTeil);
        const pid = queryParams.get('pid');
        if (pid) {
            return pid;
        }
    }
    return '';
}

// Aktuelle URL aus der Adressleiste des Browsers verwenden
const queryPidJSON = urlshot();
console.log(queryPidJSON);

function bulid() {
    const p = urlshot()
    const devURL = "http://localhost:5501"
    fetch('/app_store/assets/data/apps.json')
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data.software)) {
                data.software.forEach(app => {
                    console.log("locate " + p);
                    if (app.package_name === p) {
                        console.log("create");

                        let appDetails = document.getElementById("dzaps-729381")


                        //Landing
                        const headersection = document.createElement("section");

                        const headerdiv = document.createElement("div");
                        headerdiv.classList.add("mt-4", "bg-dark", "container-fluid");

                        const appHeaderDataDiv = document.createElement("div");
                        appHeaderDataDiv.classList.add("row", "flex-lg-row", "flex-column-reverse", "flex-sm-column-reverse", "flex-md-column-reverse", "p-5")

                        const leftColDataDiv = document.createElement("div")
                        leftColDataDiv.classList.add("col", "mt-4", "mt-sm-4", "mt-lg-0", "align-self-end")

                        const nameDataDiv = document.createElement("div")


                        //App Name, Devs, Attributes
                        const appname = document.createElement("h1")
                        appname.textContent = app.name
                        nameDataDiv.appendChild(appname)

                        const appdevolper = document.createElement("h6")
                        appdevolper.textContent = app.developer
                        appdevolper.classList.add("text-success", "fw-bold")
                        nameDataDiv.appendChild(appdevolper)

                        if (app.in_app_purchases === true) {
                            const appattribute = document.createElement("h6")
                            appattribute.textContent = "In App Purchases"
                            nameDataDiv.appendChild(appattribute)
                        }
                        leftColDataDiv.appendChild(nameDataDiv)

                        const advDataDiv = document.createElement("div");
                        advDataDiv.classList.add("d-flex", "flex-nowrap", "overflow-auto", "mt-4")


                        //Image
                        const appIMGRow = document.createElement("div");
                        appIMGRow.classList.add("row", "me-2")

                        const appIMGCol = document.createElement("div")
                        appIMGCol.classList.add("col", "text-center")

                        const appIMG = document.createElement("img");
                        //appIMG.src = devURL + app.icon;
                        appIMG.src = app.icon;
                        appIMG.classList.add("rounded")
                        appIMG.height = "48"
                        appIMGCol.appendChild(appIMG);
                        appIMGRow.appendChild(appIMGCol);
                        advDataDiv.appendChild(appIMGRow)
                        leftColDataDiv.appendChild(advDataDiv)

                        //Rating
                        const appRatingRow = document.createElement("div");
                        appRatingRow.classList.add("row")

                        const appRatingCol = document.createElement("div")
                        appRatingCol.classList.add("col", "text-center")

                        const appRatingStars = document.createElement("h6");
                        appRatingStars.textContent = app.rating

                        const appRatedUsers = document.createElement("h6");
                        appRatedUsers.textContent = abbreviateNumber(app.reviews) + " reviews"


                        appRatingCol.appendChild(appRatingStars);
                        appRatingCol.appendChild(appRatedUsers);
                        appRatingRow.appendChild(appRatingCol);
                        advDataDiv.appendChild(appRatingRow)
                        leftColDataDiv.appendChild(advDataDiv)

                        //VR

                        const vr = document.createElement("div")
                        vr.classList.add("vr", "mx-2")
                        advDataDiv.appendChild(vr)

                        //Downloads
                        const appDownloadsRow = document.createElement("div");
                        appDownloadsRow.classList.add("row")

                        const appDownloadsCol = document.createElement("div")
                        appDownloadsCol.classList.add("col", "text-center")

                        const appDownloads = document.createElement("h6");
                        appDownloads.textContent = abbreviateNumber(app.downloads)

                        const appDownloadsText = document.createElement("h6");
                        appDownloadsText.textContent = "Downloads"




                        appDownloadsCol.appendChild(appDownloads);
                        appDownloadsCol.appendChild(appDownloadsText);
                        appDownloadsRow.appendChild(appDownloadsCol);
                        advDataDiv.appendChild(appDownloadsRow)
                        leftColDataDiv.appendChild(advDataDiv)


                        //VR
                        const vr1 = document.createElement("div")
                        vr1.classList.add("vr", "mx-2")
                        advDataDiv.appendChild(vr1)

                        //Recommended
                        if (app.recommended === true) {
                            const appRecommendedRow = document.createElement("div");
                            appRecommendedRow.classList.add("row")

                            const appRecommendedCol = document.createElement("div")
                            appRecommendedCol.classList.add("col", "text-center")

                            const appRecommendedIMG = document.createElement("h6");
                            appRecommendedIMG.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ffffff"><rect fill="none" width="20" height="20"></rect><path d="M10.54,11.09L8.66,9.22l-1.02,1.02l2.9,2.9l5.8-5.8l-1.02-1.01L10.54,11.09z M15.8,16.24H8.2L4.41,9.66L8.2,3h7.6l3.79,6.66 L15.8,16.24z M17,1H7L2,9.66l5,8.64V23l5-2l5,2v-4.69l5-8.64L17,1z"></path></svg>'

                            const appRecommendedText = document.createElement("h6");
                            appRecommendedText.textContent = "Recommended"

                            appRecommendedCol.appendChild(appRecommendedIMG);
                            appRecommendedCol.appendChild(appRecommendedText);
                            appRecommendedRow.appendChild(appRecommendedCol);
                            advDataDiv.appendChild(appRecommendedRow)
                            leftColDataDiv.appendChild(advDataDiv)

                        }

                        //VR
                        const vr2 = document.createElement("div")
                        vr2.classList.add("vr", "mx-2")
                        advDataDiv.appendChild(vr2)

                        //Age
                        const appAgeRow = document.createElement("div");
                        appAgeRow.classList.add("row")

                        const appAgeCol = document.createElement("div")
                        appAgeCol.classList.add("col", "text-center")

                        const appAgeBadge = document.createElement("h6");
                        appAgeBadge.classList.add("badge", "text-black", ageClassController(app.content_rating))
                        appAgeBadge.textContent = app.content_rating

                        const appAgeText = document.createElement("h6");
                        appAgeText.textContent = "USK: " + app.content_rating

                        appAgeCol.appendChild(appAgeBadge);
                        appAgeCol.appendChild(appAgeText);
                        appAgeRow.appendChild(appAgeCol);
                        advDataDiv.appendChild(appAgeRow)
                        leftColDataDiv.appendChild(advDataDiv)


                        //Buttons

                        const BTNControllsDiv = document.createElement("div");
                        BTNControllsDiv.classList.add("mt-3")

                        const installBTN = document.createElement("button");
                        installBTN.style.width = "203px"
                        installBTN.classList.add("btn", "btn-success")

                        const installBTNspan = document.createElement("span")
                        installBTNspan.textContent = checkPrice(app.price, app.currency)

                        installBTN.appendChild(installBTNspan);
                        BTNControllsDiv.appendChild(installBTN);

                        const shareBTN = document.createElement("button");
                        shareBTN.classList.add("btn", "btn-secondary", "ms-1");

                        const shareBTNicon = document.createElement("span");
                        shareBTNicon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentcolor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/></svg>'

                        const shareBTNspan = document.createElement("span");
                        shareBTNspan.classList.add("ms-1");
                        shareBTNspan.textContent = "Share";

                        shareBTN.appendChild(shareBTNicon);
                        shareBTN.appendChild(shareBTNspan);
                        BTNControllsDiv.appendChild(shareBTN);

                        leftColDataDiv.appendChild(BTNControllsDiv);



                        //Right Col
                        const rightColDataDiv = document.createElement("div");
                        rightColDataDiv.classList.add("col");

                        const trailerDiv = document.createElement("div");
                        //trailerDiv.classList.add("ratio", "ratio-16x9");

                        const trailer = document.createElement("video");
                        trailer.classList.add("rounded-5")
                        trailer.height = "400"
                        trailer.controls = true
                        trailer.src = devURL + app.trailer;

                        trailerDiv.appendChild(trailer);
                        rightColDataDiv.appendChild(trailerDiv);




                        //End of Landing Section
                        appHeaderDataDiv.appendChild(leftColDataDiv);
                        appHeaderDataDiv.appendChild(rightColDataDiv);
                        headerdiv.appendChild(appHeaderDataDiv);
                        headersection.appendChild(headerdiv);
                        appDetails.appendChild(headersection);


                        //HR
                        const hr = document.createElement("hr");
                        appDetails.appendChild(hr)



                        //More Details
                        const moreDetailSection = document.createElement("section");

                        const container = document.createElement("div");
                        container.classList.add("container-fluid");

                        const detailRow = document.createElement("div");
                        detailRow.classList.add("row")

                        const contentCritiqueBlock = document.createElement("div");
                        contentCritiqueBlock.classList.add("col-sm-12", "col-xl-8", "p-5")


                        //Pictures
                        const picturesSectionDiv = document.createElement("div");

                        const pictureHeading = document.createElement("h3");
                        pictureHeading.textContent = "Pictures";
                        picturesSectionDiv.appendChild(pictureHeading)



                        const inGamePicturesDiv = document.createElement("div")
                        inGamePicturesDiv.classList.add("d-flex", "flex-nowrap", "overflow-auto")

                        app.screenshots.forEach(pic => {
                            const img = document.createElement("img");
                            img.classList.add("rounded", "me-2")
                            img.src = pic
                            img.alt = pic
                            inGamePicturesDiv.appendChild(img)
                        });
                        picturesSectionDiv.appendChild(inGamePicturesDiv)


                        //Description
                        const descriptionDiv = document.createElement("div");
                        descriptionDiv.classList.add("mt-3");

                        const descriptionHeader = document.createElement("h3");
                        descriptionHeader.textContent = "Description";
                        descriptionDiv.appendChild(descriptionHeader)

                        const descriptionText = document.createElement("h6")
                        descriptionText.textContent = app.description
                        descriptionDiv.appendChild(descriptionText)

                        //Realese Notes
                        const realeseNotesDiv = document.createElement("div");
                        realeseNotesDiv.classList.add("mt-3");

                        const realeseNotesHeader = document.createElement("h3");
                        realeseNotesHeader.textContent = "Realease Notes";
                        realeseNotesDiv.appendChild(realeseNotesHeader)

                        const realeseNotesText = document.createElement("h6")
                        realeseNotesText.textContent = app.current_version_release_notes
                        realeseNotesDiv.appendChild(realeseNotesText)



                        //category Tags
                        const categoryDiv = document.createElement("div");
                        categoryDiv.classList.add("mt-3")

                        const categoryHeader = document.createElement("h3");
                        categoryHeader.textContent = "Categories"
                        categoryDiv.appendChild(categoryHeader)

                        const categoryPillDiv = document.createElement("div")
                        categoryPillDiv.classList.add("d-flex", "flex-nowrap", "overflow-auto")

                        app.categories.forEach(category => {
                            const pill = document.createElement("div")
                            pill.classList.add("me-2", "badge", "bg-success", "border", "p-2", "rounded-pill")

                            const categoryName = document.createElement("span");
                            categoryName.classList.add("fs-6", "mx-3")
                            categoryName.textContent = category;

                            pill.appendChild(categoryName)
                            categoryPillDiv.appendChild(pill)

                        });

                        categoryDiv.appendChild(categoryPillDiv);



                        //Review
                        const reviewDiv = document.createElement("div");
                        reviewDiv.classList.add("mt-3");

                        const reviewDivOutline = document.createElement("div")
                        reviewDivOutline.classList.add("p-2", "border", "rounded");
                        reviewDiv.appendChild(reviewDivOutline)


                        //Clearfix
                        const clearfixDiv = document.createElement("div");
                        clearfixDiv.classList.add("clearfix");

                        const floatStartDiv = document.createElement("div");
                        floatStartDiv.classList.add("float-start")

                        const RateText = document.createElement("h3");
                        RateText.textContent = "Rate " + app.name
                        floatStartDiv.appendChild(RateText)

                        const floatEndDiv = document.createElement("div");
                        floatEndDiv.classList.add("float-end")

                        const submitBTN = document.createElement("h3");
                        submitBTN.classList.add("btn", "btn-success")
                        submitBTN.type = "submit"
                        submitBTN.style.width = "150px"
                        submitBTN.textContent = "Submit"
                        floatEndDiv.appendChild(submitBTN)

                        clearfixDiv.appendChild(floatStartDiv);
                        clearfixDiv.appendChild(floatEndDiv);
                        reviewDivOutline.appendChild(clearfixDiv)
                        //End of Clearfix


                        //Rate BTN
                        const reviewStarsDiv = document.createElement("div");
                        reviewStarsDiv.classList.add("mb-3")

                        for (let i = 1; i < 6; i++) {
                            const rateBTN = document.createElement("button")
                            rateBTN.classList.add("btn", "btn-primary", "me-1")
                            rateBTN.textContent = i

                            reviewStarsDiv.appendChild(rateBTN)

                        }
                        reviewDivOutline.appendChild(reviewStarsDiv)
                        //End of RateBTN

                        //Textarea
                        const textAreaDiv = document.createElement("div");

                        const textArea = document.createElement("textarea");
                        textArea.classList.add("form-control");
                        textArea.maxLength = 500
                        textArea.rows = 5
                        textArea.placeholder = "Add a text to let us know more about your experiance"

                        textAreaDiv.appendChild(textArea)
                        reviewDivOutline.appendChild(textAreaDiv)
                        //End of Textarea

                        contentCritiqueBlock.appendChild(picturesSectionDiv)
                        contentCritiqueBlock.appendChild(descriptionDiv)
                        contentCritiqueBlock.appendChild(realeseNotesDiv)
                        contentCritiqueBlock.appendChild(categoryDiv);
                        contentCritiqueBlock.appendChild(reviewDiv)
                        // End of contentCritiqueBlock



                        const cardDiv = document.createElement("div");
                        cardDiv.classList.add("col-sm-12", "col-xl-4", "p-5");


                        const card = document.createElement("div");
                        card.classList.add("card");

                        const cardHeader = document.createElement("div");
                        cardHeader.classList.add("card-header")

                        const cardHeading = document.createElement("h4");
                        cardHeading.textContent = "Details for " + app.name
                        cardHeader.appendChild(cardHeading)
                        card.appendChild(cardHeader)

                        const cardBody = document.createElement("div");
                        cardBody.classList.add("card-body")


                        //Name
                        const nameRow = document.createElement("div");
                        nameRow.classList.add("row");

                        const nameCol = document.createElement("div");
                        nameCol.classList.add("col");

                        const labelName = document.createElement("h6");
                        labelName.textContent = "Name"

                        const appName = document.createElement("h5");
                        appName.textContent = app.name

                        nameCol.appendChild(labelName);
                        nameCol.appendChild(appName);
                        nameRow.appendChild(nameCol);
                        cardBody.appendChild(nameRow)
                        //End of Name

                        //HR
                        const hr1 = document.createElement("hr");
                        cardBody.appendChild(hr1)

                        //Package
                        const packageRow = document.createElement("div");
                        packageRow.classList.add("row");

                        const packageCol = document.createElement("div");
                        packageCol.classList.add("col");

                        const labelPackage = document.createElement("h6");
                        labelPackage.textContent = "Package"

                        const appPackage = document.createElement("h5");
                        appPackage.textContent = app.package_name

                        packageCol.appendChild(labelPackage);
                        packageCol.appendChild(appPackage);
                        packageRow.appendChild(packageCol);
                        cardBody.appendChild(packageRow)
                        //End of package

                        //HR
                        const hr2 = document.createElement("hr");
                        cardBody.appendChild(hr2)



                        //Size
                        const sizeRow = document.createElement("div");
                        sizeRow.classList.add("row");

                        const sizeCol = document.createElement("div");
                        sizeCol.classList.add("col");

                        const labelSize = document.createElement("h6");
                        labelSize.textContent = "Size"

                        const appSize = document.createElement("h5");
                        appSize.textContent = app.size

                        sizeCol.appendChild(labelSize);
                        sizeCol.appendChild(appSize);
                        sizeRow.appendChild(sizeCol);
                        cardBody.appendChild(sizeRow)
                        //End of Size


                        //HR
                        const hr3 = document.createElement("hr");
                        cardBody.appendChild(hr3)

                        //Version
                        const versionRow = document.createElement("div");
                        versionRow.classList.add("row");

                        const versionCol = document.createElement("div");
                        versionCol.classList.add("col");

                        const labelVersion = document.createElement("h6");
                        labelVersion.textContent = "Version"

                        const appTableSize = document.createElement("h5");
                        appTableSize.textContent = app.version

                        versionCol.appendChild(labelVersion);
                        versionCol.appendChild(appTableSize);
                        versionRow.appendChild(versionCol);
                        cardBody.appendChild(versionRow)
                        //End of Verion


                        //HR
                        const hr4 = document.createElement("hr");
                        cardBody.appendChild(hr4)

                        //Permissions
                        const permisssionRow = document.createElement("div");
                        permisssionRow.classList.add("row");

                        const permissionCol = document.createElement("div");
                        permissionCol.classList.add("col");

                        const labelPermission = document.createElement("h6");
                        labelPermission.textContent = "Permissions"

                        const permissionUl = document.createElement("ul");

                        app.permissions.forEach(permission => {
                            const permissionLi = document.createElement("li");
                            permissionLi.textContent = permission;
                            permissionUl.appendChild(permissionLi)
                        });

                        permissionCol.appendChild(labelPermission)
                        permissionCol.appendChild(permissionUl)
                        permisssionRow.appendChild(permissionCol);
                        cardBody.appendChild(permisssionRow)
                        //End of Verion

                        //HR
                        const hr5 = document.createElement("hr");
                        cardBody.appendChild(hr5)



                        //Published
                        const publishedRow = document.createElement("div");
                        publishedRow.classList.add("row");

                        const publishedCol = document.createElement("div");
                        publishedCol.classList.add("col");

                        const labelPublished = document.createElement("h6");
                        labelPublished.textContent = "Published"

                        const appPublished = document.createElement("h5");
                        appPublished.textContent = dateChanger(app.release_date)

                        publishedCol.appendChild(labelPublished);
                        publishedCol.appendChild(appPublished);
                        publishedRow.appendChild(publishedCol);
                        cardBody.appendChild(publishedRow)
                        //End of Published

                        //HR
                        const hr6 = document.createElement("hr");
                        cardBody.appendChild(hr6)


                        //Last updated
                        const lastUpdatedRow = document.createElement("div");
                        lastUpdatedRow.classList.add("row");

                        const lastUpdatedCol = document.createElement("div");
                        lastUpdatedCol.classList.add("col");

                        const labelLastUpdated = document.createElement("h6");
                        labelLastUpdated.textContent = "Last Updated"

                        const appLastUpdated = document.createElement("h5");
                        appLastUpdated.textContent = dateChanger(app.last_updated)

                        lastUpdatedCol.appendChild(labelLastUpdated);
                        lastUpdatedCol.appendChild(appLastUpdated);
                        lastUpdatedRow.appendChild(lastUpdatedCol);
                        cardBody.appendChild(lastUpdatedRow)
                        //End of Last Updated


                        if (app.recommended === true) {
                            //HR
                            const hr = document.createElement("hr");
                            cardBody.appendChild(hr)

                            //Recommended
                            const recommendedRow = document.createElement("div");
                            recommendedRow.classList.add("row");

                            const recommendedCol = document.createElement("div");
                            recommendedCol.classList.add("col");


                            const appRecommended = document.createElement("h5");
                            appRecommended.textContent = "Recommended"

                            recommendedCol.appendChild(appRecommended);
                            recommendedRow.appendChild(recommendedCol);
                            cardBody.appendChild(recommendedRow)
                            //End of Recommended
                        }
                        if (app.in_play_pass === true) {
                            //HR
                            const hr = document.createElement("hr");
                            cardBody.appendChild(hr)

                            //In DZ PLAY PASS
                            const inDzPlayPassRow = document.createElement("div");
                            inDzPlayPassRow.classList.add("row");

                            const inDzPlayPassCol = document.createElement("div");
                            inDzPlayPassCol.classList.add("col");


                            const appInDzPlayPass = document.createElement("h5");
                            appInDzPlayPass.textContent = "In DZ Play Pass"

                            inDzPlayPassCol.appendChild(appInDzPlayPass);
                            inDzPlayPassRow.appendChild(inDzPlayPassCol);
                            cardBody.appendChild(inDzPlayPassRow)
                            //End of In DZ PLAY PASS
                        }






                        card.appendChild(cardBody)
                        cardDiv.appendChild(card)















                        detailRow.appendChild(contentCritiqueBlock)
                        detailRow.appendChild(cardDiv)
                        container.appendChild(detailRow)
                        moreDetailSection.appendChild(container)
                        appDetails.appendChild(moreDetailSection)
                        document.getElementById("title").textContent = app.name + " - DZ App Store"
                        console.log("success");
                    } else {
                        console.log("Error: 404");
                        showError("404")
                    }
                });
            } else {
                showError("404")
                console.error("Invalid Product Identifyer");
            }
        })
        .catch(err => {
            console.error(err);
            showError("500")
        });
}

function abbreviateNumber(number) {
    if (number < 1000) {
        return number.toString();
    } else if (number < 1000000) {
        return Math.floor(number / 1000) + "K+";
    } else if (number < 1000000000) {
        return Math.floor(number / 1000000) + "M+";
    } else {
        return Math.floor(number / 1000000000) + "B+";
    }
}
function ageClassController(number) {
    if (number === 0) {
        return "bg-white"
    } else if (number === 6) {
        return "bg-warning"
    } else if (number === 12) {
        return "bg-success"
    } else if (number === 16) {
        return "bg-info"
    } else if (number === 18) {
        return "bg-danger"
    } else {
        return "bg-primary"
    }
}

function checkPrice(n, c) {
    if (n === 0) {
        return "free"
    } else {
        return n + c
    }
}

function dateChanger(datum) {
    const eingabeFormat = "YYYY-MM-DD";
    const ausgabeFormat = "DD. MMMM YYYY";

    // Trenne das Datum in Jahr, Monat und Tag auf
    const [jahr, monat, tag] = datum.split("-");

    // Monate als Text definieren
    const monate = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Monat-1, da Monate in JavaScript 0-basiert sind
    const formatierterMonat = monate[parseInt(monat) - 1];

    // Formatiere das umgewandelte Datum
    const formatiertesDatum = ausgabeFormat
        .replace("DD", tag)
        .replace("MMMM", formatierterMonat)
        .replace("YYYY", jahr);

    return formatiertesDatum;
}

function showError(errorID) {
   const dzadd =  document.getElementById("dzaps-729381")

    const landingDiv = document.createElement("div");
    landingDiv.classList.add("bg-dark", "mt-2", "shadow", "p-5", "text-center")

    const errorStatus = document.createElement("h1");
    errorStatus.textContent = errorID;
    landingDiv.appendChild(errorStatus);

    const errorDetailText = document.createElement("h5");
    if (errorID === "404") {

        errorDetailText.textContent= "The App or Game wasn't found!"
    } else if (errorID === "500") {
        errorDetailText.textContent= "Sorry, but we've some problems to handle your request!"
    }
    landingDiv.appendChild(errorDetailText)

    const homeBTN = document.createElement("a");
    homeBTN.href= "/app_store/app_store.html";
    homeBTN.classList.add("btn", "btn-primary", "mt-3")
    
    const homeBTNspan = document.createElement("span");
    homeBTNspan.textContent = "Back to Overview";
    homeBTNspan.classList.add("mx-5", "fs-5")
    homeBTN.appendChild(homeBTNspan)
    
    
    landingDiv.appendChild(homeBTN)


    dzadd.appendChild(landingDiv)






}





bulid()