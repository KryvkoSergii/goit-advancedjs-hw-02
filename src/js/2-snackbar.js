import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const mainForm = document.querySelectorAll("form")[0];

function makeTimer(delay, selectedRadioBtnValue) {
    
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (selectedRadioBtnValue === "fulfilled") {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    })
        .then(value => {
            iziToast.show({
                message: `✅ Fulfilled promise in ${value}ms`,
                position: "topRight",
                backgroundColor: 'rgb(0,128,0)',
                messageColor: 'rgb(255,255,255)'
            });
        })
        .catch(error => {
            iziToast.show({
                message: `❌ Rejected promise in ${error}ms`,
                position: "topRight",
                backgroundColor: 'rgb(250,128,114)',
                messageColor: 'rgb(255,255,255)'
            });
        });
}

mainForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const delay = mainForm.elements['delay'].value;
    //get selected radio button
    const selectedRadioBtnValue = mainForm.elements['state'].value;

    makeTimer(delay, selectedRadioBtnValue);

    mainForm.reset();
});
