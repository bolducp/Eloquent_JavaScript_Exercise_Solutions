/*
 Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument,
 and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which
 takes an element and a list and creates a new list that adds the element to the front of the input list, and nth,
 which takes a list and a number and returns the element at the given position in the list, or undefined when there
 is no such element.

 If you haven’t already, also write a recursive version of nth.
 */


function prepend(element, aList) {
    var newList = {value: element, rest: aList};
    return newList;
}


function arrayToList(anArray) {
    var theList = {value: anArray[anArray.length - 1], rest: null};
    for (var i = anArray.length -2; i >= 0; i--) {
        theList = prepend(anArray[i], theList);
    }
    return theList;
}


function nth(aList, num){
    if (num === 0) {
        return aList.value;
    } else {
        num -= 1;
        return nth(aList.rest, num);
    }
}


function listToArray(aList){
    var theArray = [], num = 0;
    for (var node = aList; node; node = node.rest) {
        theArray.push(node.value);
    }
    return theArray;
}