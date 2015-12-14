/*
 For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array
 as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace,
 does what the reverse method does: it modifies the array given as argument in order to reverse its elements.
 Neither may use the standard reverse method.
 */

function reverseArray(anArray) {
    var newArray = [];

    for (var i=0; i < anArray.length; i++){
        newArray.unshift(anArray[i]);
    }
    return newArray;
}


function reverseArrayInPlace(anArray) {
    for (var i=0; i < Math.floor(anArray.length / 2); i++) {
        var numToSwap = anArray[i];
        anArray[i] = anArray[anArray.length - 1 - i];
        anArray[anArray.length - 1 - i] = numToSwap;
    }
    return anArray;
}