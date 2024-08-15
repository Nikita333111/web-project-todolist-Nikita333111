const textField = document.getElementById("textField");
const createToDoButton = document.getElementById("create-button");
const todoSection = document.getElementById("to-do-list");
const doneSection = document.getElementById("to-do-done");
let optionId = "option";
let idIncr = 1;


// функц для пустого списка
let p = document.createElement("p");
p.textContent = 'Список еще пуст';
function checkList() {
    p.setAttribute("id", "value")
    if(todoSection.querySelector('input[type="radio"]') === null && todoSection.querySelector("p") === null) {
        todoSection.appendChild(p);
    } else if (todoSection.querySelector('input[type="radio"]') !== null && todoSection.querySelector("p") !== null){
        todoSection.removeChild(p);
    }
}

checkList();

// Функция для проверки состояния поля ввода
function checkInput() {
    if (textField.value.trim() === "") {
        createToDoButton.disabled = true;
        createToDoButton.style.backgroundColor = "gray";
    } else {
        createToDoButton.disabled = false;
        createToDoButton.style.backgroundColor = "#4CAF50"; // Зеленый фон для активной кнопки
    }
}

// Добавляем обработчик для изменения содержимого поля ввода
textField.addEventListener("input", checkInput);

// Изначальная проверка состояния кнопки
checkInput();

// Обработчик для кнопки создания задачи
createToDoButton.addEventListener("click", () => {
    let text = textField.value;

    let todoDiv = document.createElement("div");
    todoDiv.setAttribute("class", "to-do");
    todoDiv.innerHTML = `
        <input type="radio" id="${optionId + idIncr}" name="option" value="option1">
        <label for="${optionId + idIncr}" class="radio-label">
            <span class="radio-text">${text}</span>
            <div class="button-group">
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            </div>
        </label>`;

    todoDiv.querySelector('input[type="radio"]').addEventListener("change", (event) => {
        if (event.target.checked) {
            doneSection.appendChild(todoDiv);
        }
    });

    todoDiv.querySelector('.edit-button').addEventListener("click", () => {
        let newText = prompt("Edit your task:", text);
        if (newText !== null && newText.trim() !== "") {
            todoDiv.querySelector('.radio-text').textContent = newText;
        }
    });

    todoDiv.querySelector('.delete-button').addEventListener("click", () => {
        todoDiv.remove();
        checkList();
    });

    todoSection.appendChild(todoDiv);
    idIncr++;
    textField.value = "";
    checkList();
    setTimeout(() => alert(`🛎 Не забудь про: ${text}`), 1000 * 10);
});
























