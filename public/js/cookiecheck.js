"use strict";

function getCookie(name) {
    let cookieName = name + "=";
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return null;
}


let overlay = document.createElement("div");
let layer = document.createElement("div");
overlay.setAttribute("id", "overlay");
layer.setAttribute("id", "layer");

layer.style.position = "absolute";
layer.style.top = "50%";
layer.style.left = "50%";
layer.style.height = "200px";
layer.style.transform = "translate(-50%, -50%)";
layer.style.backgroundColor = "#fff";
layer.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.5)";
layer.style.padding = "20px";
layer.style.borderRadius = "10px";

overlay.style.zIndex = "9999";
overlay.style.position = "fixed";
overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";

layer.innerText = "Datenschutzeinstellungen\n" +
    "Auf unserer Internetseite werden Cookies verwendet. Einige davon werden zwingend benötigt," +
    " während andere es uns ermöglichen, Ihre Nutzerinnen- und Nutzererfahrung " +
    "auf unserer Internetseite zu verbessern.\n\n";

let label1 = document.createElement("label");
label1.innerText = "Ich stimme zu";
label1.setAttribute("for", "box1");
let checkbox1 = document.createElement("input");
checkbox1.setAttribute("type", "radio");
checkbox1.setAttribute("id", "box1");
checkbox1.setAttribute("name", "box");
checkbox1.style.margin = "5px";

let label2 = document.createElement("label");
label2.innerText = "Ich lehne ab";
label2.setAttribute("for", "box2");
let checkbox2 = document.createElement("input");
checkbox2.setAttribute("type", "radio");
checkbox2.setAttribute("id", "box2");
checkbox2.setAttribute("name", "box");
checkbox2.style.margin = "5px";

let submit = document.createElement("input");
submit.setAttribute("id", "submit");
submit.setAttribute("type", "submit");
submit.setAttribute("name", "submit");
submit.setAttribute("value", "Speichern");
submit.style.margin = "10px";

layer.append(label1, checkbox1, label2, checkbox2, submit);
overlay.append(layer);


function showConsentPage() {
    document.getElementsByTagName("body").item(0).append(overlay);
    overlay.style.display = "block";
    layer.style.display = "block";
}

function hideConsentPage() {
    overlay.style.display = "none";
    layer.style.display = "none";
}

window.onload = () => {
    const cookie = getCookie("cook");
    if (cookie == null) {
        showConsentPage();
        document.getElementById("submit").addEventListener("click", function () {
            hideConsentPage();

            let radios = document.getElementsByName('box');

            for (let i = 0, length = radios.length; i < length; i++) {
                if (radios[i].checked) {
                    document.cookie = "cook=" + i + ";";
                    break;
                }
            }
        });
    } else {
        hideConsentPage();
    }
}

