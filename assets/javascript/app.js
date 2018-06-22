var game = {
    "questionsRight": 0,
    "questionsWrong": 0,
}

function questionMaker(question, select1, select2, key) {
    this.question = question;
    this.select1 = select1;
    this.select2 = select2;
    this.key = key;
}
var question1 = new questionMaker("HTML stands for Hypertext markup language", true, false, 0);
var question2 = new questionMaker("CSS stands for crazy style sheets", false, true, 1);
var question3 = new questionMaker("Javascript is a langauge used to handle logic aswell as other things", true, false, 2);
var question4 = new questionMaker("We use HubGit to host our repositories", false, true, 3);

var objArray = [question1, question2, question3, question4];

function populateQuestions(objArray) {
    for (i = 0; i < objArray.length; i++) {
        var containingDiv = $("<div>");
        containingDiv.attr("id", [i]);

        var questionDiv = $("<h3>");
        questionDiv.text(objArray[i].question);

        var choice1 = $("<button>");
        choice1.text(objArray[i].select1);
        choice1.attr("class", "selectionButton")

        var choice2 = $("<button>");
        choice2.text(objArray[i].select2);
        choice2.attr("class", "selectionButton")


        $(containingDiv).append(questionDiv, choice1, choice2);

        $(".underQuestions").prepend(containingDiv);
    }
}
populateQuestions(objArray);


$(".selectionButton").on("click", function (event) {
    var guessValue = event.currentTarget.innerHTML;
    var parentID = event.currentTarget.parentNode.id
    if (parentID == 0) {
        if (JSON.stringify(objArray[parentID].select1) == guessValue) {
        game.questionsRight +=1;
        } else if (JSON.stringify(objArray[parentID].select2) == guessValue) {
            game.questionsWrong +=1;            
        }
    } else if (parentID == 1) {
        if (JSON.stringify(objArray[parentID].select1) == guessValue) {
            game.questionsRight += 1;
            
        } else if (JSON.stringify(objArray[parentID].select2) == guessValue) {
            game.questionsWrong += 1;            
        }
    } else if (parentID == 2) {
        if (JSON.stringify(objArray[parentID].select1) == guessValue) {
            game.questionsRight += 1;            
        } else if (JSON.stringify(objArray[parentID].select2) == guessValue) {
            game.questionsWrong += 1;
        }
    } else if (parentID == 3) {
        if (JSON.stringify(objArray[parentID].select1) == guessValue) {
            game.questionsRight += 1;            
        } else if (JSON.stringify(objArray[parentID].select2) == guessValue) {
            game.questionsWrong+=1;
        }
    }

});

$("#submitAnswers").on("click", function () {
    submitFinal();
});
var count = 50,
    timer = setInterval(function () {
        $("#timeLeft").html(count--);
        if (count == 0) submitFinal();
    }, 1000);



function submitFinal() {
    clearInterval(timer);
    var questionContainer = $("<div>");
    questionContainer.addClass("row");
    var questionsRightDiv = $("<h2>");
    questionsRightDiv.addClass("col-sm-6", "centerText");
    questionsRightDiv.text("Youve got " + game.questionsRight + " questions right!");
    var questionsWrongDiv = $("<h2>");
    questionsWrongDiv.addClass("col-sm-6", "centerText");
    questionsWrongDiv.text("Youve got " + game.questionsWrong + " questions wrong :(");
    $("#resetButton").attr("class", "displayButton");
    questionContainer.append(questionsRightDiv, questionsWrongDiv);
    // $(".underQuestions").attr("class", "displayNone")

    $(".marginBottom").html(questionContainer)

}

// $("#resetButton").on("click", function () {
//     $(".displayNone").attr("class","underQuestions");
        // ran out of time to implement a restart button
// })