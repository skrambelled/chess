'use strict'

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

document.write("<h2>Piece of the day: The "+pieces[idx]+". </br>");
document.write(pieces[idx+1]+"</h2>");