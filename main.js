// const arr = [1,2,3];
// console.log(arr[1]);

// const obj = {a: 2, b: 2};

// const answers = [];

// answers[0] = prompt("What is your name ?", "");
// answers[1] = prompt("What is your second name ?", '');
// answers[2] = prompt("How old are you ? ", '');

// console.log(answers);

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// let incr = 10, decr = 10;

// incr++;
// decr--;

// console.log(incr++);
// console.log(decr--);

const input = document.getElementById("nameInput");
const button = document.getElementById("greetButton");
const messageEl = document.getElementById("greetingMessage");

button.addEventListener("click", () =>{
    const userName = input.value.trim();
    if(userName === ""){
        alert("Пожалуйста введите имя!");
        return;
    }

    const message = `Привет, ${userName}!`;
    messageEl.textContent = message;
})