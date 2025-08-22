

const correctAnswers = [
    "Jaisalmer Fort",
    "Anjuna Beach",
    "Meghalaya",
    "Manipur",
    "Ladakh",
    "Group of Monuments at Hampi",
    "Himachal Pradesh",
    "Bengal Tiger",
    "Indian Ocean",
    "Shillong"
  ];
 
 
  let currentQuestion = 0;
  let score = 0;
 
  const questionSets = document.querySelectorAll('.question-set');
  const nextButton = document.getElementById('next-btn');
  const feedback = document.getElementById('feedback');
 
  function loadQuestion() {
    questionSets.forEach(set => set.classList.remove('active'));
    questionSets[currentQuestion].classList.add('active');
    feedback.innerText = "";
    nextButton.disabled = true;
    const optionButtons = questionSets[currentQuestion].querySelectorAll('.option-btn');
    optionButtons.forEach(b => {
      b.disabled = false;
      b.classList.remove('correct', 'wrong');
    });
  }
 
  function handleAnswer(selected) {
    const correct = correctAnswers[currentQuestion];
    const optionButtons = questionSets[currentQuestion].querySelectorAll('.option-btn');
    optionButtons.forEach(b => b.disabled = true);
 
    if (selected === correct) {
      feedback.innerText = "Correct!";
      optionButtons.forEach(b => {
        if (b.innerText === selected) {
          b.classList.add('correct');
        }
      });
      score++;
    } else {
      feedback.innerText = `Wrong! Correct answer: ${correct}`;
      optionButtons.forEach(b => {
        if (b.innerText === correct) {
          b.classList.add('correct');
        }
        if (b.innerText === selected) {
          b.classList.add('wrong');
        }
      });
    }
    nextButton.disabled = false;
  }
 
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      handleAnswer(this.innerText);
    });
  });
 
  nextButton.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questionSets.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });
 
  function showResult() {
    document.getElementById('quiz-body').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('score').innerText = `You scored ${score} out of ${correctAnswers.length}!`;
  }
 
  function restartQuiz() {
    location.reload();
  }
 
  loadQuestion();
