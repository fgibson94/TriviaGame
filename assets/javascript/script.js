$(document).ready(function () {

    console.log("hello")
    //timer set for x sec
    var number = 31;

    var intervalId;

    //question 1,2,3 with correct answer marked
    // var q1 = false;
    // var q2 = true;
    // var q3 = true;
    //Result variables

    var Right = 0;
    var Wrong = 0;

    var Results = "Questions Right:" + Right + "<br> Questions Wrong:" + Wrong;
    //Game Functions//
    $("#submitbutton").click( function () {
            outOfTime();
            return false;
        })

    function run() {
        clearInterval(intervalId)
        intervalId = setInterval(countDown, 1000)
    }

    function countDown() {

        number--;
        $("#timer").html("Time Left: " + number)

        if (number === 0) {
            outOfTime();
        }
    }

    function outOfTime() {
        clearInterval(intervalId);
        console.log("Time's Up");
        gradeQuiz();

    };

    quizAnswers = {
        q1: false,
        q2: true,
        q3: true
    }
//Takes the value of the submitted form and comapares to object with answers
    function gradeQuiz(q) { //submitform after times up
            if(q == "q1"){
              var submitted = $('input[name=q1]').val();
              if (submitted == quizAnswers.q1){
                Right++;
              }
              else{
                  Wrong++;
              }
            }
              
            if(q == "q2"){
              var submitted = $('input[name=q2]').val();
              if (submitted == quizAnswers.q2){
                Right++;
              }
              else{
                  Wrong++;
              }
            }
              
            if(q == "q3"){
              var submitted = $('input[name=q3]').val();
              if (submitted == quizAnswers.q3){
                Right++;
              }
              else{
                  Wrong++;
              }
            }
            
          quizResults();
          return false;
          }

        // var input = document.getElementsByTagName("input").value;
        // console.log(input)
        // //q1 if #question1 ===false add to right
        // if ( input ==="False") {
        //     Right++;
        // }
        // else {
        //     Wrong++;
        // }
        // //q2 if #question2 ===true add to right
        // if ( input==="True") {
        //     Right++;
        // }
        // else {
        //     Wrong++;
        // }
        // //q3 if #question1 ===true add to right
        // if ( input==="True") {
        //     Right++;
        // }
        // else {
        //     Wrong++;
        // }
        // //else add to wrong
        // quizResults();


    //page showing results of quiz. html
    function quizResults() {
        console.log(Results);

        //show questions right
        //show questions wrong
        $("#form").append(Results)


    };

    // console.log(run);
    // console.log(gradeQuiz);
    // console.log(quizResults);

    //Play Functions//
    run();
});
