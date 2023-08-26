function urlshot() {
    const fullURL = window.location.href;
    const index = fullURL.indexOf('pid=');
    if (index !== -1) {
        const queryPidTeil = fullURL.substring(index);
        const queryParams = new URLSearchParams(queryPidTeil);
        const pid = queryParams.get('pid');
        if (pid) {
            const jsonResult = { pid: pid };
            return JSON.stringify(jsonResult);
        }
    }
    return '';
}

// Aktuelle URL aus der Adressleiste des Browsers verwenden
const queryPidJSON = urlshot();
console.log(queryPidJSON);

