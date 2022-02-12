//Question bank
var questionBank= [
    {
        question : 'How is COVID-19 passed on?',
        option : ['Through droplets that come from your mouth and nose ',' In sexual fluids, including semen, vaginal fluids or anal mucous','By drinking unclean water','All of the above'],
        answer : 'Through droplets that come from your mouth and nose '
    },
    {
        question : 'What are the common symptoms of COVID-19? ',
        option : ['A new and continuous cough ','Fever ',' Tiredness ','All of the above'],
        answer : 'All of the above'
    },
    {
        question : 'Can you always tell if someone has COVID-19? ',
        option : ['No – not everyone with COVID-19 has symptoms','Yes – a person with COVID-19 coughs a lot ','Yes – you can tell just by where a person comes from, their race and ethnicity ','yes may be '],
        answer : 'No – not everyone with COVID-19 has symptoms'
    },
    {
        question : 'Can washing your hands protect you from COVID-19?',
        option : ['Yes – but only if you use a strong bleach','Yes – normal soap and water or hand sanitizer is enough','may be  ','No – Washing your hands doesn’t stop COVID-19'],
        answer : 'Yes – normal soap and water or hand sanitizer is enough'
    },
    {
        question : 'When should fabric face masks be worn?',
        option : ['On public transport','In confined or crowded spaces','In small shops ','All of the above'],
        answer : 'All of the above'
    },
    {
        question :'Can COVID-19 be cured?',
        option : ['Yes – Hot drinks can cure COVID-19','No – COVID-19 is a death sentence','No – but most people get better by themselves',' may be '],
        answer : 'No – but most people get better by themselves'
    },
    {
        question : 'When should fabric face masks be worn?',
        option : ['On public transport','In confined or crowded spaces','In small shops ','All of the above'],
        answer : 'All of the above'
    },
    {
        question :'Which of the following is an example of physical distancing? ',
        option : ['You stop going to crowded places and visiting other people’s houses','You stop talking to the people you live with','You stop speaking to your friends on the phone',' not to anything'],
        answer : 'You stop going to crowded places and visiting other people’s houses'
    },
    {
        question :'How can people living with HIV protect themselves from COVID-19?',
        option : ['Wash their hands regularly and follow the physical distancing advice','Keep taking their antiretroviral treatment','Exercise regularly, eat well and look after their mental health','All of the above'],
        answer : 'All of the above'
    },
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'limegreen';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();
