const questions = [
    {
        question: "1. Determine the estimated weight of an A-36 steel plate size 3/16 \" x 6' x 20'",
        options: ["919 lbs", "1012 lbs", "829 lbs", "735 lbs"],
        answer: 0
    },
    {
        question: "2. The minimum clearance allowed for meshing spur gears with a circular pitch of 0.1571 and diametral pitch of 20. The spur gear has 25 teeth.",
        options: ["0.007855", "0.008578", "0.007558", "0.007585"],
        answer: 0
    },
    {
        question: "3. A 3\"φ diameter short shaft carrying two pulleys close to the bearings transmit how much horsepower if the shaft makes 280 rpm?",
        options: ["199 Hp", "198 Hp", "200 Hp", "210 Hp"],
        answer: 0
    },
    {
        question: "4. What pressure is required to punch a hole 2\" diameter through a ¼\" steel plate?",
        options: ["10 tons", "20 tons", "30 tons", "40 tons"],
        answer: 3
    },
    {
        question: "5. Compute the working strength of 1\" bolt which is screwed up tightly in packed joint when the allowable working stress is 13,000 psi.",
        options: ["3600 lbs", "3950 lbs", "3900 lbs", "3800 lbs"],
        answer: 2
    },
    {
        question: "6. What is the working strength of a 2\" bolt which is screwed up tightly in a packed joint when the allowable working stress 12,000 psi?",
        options: ["20,120 lbs", "20,400 lbs", "20.400 lbs", "20,200 lbs"],
        answer: 2
    },
    {
        question: "7. Compute the speed of the gear mounted on a 52.5 mm diameter shaft receiving power from a driving motor with 250 hp.",
        options: ["2182 rpm", "2071 rpm", "2282 rpm", "2341 rpm"],
        answer: 2
    },
    {
        question: "8. The minimum whole depth of spur gear of 14-1/2 deg. involute type with diameter pitch of 24 and circular pitch of 0.1309:",
        options: ["0.09000", "0.09900", "0.089875", "0.089758"],
        answer: 2
    },
    {
        question: "9. Heating of the metal to a temperature above the critical temperature and then cooling slowly usually in the furnace to reduce the hardness and improve the machinability is called:",
        options: ["annealing", "tempering", "normalizing", "quenching"],
        answer: 0
    },
    {
        question: "10. What is the frictional HP acting on a collar loaded with 100 kg weight? The collar has an outside diameter of 100 mm and an internal diameter of 40mm. The collar rotates at 1000 rpm and the coefficient of friction between the collar and the pivot surface is 0.15.",
        options: ["0.8 HP", "0.5 HP", "0.3 HP", "1.2 HP"],
        answer: 0
    },
    {
        question: "11. A solid cylindrical shaft 48.2 cm long is used for a transmission of mechanical power at a rate of 37 KW running at 1760 rpm. The Ss is 8.13 MPa. Calculate the diameter",
        options: ["30 mm", "35 mm", "40 mm", "50 mm"],
        answer: 3
    },
    {
        question: "12. An internal gear is set up with a 5-in diameter pinion and center distance of 18 inches. Find the diameter of the internal gear.",
        options: ["36\"", "21.5\"", "26\"", "41\""],
        answer: 3
    },
    {
        question: "13. What force P is required to punch a ½ in. hole on a 3/8 in. thick plate if the ultimate shear strength of the plate is 42,000 psi?",
        options: ["24,940 lbs", "24,620 lbs", "24,960 lbs", "24,740 lbs"],
        answer: 3
    },
    {
        question: "14. A 2.5\" diameter by 2 in. long journal bearing is to carry a 5500-lb load at 3600 rpm using SAE 40 lube oil at 200°F through a single hole at 25 psi. Compute the bearing pressure.",
        options: ["1100 psi", "900 psi", "1000 psi", "950 psi"],
        answer: 0
    },
    {
        question: "15. In a uniformly loaded simple beam, the maximum vertical shearing force occurs",
        options: ["at the center", "at the section of maximum moment", "at beam bottom fiber", "at either end support"],
        answer: 3
    },
    {
        question: "16. A hollow shaft has an inner diameter of 0.035 m and outer diameter of 0.06 m. Determine the polar moment of inertia of the hollow shaft.",
        options: ["1.512 x 10-6 m4", "1.215 x 10-6 m4", "1.52 x 10-6 m4", "1.125 x 10-6 m4"],
        answer: 3
    },
    {
        question: "17. Determine the thickness of a steel air receiver with 30 inches diameter and pressure load of 120 psi, design stress of 8000 psi.",
        options: ["1/4 in.", "5/8 in.", "3/8 in.", "½ in."],
        answer: 0
    },
    {
        question: "18. A short 61 mm φ shaft transmits 120 Hp. Compute the linear speed of a pulley 55 cm φ mounted on the shaft.",
        options: ["1796 fpm", "1766 fpm", "1856 fpm", "2106 fpm"],
        answer: 2
    },
    {
        question: "19. A 2-in. solid shaft is driven by a 36-in. gear and transmits power at 120 rpm. If allowable shearing stress is 12 ksi, what horsepower can be transmitted?",
        options: ["29.89", "35.89", "38.89", "34.89"],
        answer: 1
    },
    {
        question: "20. Using oxyacetylene welding method to weld a 3 ft. long seam in a 3/8 in. thick plate at a consumption rate of 9 cu. ft. /ft. of weld for oxygen and 7 cu. ft./ft. for acetylene. What is the total combined gas consumption in cu. ft. ?",
        options: ["51", "48", "45", "55"],
        answer: 1
    },
    {
        question: "21. A coiled spring with 5 cm of outside diameter is required to work under the load of 190 N. The wire diameter is 5 mm, the spring is to have 6 active coils and the ends are to be closed and ground. Determine the total number of coils. The modulus of rigidity is 809 GPa and the mean radius is to be 23 mm, with 7 mm pitch of the spring.",
        options: ["6.5 coils", "7.5 coils", "8.5 coils", "9.5 coils"],
        answer: 2
    },
    {
        question: "22. A helical spring having squared and ground ends has a total of 18 coils and its material has modulus of elasticity in shear of 78.910 GPa. If the spring has an outside diameter of 10.42 cm and a wire diameter of 0.625 cm, compute in the spring due to a load of 50 kgs.",
        options: ["302 mm", "490 mm", "490 mm", "322 mm"],
        answer: 2 // Assuming option C is correct based on * but note duplicate values in prompt B and C
    },
    {
        question: "23. Design the size of solid steel shaft to be used for a 500 hp, 250 rpm application if the allowable torsional deflection is 1° and the allowable stress is 10,000 psi modulus of rigidity is 13 x 106 psi.",
        options: ["5\" dia.", "4-5/8\" dia.", "4-7/8\" dia.", "4-3//4\" dia."],
        answer: 2
    },
    {
        question: "24. With the electric are welding rate of 18 in./min, how long will it take to weld a ½ in. thick plate by 3 ft long seam?",
        options: ["3 min.", "2 min.", "1.5 min.", "4 min."],
        answer: 1
    },
    {
        question: "25. How long will it take to mill a 3/4 \" by 2\" long keyway in a 3\" diameter shafting with a 24 tooth cutter turning at 100 rpm and 0.005\" feed/tooth?",
        options: ["0.136 min.", "0.196 min.", "0.166 min.", "0.106 min."],
        answer: 2
    },
    {
        question: "26. How long will it take to saw a rectangular piece of aluminum plate 8 in. wide and 1 1/2 in. thick if the length of the cut is 8 in., the power hacksaw makes 120 rev/min and average feed per stroke is 0.0060 in.?",
        options: ["13.11", "11.11", "14.01", "12.03"],
        answer: 1
    },
    {
        question: "27. A cast iron flywheel is rotated at a speed of 1200 rpm and having a mean rim radius of 1 foot. If the weight of the rim is 30 lbs. what is the centrifugal force? Use factor C = 41.",
        options: ["14,800 lbs", "7 ft", "14,860 lbs", "14,760 lbs"],
        answer: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const currentQuestionNum = document.getElementById('current-question-num');
const totalQuestionNum = document.getElementById('total-question-num');
const progressBar = document.getElementById('progress-bar');

const finalScore = document.getElementById('final-score');
const correctCount = document.getElementById('correct-count');
const totalCount = document.getElementById('total-count');
const resultMessage = document.getElementById('result-message');

// Initialize
totalQuestionNum.innerText = questions.length;

// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});
restartBtn.addEventListener('click', restartQuiz);

function startQuiz() {
    startScreen.classList.remove('active');
    startScreen.classList.add('hidden');

    quizScreen.classList.remove('hidden');
    quizScreen.classList.add('active');

    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    const q = questions[currentQuestionIndex];
    questionText.innerText = q.question;
    optionsContainer.innerHTML = '';

    // Update Progress
    currentQuestionNum.innerText = currentQuestionIndex + 1;
    const progressPercent = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Reset Next Button
    nextBtn.classList.add('hidden');

    // Create Options
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerText = opt;
        btn.dataset.index = index;
        btn.onclick = () => selectOption(btn, index, q.answer);
        optionsContainer.appendChild(btn);
    });
}

function selectOption(selectedBtn, selectedIndex, correctIndex) {
    // Disable all buttons
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);

    // Check Answer
    if (selectedIndex === correctIndex) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('wrong');
        // Highlight correct answer
        buttons[correctIndex].classList.add('correct');
    }

    nextBtn.classList.remove('hidden');
    // Update progress bar to completed state for this step
    const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
}

function showResults() {
    quizScreen.classList.remove('active');
    quizScreen.classList.add('hidden');

    resultScreen.classList.remove('hidden');
    resultScreen.classList.add('active');

    const percentage = Math.round((score / questions.length) * 100);
    finalScore.innerText = percentage;
    correctCount.innerText = score;
    totalCount.innerText = questions.length;

    if (percentage >= 90) {
        resultMessage.innerText = "Excellent! You are a master.";
    } else if (percentage >= 70) {
        resultMessage.innerText = "Great job! Keep practicing.";
    } else if (percentage >= 50) {
        resultMessage.innerText = "Good effort. Review the weak spots.";
    } else {
        resultMessage.innerText = "Keep studying! You can do better.";
    }
}

function restartQuiz() {
    resultScreen.classList.remove('active');
    resultScreen.classList.add('hidden');

    startScreen.classList.remove('hidden');
    startScreen.classList.add('active');
}