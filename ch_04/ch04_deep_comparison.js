/*
 Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects
 with the same properties whose values are also equal when compared with a recursive call to deepEqual.

 To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties,
 you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison.
 But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".
 */

function deepEqual2(val1, val2){
    if (typeof val1 == "object" && val1 != null) {
        if (typeof val2 == "object" && val2 != null)  {

            if (Object.keys(val1).length != Object.keys(val2).length){
                return false;
            } else {
                for (var property in val1) {
                    return deepEqual(val1[property], val2[property])
                }
            }
        }
        else { return false }

    } else { return val1 === val2; }

    return true;
}


// refactored:

function deepEqual(val1, val2){

  if (areBothObjs(val1, val2)){
    if (Object.keys(val1).length !== Object.keys(val2).length){
      return false;
    } else {
        for (var property in val1) {
          return deepEqual(val1[property], val2[property])
        }
      }
  } else {
    return val1 === val2;
  }
}


function areBothObjs(val1, val2) {
  return typeof val1 == "object" && val1 != null && typeof val2 == "object" && val2 != null;
}



var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
