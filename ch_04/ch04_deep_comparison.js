/*
 Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects
 with the same properties whose values are also equal when compared with a recursive call to deepEqual.

 To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties,
 you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison.
 But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".
 */

function deepEqual(val1, val2){
    if (typeof val1 == "object" && val1 != null) {
        if (typeof val2 == "object" && val2 != 2)  {

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
