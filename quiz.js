const questionJson = [
  {
    correctAnswer: 'Three',
    options: ['Two', 'Three', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?"
  },
  {
    correctAnswer: 'All of them',
    options: [
      '2',
      '1',
      'All of them',
      "Depends if there's a leap year or not",
    ],
    question:
      "How many months have 28 days?"
  },
  {
    correctAnswer: '8',
    options: [
      '8',
      '9',
      '25',
      '35',
    ],
    question:
      'A farmer has 17 goats. All of them but 8 die. How many goats are alive?'
  },
  {
    correctAnswer: '3rd Place',
    options: [
      '1st Place',
      '2nd Place',
      '3rd Place',
      'None Of the Above',
    ],
    question: "You're 4th place right now in a race. What place will you be in when you pass the person in 3rd place?"
  },
  {
    correctAnswer: 'Four Apples',
    options: [
      'Two Apples',
      'Four Apples',
      'Six Apples',
      'None',
    ],
    question:
      "If you have a bowl with six apples and you take away four, how many apples do you have?"
  },
  {
    correctAnswer: 'They are both the same weight',
    options: [
      'A ton of bricks',
      'A ton of feathers',
      'They are both the same weight',
      'It depends on the type of bricks',
    ],
    question:
      "Which is heavier: a ton of bricks or a ton of feathers?"
  }
]

const questionEL = document.querySelector('#question'); 
const optionEL = document.querySelector('#options'); 
const scoreEL = document.querySelector('#score');
const nextEl = document.querySelector('#next');
let score = 0;
let currentQuestion = 0;
const totalScore = questionJson.length;


showQuestion();
nextEl.addEventListener("click", () => {
  scoreEL.textContent = `Score: ${score} / ${totalScore}`;
  nextQuestion();
});

function showQuestion() 
{
  const {correctAnswer, options, question} = questionJson[currentQuestion];
  questionEL.textContent = question;
  const shuffledOptions = shuffleOptions(options);
  
  shuffledOptions.forEach((opt) => 
  {
    const btn = document.createElement('button');
    btn.textContent = opt;
    optionEL.appendChild(btn);

    btn.addEventListener("click", () => {
      if (opt === correctAnswer) {
        score++;
      }
      else {
        score = score - 0.25;
      }
      scoreEL.textContent = `Score: ${score} / ${totalScore}`;
      optionEL.textContent = "";
      nextQuestion();
    })
  })
}

function nextQuestion() 
{
  currentQuestion++;
  optionEL.textContent = "";
  if (currentQuestion >= questionJson.length) 
  {
    questionEL.textContent = "Thank you for taking the quiz!";
    nextEl.remove();
  }
  else
  {
    showQuestion();
  }
}

// Shuffling the options
function shuffleOptions(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i + 1);
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}
