const delivIP = "http://192.168.178.27:5501/"
window.onload = function handleToken() {
    
    loadApps()
    fetch(delivIP + 'account/json/users.json')
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data.users)) {
                data.users.forEach(user => {
                    
                    let sessionToken = sessionStorage.getItem("localUPST");
                    let localToken = localStorage.getItem("localUPST");
                    if (user.secret_token === sessionToken || user.secret_token === localToken) {
                        loadData(user)
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



function loadData(user) {
    console.log("Loading user data...");
    console.log("Sync user...");

    const profile = user.profile;
    const name = profile.name;
    const surname = profile.surname;
    const path = profile.path;
    const pathlocal = localStorage.getItem("lsppfu")
    const email = profile.email;
    const id = user.id;
    const fullname = name + " " + surname


    const imgApp = document.getElementById('user-profile-picture-apps')
    const imgHeader = document.getElementById('user-profile-picture-header')
    const imgAccountSection = document.getElementById('user-profile-picture-accounts')
    const nameAccounts = document.getElementById('user-profile-name-accounts')
    const emailAccounts = document.getElementById('user-profile-email-accounts')
    const ManageAccountBtn = document.getElementById("user-account-access-btn");
    const AccountBtn = document.getElementById("user-account-btn");
    const logoutbtn = document.getElementById("user-logout-btn");

    logoutbtn.classList.remove('d-none')
    logoutbtn.href = "/auth/logout/logout.html?logoutuserid=" + id;

    nameAccounts.textContent = fullname;
    emailAccounts.textContent = email;


    AccountBtn.href = "/account/" + "?userid=" + id


    ManageAccountBtn.textContent = "DZ Account verwalten";
    ManageAccountBtn.href = "/account/" + "?userid=" + id




    if (pathlocal === null) {
        imgApp.src = path;
        imgHeader.src = path;
        imgAccountSection.src = path
        localStorage.setItem("lsppfu", path)

    } else {
        imgApp.src = pathlocal;
        imgHeader.src = pathlocal;
        imgAccountSection.src = pathlocal
    }



    console.log("Successfully sync from: " + fullname);
}

function login() {
    fetch(delivIP + 'account/json/users.json')
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data.users)) {
                data.users.forEach(user => {
                    const profile = user.profile;

                    const email = profile.email;
                    const password = profile.password;

                    let inputEmail = document.getElementById("user-email-input").value;
                    let inputPassowrd = document.getElementById("user-password-input").value;
                    let inputCheck = document.getElementById("user-checkbox-input").checked;

                    if (email === inputEmail && password === inputPassowrd) {
                        if (inputCheck === true) {
                            const secT = user.secret_token;
                            const id = user.id;
                            localStorage.setItem("localUPST", secT);
                            localStorage.setItem("userid", id);
                            location.href = "/index.html" + "?userid=" + id;
                        } else {
                            const secT = user.secret_token;
                            const id = user.id;
                            sessionStorage.setItem("localUPST", secT);
                            sessionStorage.setItem("userid", id);
                            location.href = "/index.html" + "?userid=" + id;
                        }

                    } else {
                        console.error("Invalid Email or Password!")
                    }
                });
            } else {
                console.error("Invalid Data. Data is not an Array!");
            }
        })
        .catch(err => {
            console.error(err);
        });
}

function loadApps() {
    fetch( `${delivIP}/data/services/dzservice.json`)
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




