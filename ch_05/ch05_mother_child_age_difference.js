/*
 Using the example data set from this chapter, compute the average age difference between mothers and children (the age
  of the mother when the child is born). You can use the average function defined earlier in this chapter.
 */


function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}


var byName = {};
ancestry.forEach(function(person) {
    byName[person.name] = person;
});


function getAverageMotherAge(familyObject){
    var ages = [];

    ancestry.forEach(function(person){
        if (familyObject[person.mother]) {
            var mother = familyObject[person.mother];
            ages.push(mother.died - mother.born);}
    });
    return Math.round(average(ages), 2);
};


console.log(getAverageMotherAge(byName));