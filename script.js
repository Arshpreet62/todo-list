const button = document.querySelector(".add");
const input = document.querySelector(".input");
const section = document.querySelector("section");
const cross = document.querySelector(".cut");

const list = document.querySelector(".taskTitle")
list.addEventListener("click", () => {
    const condition = list.classList;
    let correct = list.querySelector("svg");
    if (condition.contains("slash")) {
        condition.remove("slash");
        if (correct) {
            list.removeChild(correct);
        }
    } else {
        condition.add("slash");
        if (!correct) {
            correct = document.createElement("svg");
            correct.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            list.appendChild(correct);
        }
    }
});

cross.addEventListener("click", () => {
        section.removeChild(cross.parentElement);
})
button.addEventListener ( "click" , () => {
    const title = input.value;
    if (title.trim() === "") {
        alert("Please enter a task!");
        return;
    }
    const premade = document.createElement("div");
    const taskTitle = document.createElement("div");
    taskTitle.innerText = title;
    const cut = document.createElement("button");
    cut.innerText = "x";
    premade.appendChild(taskTitle);
    taskTitle.className = "task-title";
    premade.appendChild(cut);
    cut.className = "cut";
    section.appendChild(premade);
    premade.className = "task-item";
    input.value = "";
    cut.addEventListener("click", function()  {
        section.removeChild(premade);
    
});
    });
    
