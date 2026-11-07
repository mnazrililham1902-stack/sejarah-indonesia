const questions = [
    {
        question: "Siapa yang membacakan teks Proklamasi Kemerdekaan Indonesia?",
        answers: [
            "Mohammad Hatta",
            "Soekarno",
            "Sutan Sjahrir",
            "Ki Hajar Dewantara"
        ],
        correct: 1
    },
    {
        question: "Kapan Indonesia memproklamasikan kemerdekaan?",
        answers: [
            "17 Agustus 1945",
            "20 Mei 1908",
            "28 Oktober 1928",
            "10 November 1945"
        ],
        correct: 0
    },
    {
        question: "Siapa wakil Soekarno dalam Proklamasi Kemerdekaan?",
        answers: [
            "Ahmad Yani",
            "Mohammad Hatta",
            "Pangeran Diponegoro",
            "Ki Hajar Dewantara"
        ],
        correct: 1
    },
    {
        question: "Kerajaan Majapahit berkembang di wilayah...",
        answers: [
            "Sumatra",
            "Kalimantan",
            "Jawa Timur",
            "Sulawesi"
        ],
        correct: 2
    },
    {
        question: "Organisasi yang berdiri pada tahun 1908 adalah...",
        answers: [
            "Budi Utomo",
            "VOC",
            "BPUPKI",
            "PPKI"
        ],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const hasilElement = document.getElementById("hasil");
const nextButton = document.getElementById("nextBtn");
const scoreElement = document.getElementById("score");

function showQuestion() {
    const question = questions[currentQuestion];

    questionElement.textContent = question.question;
    answersElement.innerHTML = "";
    hasilElement.textContent = "";
    scoreElement.textContent = "";
    nextButton.style.display = "none";

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.textContent = answer;

        button.onclick = function () {
            checkAnswer(index);
        };

        answersElement.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestion].correct;

    if (selectedAnswer === correctAnswer) {
        score++;
        hasilElement.textContent = "✅ Benar!";
    } else {
        hasilElement.textContent =
            "❌ Salah. Jawaban yang benar: " +
            questions[currentQuestion].answers[correctAnswer];
    }

    answersElement.querySelectorAll("button").forEach(button => {
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        questionElement.textContent = "🎉 Kuis Selesai!";
        answersElement.innerHTML = "";
        hasilElement.textContent =
            "Kamu menjawab benar " + score + " dari " + questions.length + " soal.";

        const nilaiAkhir = (score / questions.length) * 100;

        scoreElement.textContent =
            "🏆 Nilai Akhir Kamu: " + nilaiAkhir + "/100";

        nextButton.style.display = "none";
    }
}

showQuestion();