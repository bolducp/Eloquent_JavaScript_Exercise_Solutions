/* Chess board

 Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
 At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

 Passing this string to console.log should show something like this:

 # # # #
 # # # #
 # # # #
 # # # #
 # # # #
 # # # #
 # # # #
 # # # #

 When you have a program that generates this pattern, define a variable size = 8 and change the program
 so that it works for any size, outputting a grid of the given width and height. */


function chessBoard(rowLength) {
    var boardString = "";

    for (row=0; row<rowLength; row++) {
        for (i=0; i<rowLength; i++){
            if (i % rowLength == 0)
                boardString += "\n"
            if ((row % 2 == 0 && i % 2 == 0) || (row % 2 != 0 && i % 2 != 0))
                boardString += "#"
            else
                boardString += " "
        }
    }
    return boardString;
}

chessBoard(5);