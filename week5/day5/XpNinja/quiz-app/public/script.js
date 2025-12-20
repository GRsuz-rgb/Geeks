/*let questions = [];
let current = 0;
let score = 0;

async function loadQ() {
    const res = await fetch("/questions");
    questions = await res.json();
    showQ();
}

function showQ() {
    const q = questions[current];
    document.getElementById("question").textContent = q.question;
    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";
    q.choices.forEach((choice, index) => {
        const btn = document.createElement("button");
        btn.textContent = choice;
        btn.className = "choice-btn";
        btn.addEventListener("click", () => checkA(index));
        
        choicesDiv.appendChild(btn);
    });
}


async function checkA(selected) {
    const res = await fetch("/answer", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({
            questionIndex: current,
            selectedChoice: selected
        })
    });


    const data = await res.json();
    if (data.correct) {
        score++;
        alert("Correct! good job.");
    } 
    else {
        alert("Wrong answer. Try again!");
    }

}

document.getElementById("btn").addEventListener("click", () => {
    current++;

    if (current >= questions.length) {
        alert(`Quiz finished! Your score is ${score}/${questions.length}`);
        current = 0;
        score = 0;
    } else {
        showQ();
    }
});

loadQ();

*/

let questions = [];
let current = 0;
let score = 0;

async function loadQuestions() {
  const res = await fetch("/questions");
  questions = await res.json();
  showQuestion();
}

function showQuestion() {
  const q = questions[current];

  document.querySelector("#question").textContent = q.question;

  const choicesDiv = document.querySelector("#choices");
  choicesDiv.innerHTML = "";

  q.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.className = "choice-btn";
    btn.onclick = () => checkAnswer(index);
    choicesDiv.appendChild(btn);
  });
}

async function checkAnswer(selected) {
  const res = await fetch("/answer", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ questionIndex: current, selected })
  });

  const data = await res.json();

  if (data.correct) {
    score++;
    alert("Correct!");
  } else {
    alert("Wrong answer!");
  }

  document.getElementById("btn").style.display = "block";
}

document.getElementById("btn").onclick = () => {
  current++;

  if (current >= questions.length) {
    document.body.innerHTML = `<h1>Quiz Finished!</h1>
                               <h2>Your score: ${score} / ${questions.length}</h2>`;
    return;
  }

  document.getElementById("btn").style.display = "none";
  showQuestion();
};

loadQuestions();

