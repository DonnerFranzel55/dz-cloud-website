function fetchAllProducts() {
    fetch('/assets/data/products.json')
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data.products)) {
                data.products.forEach(product => {
                    








                    
                });
            } else {
                console.error("product is not array");
            }
        })
        .catch(err => {
            console.error(err);
            location.href = "/auth/login/login.html"

        });
}
