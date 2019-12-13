




//Question format Arrays
const questions = [
    {
      title: "Who is the strongest Smash Bro?:",
      choices: ["Waluigi", "Pichu", "Jigglypuff", "King D"],
      answer: "King D"
    },
    {
      title: "Who is the villain in Animal Crossing?",
      choices: ["Tom Nook", "The Human", "Resetti", "Isabelle"],
      answer: "The Human"
    },
    ///etc.
  ];
  //Place to store output
function Buildquiz(){
  const output = [];

  questions.forEach((currentQuestion,titleNumber) => {
    //store the answer choices
    const correctanswers = [];
    for (letter in currentQuestion.correctanswers) {
      correctanswers.push(
        <label>
          <input type = 'radio' name = 'question${questionNumber}'
          value = '${letter}'></input>
            ${letter} : ${currentQuestion.correctanswers[letter]}
        </label>
      );
    }
    quizContainer.innerHTML = output.join('');
  });
  function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.correctAnswers');
    let NumCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
      
    })
  }













//   //Store the total number of questions
// var totalQuestions = $('.questions').size();

// //Set the current question to display to 1
// var currentQuestion = 0;

// //Store the selector in a variable.
// //It is good practice to prefix jQuery selector variables with a $
// $questions = $('.questions');

// //Hide all the questions
// $questions.hide();

// //Show the first question
// $($questions.get(currentQuestion)).fadeIn();

// //attach a click listener to the HTML element with the id of 'next'
// $('#next').click(function () {

//      //fade out the current question,
//      //putting a function inside of fadeOut calls that function 
//      //immediately after fadeOut is completed, 
//      //this is for a smoother transition animation
//      $($questions.get(currentQuestion)).fadeOut(function () {

//         //increment the current question by one
//         currentQuestion = currentQuestion + 1;

//         //if there are no more questions do stuff
//         if (currentQuestion == totalQuestions) {

//             var result = sum_values()

//             //do stuff with the result
//             alert(result);

//         } else {

//             //otherwise show the next question
//             $($questions.get(currentQuestion)).fadeIn();

//         }
//     });

// });