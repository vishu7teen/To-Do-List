const btn = document.querySelector(".btn");
const tasks = document.querySelector(".lists");
const inputBox = document.querySelector(".input-field");




function addTask() {
    const input = document.createElement("input");
    input.placeholder = "Add new Task";
    input.classList.add("inputBox");
    inputBox.appendChild(input);


    const addNew = document.createElement("button");
    addNew.classList.add("add-new");
    addNew.textContent = "Add"
    inputBox.appendChild(addNew);


    working(input,addNew);
}

function working(input,addNew) {
    addNew.addEventListener("click",() => {
        const allTask = document.createElement("li");
        allTask.textContent = input.value;
        allTask.classList.add("li");
        tasks.appendChild(allTask);


        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        allTask.appendChild(checkBox);

        checkBox.addEventListener("change", () => {
            if (checkBox.checked) {
                allTask.remove();
            }
        });
        
        inputBox.removeChild(input);
        inputBox.removeChild(addNew);
    })
}


