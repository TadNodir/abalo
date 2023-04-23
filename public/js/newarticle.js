"use strict";

document.body.onload = saveNewArticle;
function saveNewArticle() {
// create a form element
    const form = document.createElement('form');
    form.method = "POST";
    form.action = "/articles";

    let csrfToken = document.getElementById("csrf-token");
    let myToken = document.createElement("input");
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

// create submit button
    const submitBtn = document.createElement('input');
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("name", "submit");
    submitBtn.setAttribute("id", "submit");
    submitBtn.setAttribute("value", "Speichern");

// add input fields to the form
    form.append(myToken, legend, nameLabel, nameInput, br, priceLabel, priceInput, br1, descriptionLabel,
        descriptionInput, br2, br3, submitBtn);

    form.onsubmit = function (e) {

        const name = nameInput.value.trim();
        const price = parseFloat(priceInput.value);

        if (!name || price <= 0) {
            e.preventDefault();
            alert('Please enter a valid name and price greater than 0.');
        }

        // perform form submission or data processing here
        console.log('Form submitted:', name, price, descriptionInput.value);
    };

// add the form to the page
    document.body.appendChild(form);
}
