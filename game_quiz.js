player1_name= localStorage.getItem("player1_name");
player2_name= localStorage.getItem("player2_name");

player1_score= 0;
player2_score= 0;

document.getElementById("player1_name").innerHTML= player1_name + ":";
document.getElementById("player2_name").innerHTML= player2_name + ":";

document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;

document.getElementById("player_question").innerHTML= "Question Turn- " + player1_name;
document.getElementById("player_answer").innerHTML= "Answer Turn- " + player2_name;

function send(){
    number_1= document.getElementById("word").value;
    number_2= document.getElementById("word1").value;
    question= number_1 + "x" + number_2;

    question= "<h4 id='question_display'> Q." + question + "</h4>";
    input_box= " <br> Ans: <input type='text' id='input_check_box'>";
    check_button= "<br><br> <button class='btn btn-info'onclick='check()'>Check</button>";
    row= question + input_box + check_button;

    document.getElementById("output").innerHTML= row;

    document.getElementById("word").value= "";
    document.getElementById("word1").value= "";
}

