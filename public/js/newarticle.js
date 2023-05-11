"use strict";

document.body.onload = saveNewArticle;

function saveNewArticle() {
// create a form element
    const form = document.createElement('form');
    form.method = "POST";
    form.action = "/api/articles";

    let csrfToken = document.getElementById("csrf-token");
    let myToken = document.createElement("input");
    myToken.id = "csrf-token2"
    myToken.type = "hidden";
    myToken.name = "_token";
    myToken.value = csrfToken.dataset.token;

    const br = document.createElement("br");
    const legend = document.createElement('legend');
    legend.innerText = "Please add a new article";
// create name input field
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    nameLabel.style.margin = "5px";
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute("id", "name");
    nameInput.style.margin = "10px";
    const br1 = document.createElement("br");

// create price input field
    const priceLabel = document.createElement('label');
    priceLabel.textContent = 'Price:';
    priceLabel.style.margin = "5px";
    const priceInput = document.createElement('input');
    priceInput.setAttribute('type', 'number');
    priceInput.setAttribute('name', 'price');
    priceInput.setAttribute("id", "price");
    priceInput.style.margin = "10px";
    const br2 = document.createElement("br");

// create description input field
    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    descriptionLabel.style.margin = "5px";
    const descriptionInput = document.createElement('textarea');
    descriptionInput.setAttribute('name', 'description');
    descriptionInput.setAttribute("id", "description");
    descriptionInput.style.margin = "10px";
    const br3 = document.createElement("br");

    // using button instead of submit
    const submitBtn = document.createElement('button');
    submitBtn.setAttribute("type", "button");
    submitBtn.setAttribute("name", "button");
    submitBtn.setAttribute("id", "button");
    submitBtn.innerText = "Speichern";

    const output = document.createElement("p");
    output.setAttribute("id", "output");

    // add input fields to the form
    form.append(myToken, legend, nameLabel, nameInput, br, priceLabel, priceInput, br1, descriptionLabel,
        descriptionInput, br2, br3, submitBtn);
    document.body.append(form, output);

    submitBtn.addEventListener('click' ,e => {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const price = parseFloat(document.getElementById("price").value);
        const description = document.getElementById("description").value;
        sendData(name, price, description);
        return false;
    });

    function sendData(name, price, description) {
        if (!name || price <= 0) {
            alert('Please enter a valid name and price greater than 0.');
            document.getElementById("output").innerText = "";
        } else {
            let xhr = new XMLHttpRequest();
            xhr.open('POST', '/api/articles');
            xhr.setRequestHeader("X-CSRF-TOKEN", document.getElementById("csrf-token2").getAttribute('value'));
            let formdata = new FormData();
            formdata.append("name", name);
            formdata.append("price", price.toString());
            formdata.append("description", description);
            const output = document.getElementById("output");
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log(xhr.responseText);
                        output.innerHTML = JSON.parse(xhr.responseText).id;
                        output.style.color = "green";
                    } else {
                        console.log(xhr.statusText);
                        output.innerText = "FEHLER!";
                        output.style.color = "red";
                    }
                }
            };
            xhr.send(formdata);
        }
    }
}


