const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  { 
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];

var i
const start = document.querySelector('#startquiz')
const questionpanel = document.querySelector('main')
start.addEventListener('click',function(){
    questionpanel.innerHTML = ''
    var questH = document.createElement('h3')
    var quest = document.createTextNode(questions[0].questionText)
    questH.appendChild(quest)
    var optionsList = document.createElement('ul')
    questionpanel.appendChild(questH)
        for(i=0; i<4; i++){
        // var options = document.createTextNode(questions[0].options[i])
         var opt = document.createElement('li')
         var optval = document.createTextNode(questions[0].options[i])
         opt.appendChild(optval)
         optionsList.appendChild(opt)
        }
    const divider = document.createElement('hr')
    questionpanel.appendChild(optionsList)
    questionpanel.appendChild(divider)
    const options = document.querySelector('ul')
    var output = document.createElement('h4')
      options.addEventListener('click',function(e){
          if(e.target.innerText == questions[0].answer)
          {
            output.innerText = 'Correct'
            output.style.color = "green"
            output.style.textAlign = "center"
          }
          else{
            output.innerText = 'Wrong'
            output.style.color = "red"
            output.style.textAlign = "center"
          }
          questionpanel.appendChild(output)
      })
       
})

