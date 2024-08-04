import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const mainForm = document.querySelectorAll("form")[0];
const btn = document.querySelectorAll("button")[0];

function makeTimer(delay, selectedRadioBtnValue) {
    
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (selectedRadioBtnValue === "fulfilled") {
                resolve(`✅ Fulfilled promise in ${delay}ms`);
            } else {
                reject(`❌ Rejected promise in ${delay}ms`);
            }
        }, delay);
    })
        .then(value => {
            iziToast.show({
                message: value,
                position: "topRight",
                backgroundColor: 'rgb(0,128,0)',
                messageColor: 'rgb(255,255,255)'
            });
        })
        .catch(error => {
            iziToast.show({
                message: error,
                position: "topRight",
                backgroundColor: 'rgb(250,128,114)',
                messageColor: 'rgb(255,255,255)'
            });
        });
}

const delay = localStorage.getItem("delay");
const selectedRadioBtnValue = localStorage.getItem("selectedRadioBtnValue");

if (delay && selectedRadioBtnValue) {
    makeTimer(delay, selectedRadioBtnValue);

    localStorage.removeItem("delay");
    localStorage.removeItem("selectedRadioBtnValue");
}

btn.addEventListener("click", (event) => {
    const delay = mainForm.elements['delay'].value;
    //get selected radio button
    const selectedRadioBtnValue = mainForm.elements['state'].value;

    localStorage.setItem("delay", delay);
    localStorage.setItem("selectedRadioBtnValue", selectedRadioBtnValue);
});
