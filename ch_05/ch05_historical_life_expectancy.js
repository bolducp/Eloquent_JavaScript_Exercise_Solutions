/*
 Compute and output the average age of the people in the ancestry data set per century.
 */

function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}


function getCentury(person){
    return Math.ceil(person.died / 100);
}


function getLifeLengthsPerCentury(familyObject){
    var lifeLengthsPerCentury = {};

    ancestry.forEach(function(person){
        var century = getCentury(person);

        if (lifeLengthsPerCentury[century]) {
            lifeLengthsPerCentury[century].push(person.died - person.born)
        }
        else {lifeLengthsPerCentury[century] = [person.died - person.born]}
    });
    return lifeLengthsPerCentury;
}


function averageLifeLengthsPerCentury(familyObject){
    var lifeLengthsPerCentury = getLifeLengthsPerCentury(familyObject);

    for (century in lifeLengthsPerCentury) {
        var avg = average(lifeLengthsPerCentury[century]);
        lifeLengthsPerCentury[century] = avg.toFixed(1);
    }
    return lifeLengthsPerCentury;
}

console.log(averageLifeLengthsPerCentury(byName));
