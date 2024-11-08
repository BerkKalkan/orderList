const fruitBtns = document.querySelectorAll(".btn-add");
const fruitList = document.getElementById("fruitList");

const fruitCounts = {};

for (const fruitBtn of fruitBtns) {
    fruitBtn.addEventListener("click", function () {
        const fruitName = this.innerText;

        if (fruitCounts[fruitName]) {
            fruitCounts[fruitName]++;
        } else {
            fruitCounts[fruitName] = 1;
        }

        fruitList.innerHTML = "";
        for (const [name, count] of Object.entries(fruitCounts)) {
            fruitList.innerHTML += `<li>${name} ${count > 1 ? count : ""}</li>`;
        }
    });
}