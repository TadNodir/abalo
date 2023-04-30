"use strict";

document.body.onload = saveNewArticle;

function saveNewArticle() {
// create a form element
    const form = document.createElement('form');
    form.method = "GET";
    form.action = "/newarticle";

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

    // using button instead of submit
    const submitBtn = document.createElement('button');
    submitBtn.setAttribute("type", "button");
    submitBtn.setAttribute("name", "button");
    submitBtn.setAttribute("id", "button");
    submitBtn.innerText = "Speichern";

    submitBtn.addEventListener('click' ,function (e) {
        sendData(e);
    });

    const output = document.createElement("p");

// add input fields to the form
    form.append(myToken, legend, nameLabel, nameInput, br, priceLabel, priceInput, br1, descriptionLabel,
        descriptionInput, br2, br3, submitBtn);
    document.body.append(form, output);


    function sendData(e) {

        const name = document.getElementById("name").value.trim();
        const price = parseFloat(document.getElementById("price").value);

        if (!name || price <= 0) {
            e.preventDefault();
            alert('Please enter a valid name and price greater than 0.');
            output.innerText = "";
        } else {
            let xhr = new XMLHttpRequest();
            const data = "name=" + encodeURIComponent(name) + "&price=" + encodeURIComponent(price) + "&description=" + encodeURIComponent(descriptionInput.value);

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log(xhr.responseText);
                        output.innerText = "A form successfully submitted";
                        output.style.color = "green";
                    } else {
                        console.log(xhr.statusText);
                        output.innerText = "Error occurred on state 4";
                        output.style.color = "red";
                    }
                }
            };
            xhr.onerror = function () {
                console.log(xhr.statusText);
                output.innerText = "Error occurred";
                output.style.color = "red";
            };
            xhr.open("GET", '/newarticle?' + data);
            xhr.send();
        }
    }
}
