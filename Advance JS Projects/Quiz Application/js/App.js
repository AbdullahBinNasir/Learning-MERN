const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Highly Textured Makeup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "Which of the following is a CSS preprocessor?",
        options: ["JavaScript", "TypeScript", "Sass", "HTML"],
        correctAnswer: "Sass"
    },
    {
        question: "What is the purpose of JavaScript in web design?",
        options: ["Styling web pages", "Server-side scripting", "Enhancing interactivity", "Database management"],
        correctAnswer: "Enhancing interactivity"
    },
    {
        question: "What is the box model in CSS used for?",
        options: ["Creating flexible layouts", "Styling text content", "Defining borders and spacing", "Managing server requests"],
        correctAnswer: "Defining borders and spacing"
    },
    {
        question: "Which tag is used to link an external CSS file to an HTML document?",
        options: ["<style>", "<link>", "<css>", "<script>"],
        correctAnswer: "<link>"
    },
    {
        question: "What does the acronym 'API' stand for in web development?",
        options: ["Advanced Programming Interface", "Application Programming Interface", "Automated Processing Interface", "Advanced Page Interaction"],
        correctAnswer: "Application Programming Interface"
    },
    {
        question: "What is the purpose of the 'alt' attribute in an HTML image tag?",
        options: ["Alternative text for screen readers", "Aligning the image", "Adding animation", "Adjusting image size"],
        correctAnswer: "Alternative text for screen readers"
    },
    {
        question: "Which CSS property is used for changing the text color of an element?",
        options: ["font-color", "color", "text-color", "foreground-color"],
        correctAnswer: "color"
    }
];

var currentQuestion = 0;
var score = 0;

var mainPage = document.getElementById('main-page');
var questionPage = document.getElementById('question-page');
var resultPage = document.getElementById('result-page');
var questionText = document.getElementById('question');

function startQuiz() {

    mainPage.style.display = "none";
    questionPage.style.display = "block";

    if (inputName.value.trim() === "") {
        alert("Please enter your name first.");
    } else {
       
        displayQuestion();
    }
}

function displayQuestion() {
    const currentQuestionData = quizData[currentQuestion];
    questionText.textContent = currentQuestionData.question;
    optionsContainer.innerHTML = "";

    for (let i = 0; i < currentQuestionData.options.length; i++) {
        const option = currentQuestionData.options[i];
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "option";
        input.value = option;

        const label = document.createElement("label");
        
        label.textContent = option;

        const div = document.createElement("div");
        div.className = "input";

        div.appendChild(input);
        div.appendChild(label);

        optionsContainer.appendChild(div);
    }

    pagination.textContent = `${currentQuestion + 1}/${quizData.length}`;
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (!selectedOption) {
        alert("Please select an option.");
        return;
    }

    if (selectedOption.value === quizData[currentQuestion].correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionPage.style.display = "none";
    resultPage.style.display = "block";
    quizScore.textContent = `your score is ${score}/${quizData.length}`;
}
