let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
let loggedHours = [];

function increment() {
    count += 1;
    countEl.textContent = count;
};

function save() {
    loggedHours.push(count)
    for (let i = 0; i < loggedHours.length; i++) {
        saveEl.textContent = loggedHours;
        countEl.textContent = 0;
        count = 0;
    };
};

// function reset() {
//     loggedHours = []
//     countEl.textContent = 0
//     saveEl.textContent = " "
//     count = 0
// }
