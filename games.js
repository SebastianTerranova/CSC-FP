function craps() {
        //troubleshooting craps() has started
        console.log("Craps() started");

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

        //outputs dice results for troubleshooting
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

function slots() {
    //Troubleshooting to see if slots() function started
    console.log("slots() started");

    //variables to store slot results
    var slot1 = 0;
    var slot2 = 0;
    var slot3 = 0;

    //makes all the slot images transparent
    //slot1
    document.getElementById("cherry1").style.opacity = 0;
    document.getElementById("orange1").style.opacity = 0;
    document.getElementById("strawberry1").style.opacity = 0;
    //slot2
    document.getElementById("cherry2").style.opacity = 0;
    document.getElementById("orange2").style.opacity = 0;
    document.getElementById("strawberry2").style.opacity = 0;
    //slot3
    document.getElementById("cherry3").style.opacity = 0;
    document.getElementById("orange3").style.opacity = 0;
    document.getElementById("strawberry3").style.opacity = 0;

    //rolling the slot
    slot1 = Math.ceil(3*Math.random());
    slot2 = Math.ceil(3*Math.random());
    slot3 = Math.ceil(3*Math.random());

    //outputs dice results for troubleshooting
    console.log(slot1);
    console.log(slot2);
    console.log(slot3);

    //changes the opacity of the dice that was rolled so that it is visible
    //slot1
    if (slot1 == 1){
        document.getElementById("cherry1").style.opacity = 1;
    } else if (slot1 ==2){
        document.getElementById("orange1").style.opacity = 1;
    } else if (slot1 ==3){
        document.getElementById("strawberry1").style.opacity = 1;
    }
    //slot2
    if (slot2 == 1){
        document.getElementById("cherry2").style.opacity = 1;
    } else if (slot2 ==2){
        document.getElementById("orange2").style.opacity = 1;
    } else if (slot2 ==3){
        document.getElementById("strawberry2").style.opacity = 1;
    }
    //slot3
    if (slot3 == 1){
        document.getElementById("cherry3").style.opacity = 1;
    } else if (slot3 ==2){
        document.getElementById("orange3").style.opacity = 1;
    } else if (slot3 ==3){
        document.getElementById("strawberry3").style.opacity = 1;
    }

    if(slot1 == 1 && slot2 == 1 && slot3 == 1){
        console.log("Cherry Win");
        document.getElementById("gameRes").innerHTML = "Cherry Win";
    } else if(slot1 == 2 && slot2 == 2 && slot3 == 2){
        console.log("Orange Win");
        document.getElementById("gameRes").innerHTML = "Orange Win";
    } else if(slot1 == 3 && slot2 == 3 && slot3 == 3){
        console.log("Strawberry Win");
        document.getElementById("gameRes").innerHTML = "Strawberry Win";
    } else {
        console.log("You Lose!");
        document.getElementById("gameRes").innerHTML = "You Lose!";
    }
}

//Decided to leave out blackjack for this project, needs too much Javascript.
//The attempt at doing Blackjack, got stuck with having to have the player input whether they want a hit or not. 
//Was able to give player and dealer initial cards in arrays and calculate points of starting cards

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
    //checks if the text is transparent when button is pressed if it is transparent makes it not transparent and vice versa
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