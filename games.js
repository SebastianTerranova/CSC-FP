function craps() {
        //troubleshooting playCraps() has started
        console.log("playCraps() started");

        //variables to store dice results
        var die1 = 0;
        var die2 = 0;

        //makes all the dice images transparent
        //dice1
        document.getElementById("dice1.1").style.opacity = 0;
        document.getElementById("dice1.2").style.opacity = 0;
        document.getElementById("dice1.3").style.opacity = 0;
        document.getElementById("dice1.4").style.opacity = 0;
        document.getElementById("dice1.5").style.opacity = 0;
        document.getElementById("dice1.6").style.opacity = 0;
        //dice2
        document.getElementById("dice2.1").style.opacity = 0;
        document.getElementById("dice2.2").style.opacity = 0;
        document.getElementById("dice2.3").style.opacity = 0;
        document.getElementById("dice2.4").style.opacity = 0;
        document.getElementById("dice2.5").style.opacity = 0;
        document.getElementById("dice2.6").style.opacity = 0;

        //rolling the dice
        die1 = Math.ceil(6*Math.random());
        die2 = Math.ceil(6*Math.random());
    
        //variable to hold sum to check if player wins/loses
        var sum = die1 + die2;

        //outputs dice results for trouble shooting
        console.log(die1);
        console.log(die2);
    
        //changes the opacity of the dice that was rolled so that it is visible
        //dice1
        if (die1 == 1){
            document.getElementById("dice1.1").style.opacity = 1;
        } else if (die1 ==2){
            document.getElementById("dice1.2").style.opacity = 1;
        } else if (die1 ==3){
            document.getElementById("dice1.3").style.opacity = 1;
        } else if (die1 ==4){
            document.getElementById("dice1.4").style.opacity = 1;
        } else if (die1 ==5){
            document.getElementById("dice1.5").style.opacity = 1;
        } else if (die1 ==6){
            document.getElementById("dice1.6").style.opacity = 1;
        }
        //dice2
        if (die2 == 1){
            document.getElementById("dice2.1").style.opacity = 1;
        } else if (die2 ==2){
            document.getElementById("dice2.2").style.opacity = 1;
        } else if (die2 ==3){
            document.getElementById("dice2.3").style.opacity = 1;
        } else if (die2 ==4){
            document.getElementById("dice2.4").style.opacity = 1;
        } else if (die2 ==5){
            document.getElementById("dice2.5").style.opacity = 1;
        } else if (die2 ==6){
            document.getElementById("dice2.6").style.opacity = 1;
        }

        //check if craps
        //check if win
        //check if tie
        if (sum == 7 || sum == 11){
            console.log("you lose");
            document.getElementById("gameRes").innerHTML = "You Lost.";
        } else if (die1%2 == 0 && die1 == die2){
            console.log("you win");
            document.getElementById("gameRes").innerHTML = "You win!";
        } else {
            console.log("you tie");
            document.getElementById("gameRes").innerHTML = "You Tied.";
        }
}

//The attempt at doing Blackjack, got stuck with having to have the player input whether they want a hit or not.
/*function playBlackjack() {
    //troubleshooting playBlackjack() has started
    console.log("playBlackjack() started");

    //arrays to hold cards
    Dcards = [];
    Dpoints = [];
    Pcards = [];
    Ppoints = [];

    //variables for card point totals
    Dsum = 0;
    Psum = 0;

    //Determines the dealer's starting cards
    Dcards[0] = Math.ceil(13*Math.random());
    Dcards[1] = Math.ceil(13*Math.random());

    //Changes certain numbers into specialty cards and adds values to sum
    if (Dcards[0] == 1){
        Dcards[0] = "Ace";
        Dsum = Dsum + 11;
    } else if (Dcards[0] == 11) {
        Dcards[0] = "Jack";
        Dsum = Dsum + 10;
    } else if (Dcards[0] == 12) {
        Dcards[0] = "Queen";
        Dsum = Dsum + 10;
    } else if (Dcards[0] == 13) {
        Dcards[0] = "King";
        Dsum = Dsum + 10;
    } else {
        Dsum = Dsum + Dcards[0];
    }

    if (Dcards[1] == 1){
        Dcards[1] = "Ace";
        Dsum = Dsum + 11;
        if (Dsum >= 22){
            Dsum = Dsum - 10;
        }
    } else if (Dcards[1] == 11) {
        Dcards[1] = "Jack";
        Dsum = Dsum + 10;
    } else if (Dcards[1] == 12) {
        Dcards[1] = "Queen";
        Dsum = Dsum + 10;
    } else if (Dcards[1] == 13) {
        Dcards[1] = "King";
        Dsum = Dsum + 10;
    } else {
        Dsum = Dsum + Dcards[1];
    }
    console.log(Dcards);
    console.log(Dsum);
}*/

function howto() {

    if (document.getElementById("howtoTitle").style.opacity == 0) {
        document.getElementById("howtoTitle").style.opacity = 1;
        document.getElementById("explainButton").innerHTML = "Hide Explanation";
    } else if (document.getElementById("howtoTitle").style.opacity == 1){
        document.getElementById("howtoTitle").style.opacity = 0;
        document.getElementById("explainButton").innerHTML = "Show Explanation";
    }

    if (document.getElementById("howtoText").style.opacity == 0) {
        document.getElementById("howtoText").style.opacity = 1;
    } else if (document.getElementById("howtoText").style.opacity == 1){
        document.getElementById("howtoText").style.opacity = 0;
    }

    }