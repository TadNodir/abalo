var data = {
    'produkte': [
        { name: 'Ritterburg', preis: 59.99, kategorie: 1, anzahl: 3 },
        { name: 'Gartenschlau 10m', preis: 6.50, kategorie: 2, anzahl: 5 },
        { name: 'Robomaster' ,preis: 199.99, kategorie: 1, anzahl: 2 },
        { name: 'Pool 250x400', preis: 250, kategorie: 2, anzahl: 8 },
        { name: 'Rasenmähroboter', preis: 380.95, kategorie: 2, anzahl: 4 },
        { name: 'Prinzessinnenschloss', preis: 59.99, kategorie: 1, anzahl: 5 }
    ],
    'kategorien': [
        { id: 1, name: 'Spielzeug' },
        { id: 2, name: 'Garten' }
    ]
};

function getMaxPreis(data) {
    let max_preis = -1;
    let prod_name = "";
    for (let i in data) {
        if (i === 'produkte') {
            let val = data[i];
            val.forEach(function (arrayItem) {
                let x = arrayItem.preis;
                if (x > max_preis) {
                    max_preis = x;
                    prod_name = arrayItem.name;
                }
            });
        }
    }
    return prod_name;
}

function getMinPreisProdukt(data) {
    let obj = {};
    let min_price = 100000;
    for (let i in data) {
        if (i === 'produkte') {
            let val = data[i];
            val.forEach(function (arrayItem) {
                let x = arrayItem.preis;
                if (x < min_price) {
                    min_price = x;
                    obj = arrayItem;
                }
            });
        }
    }
    return obj;
}

function getPreisSum(data) {
    let sum = 0;
    for (let i in data) {
        if (i === 'produkte') {
            let val = data[i];
            val.forEach(function (arrayItem) {
                let x = arrayItem.preis;
                sum += x;
            });
        }
    }
    return sum;
}

function getGesamtWert(data) {
    let value = 0;
    for (let i in data) {
        if (i === 'produkte') {
            let val = data[i];
            val.forEach(function (arrayItem) {
                let x = arrayItem.preis * arrayItem.anzahl;
                value += x;
            });
        }
    }
    return value;
}

function getAnzahlProdukteOfKategorie(data, category_name) {
    let value = 0;
    for (let i in data) {
        if (i === 'produkte') {
            let val = data[i];
            val.forEach(function (arrayItem) {
                if (category_name === 'Spielzeug' && arrayItem.kategorie === 1) {
                    let x = arrayItem.preis * arrayItem.anzahl;
                    value += x;
                } else if (category_name === 'Garten' && arrayItem.kategorie === 2) {
                    let x = arrayItem.preis * arrayItem.anzahl;
                    value += x;
                } else {
                    return -1;
                }
            });
        }
    }
    return value;
}
