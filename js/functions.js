'use strict'

// Moving all my js to one file, and wrapping it all in fucntions to be called in various places in the html

function promptForUserName() {
    var userName = prompt("Hello, what is your name?", "Name");

    if(userName === null || userName === "")
        document.write('<h2>Well then, you shall henceforth and forevermore be known as "Bob", welcome to Earth.</h2>');
    else {
        if(userName === "Name") {
            var c = confirm('Are you sure your name is really "Name"?');
            if(c)
                document.write("<h2>What an interesting name you have, Name!</h2>");
            else
                document.write("<h2>Hack the planet!</h2>");
        } else if(userName === 'Mark' || userName === 'mark')
            document.write("<h2>Hello Creator "+userName+"!</h2>");
        else
             document.write("<h2>Hello there "+userName+"!</h2>");
    }
}

function printRandomPieceAndMove(piece, move) {
    document.write("<h2>Piece of the day: The "+piece+". </br>"+move+"</h2>");
}

function getRandomPieceAndMove() {
    var idx = Math.floor(Math.random() * 6);
    var pieces = 
        ["pawn",
            "A pawn may only move forward to an unoccupied space, or diagonally to overtake an opponent piece. See also: en passant",
        "king",
            "The king is the most important piece in your army, when he is checkmated you lose. A king may move a single space in any direction, so long as they are not moving into check. See also: kingside, queenside",
        "queen",
            "The queen is the most powerful piece in your army, she may move as many spaces in straight line horizontally, vertically, or even diagonally. She may not move through any other pieces, but may replace an opponent's piece at their position.",
        "bishop",
            "The bishop moves similarly to the queen, but only diagonally rather than horizontally or vertically.",
        "rook",
            "The rook moves similarly to the queen, but only horizontally and vertically rather than diagonally.",
        "knight",
            "The knight is a very versatile piece, and may move in an L shape and even can jump over your own units!",
        ];
    

    // print piece and also the move
    printRandomPieceAndMove(pieces[idx*2], pieces[idx*2+1]);
}

/* random integer 0-max, from w3schools.com */
// this function is to be used by random_colour(), for the rgb() parameters
function rand_number(max) {
    return Math.floor(Math.random() * max);
}

/* set the background-colour style of element with id "colour_button" to a random rbg value */
function random_color() {
    var red   = rand_number(255);
    var green = rand_number(255);
    var blue  = rand_number(255);

    document.getElementById('color_button').setAttribute("style", "background-color: rgb(" +red+ "," +green+ "," +blue+ ")");
}