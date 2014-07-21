define(['underscore'], function() {
    var arrNames = function(arrayOfNames) {
        var filtered = _.filter(arrayOfNames, function(index) {
            return index.fname < index.lname;
        });
        _.each(filtered, function(obj) {
            Object.defineProperty(obj, 'fullName', {
                value: obj.fname + ' ' + obj.lname
            });
        });
        return filtered;
    };
    var students = function(students) {
        var MIN_AGE = 18;
        var MAX_AGE = 24
        var studentsBetweenMinMaxAge = _.filter(students, function(student) {
            if (student.age >= MIN_AGE && student.age <= MAX_AGE) {
                return student;
            }
        });
        return studentsBetweenMinMaxAge;
    }
    var findMaxMark = function(students) {
        var maxMark = _.max(students, function(student) {
            return student.mark;
        });
        return maxMark;
    }
    var filterAnimals = function(animals) {
        var sortedItems = _.chain(animals)
            .groupBy('species')
            .sortBy('legs').value();
        return sortedItems;
    }
    var totalLegs = function(animals) {
        var legs = 0;
        _.each(animals, function(animal) {
            legs += animal.legs;
        });
        return legs;
    }
    var mostPopular = function(books) {
        var uniqueAuthor = _.chain(books).pluck('author').countBy().value();
        return uniqueAuthor;
    }
    return {
        arrNames: arrNames,
        students: students,
        maxMarks: findMaxMark,
        animalsSort: filterAnimals,
        totalLegs: totalLegs,
        mostPopularAuthor: mostPopular,
        findCommonNames: findCommonNames
    };
});
