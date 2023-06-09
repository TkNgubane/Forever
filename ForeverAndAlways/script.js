const questions = [
    "Given the choice of anyone in the world, whom would you want as a dinner guest?",

    "Would you like to be famous? In what way?",

    "Before making a telephone call, do you ever rehearse what you are going to say? Why?",

    "What could constitute a 'perfect' day for you?",

    "When did you last sing to yourself? To someone else?",

    "If you were able to live to the age of 90 and retain either the mind or body of a 30-year-old for the last 60 years of your life, which would you want?",

    "Do you have a secret hunch about how you will die?",

    "Name three things you and your partner (the person you are dating) appear to have in common?",

    "For what in your life do you feel most grateful?",

    "If you could change anything about the way you were raised, what would it be?",

    "Take 4 minutes and tell your partner your life story in as much detail as possible.",

    "If you could wake up tomorrow having gained any one quality or ability, what would it be?",

    // Set 2

    "If a crystal ball could tell you the truth about yourself, your life, the future, or anything else what would you want to know?",

    "Is there something that you've dreamed of doing for a long time? Why haven't you done it?",

    "What is the greatest accomplishment of your life?",

    "What do you value most in a friendship?",

    "What is your most treasured memory?",

    "What is your most terrible memory?",

    "If you knew that in one year you would die suddenly, would you change anything about the way you are now living? Why?",

    "What does friendship mean to you?",

    "What roles do love and affection play in your life?",

    "Alternate sharing something you consider a positive characteristic of your partner (the person you are dating). Share a total of 5 items.",

    "How close and warm is your family? Do you feel your childhood was happier than most other people's?",

    "How do you feel about your relationship with your mother?",

    // Set 3

    "Make 3 true 'we' statements each. For instance 'We are both in this room feeling...'",

    "Complete this sentence: 'I wish I had someone with whom I could share...'",

    "If you were going to become a close friend with your partner, please share what would be important for him or her to know.",

    "Tell your partner what you like about them; be very honest this time saying things that you might not say to someone you've just met.",

    "Share with your partner an embarrassing moment in your life.",

    "When did you last cry in front of another person? By yourself?",

    "Tell your partner something that you love about them already?",

    "What if anything, is too serious to be joked about?",

    "If you were to die this evening with no opportunity to communicate with anyone, what would you most regret not having told someone? What haven't you told them yet?",

    "Your house, containing everything you own, catches fire. After saving your loved ones and pets, you have time to safely make a final dash to save any one item. What would it be? Why?",

    "Of all the people in your family, whose death would you find most disturbing? Why?",

    "Share a personal problem and ask your partner's advice on how he or she might handle it. Also, as your partner to reflect back to you how you seem to be feeling about the problem you have chosen."
];

// let questionIndex = 0;

// const questionElement = document.getElementById("question");
// const nextButton = document.getElementById("nextButton");

// function displayQuestion() {
// questionElement.textContent = questions[questionIndex];
// }

// displayQuestion();

// nextButton.addEventListener("click", () => {
// questionIndex++;

// if (questionIndex === questions.length) {
//     questionIndex = 0;
// }

// displayQuestion();
// });
  

let questionIndex = 0;

const questionElement = document.getElementById("question");
const nextButton = document.getElementById("nextButton");

function displayQuestion() {
  questionElement.textContent = questions[questionIndex];
}

function getRandomQuestions() {
  let randomQuestions = [];
  while (randomQuestions.length < 12) {
    let randomIndex = Math.floor(Math.random() * questions.length);
    if (!randomQuestions.includes(questions[randomIndex])) {
      randomQuestions.push(questions[randomIndex]);
    }
  }
  return randomQuestions;
}

const randomQuestions = getRandomQuestions();

displayQuestion();

nextButton.addEventListener("click", () => {
  questionIndex++;
  
  if (questionIndex === randomQuestions.length) {
    questionIndex = 0;
  }
  
  displayQuestion();
});
