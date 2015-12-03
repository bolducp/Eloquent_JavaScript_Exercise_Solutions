/* Write a function countBs that takes a string as its only argument and returns a number that indicates how many
uppercase “B” characters are in the string.

 Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates
 the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to
 make use of this new function. */


function countBs(aString){
    var totalBs = 0;
    for (i=0; i < aString.length; i++)
        if (aString.charAt(i) == "B")
            totalBs += 1;
    return totalBs;
}


function countChar(aString, countChar){
    var totalCountChars = 0;
    for (i=0; i < aString.length; i++)
        if (aString.charAt(i) == countChar)
            totalCountChars += 1;
    return totalCountChars;
}