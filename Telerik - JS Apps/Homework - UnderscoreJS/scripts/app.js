(function() {
    require.config({
        paths: {
            'underscore': 'libs/underscore',
            'exercises': 'exercises/exercises'
        }
    });
    require(['underscore', 'exercises'], function(_, exercises) {
        //Exercise 1 Starts here
        var firstNameBeforeLastName = exercises.arrNames([{
            fname: 'Pesho',
            lname: 'Georgiev'
        }, {
            fname: 'Mariika',
            lname: 'Stefanova'
        }, {
            fname: 'Dragan',
            lname: 'Ivanski'
        }, {
            fname: 'Posleden',
            lname: 'NeSushtestvuvasht'
        }, {
            fname: 'Asen',
            lname: 'Bonaka'
        }]);

        //Exercise 2 Starts here
        var allStudentsBetweenAge = exercises.students([{
            fname: 'Nekuv',
            lname: 'Bot',
            age: 19
        }, {
            fname: 'Drug',
            lname: 'Pichaga',
            age: 101
        }, {
            fname: 'Georgi',
            lname: 'Gogov',
            age: 23
        }, {
            fname: 'Mitio',
            lname: 'Pishtova',
            age: 5
        }]);

        //Exercise 3 starts here
        var maxMarks = exercises.maxMarks([{
            fname: 'Stefan',
            lname: 'Georgiev',
            mark: 41
        }, {
            fname: 'Sexy',
            lname: 'Monito',
            mark: 96
        }, {
            fname: 'Kom6iikata',
            lname: 'Otgore',
            mark: 98
        }, {
            fname: 'Zapalen',
            lname: 'Levskar',
            mark: 15
        }, {
            fname: 'Barcelona',
            lname: 'Argentina',
            mark: 100
        }]);

        //Exercise 4 starts here
        var animals = exercises.animalsSort([{
            name: 'Snake',
            species: 'reptiles',
            legs: 3
        }, {
            name: 'dolphin',
            species: 'water',
            legs: 0
        }, {
            name: 'lizard',
            species: 'reptiles',
            legs: 6
        }, {
            name: 'leopard',
            species: 'land',
            legs: 4
        }, {
            name: 'shark',
            species: 'water',
            legs: 1 //Only for sort function :D
                //Too many animals
        }]);

        //Exercise 5 starts here
        var animalsLegs = exercises.totalLegs([{
            name: 'Snake',
            species: 'reptiles',
            legs: 2
        }, {
            name: 'dolphin',
            species: 'water',
            legs: 4
        }, {
            name: 'lizard',
            species: 'reptiles',
            legs: 6
        }, {
            name: 'leopard',
            species: 'land',
            legs: 8
        }, {
            name: 'shark',
            species: 'water',
            legs: 100
        }]);

        //Exercise 6 starts here
        var books = exercises.mostPopularAuthor([{
            name: 'Под игото',
            author: 'Иван Вазов'
        }, {
            name: 'Крадецът на праскови',
            author: 'Емилиян Станев'
        }, {
            name: 'Немили-Недраги',
            author: 'Иван Вазов'
        }, {
            name: 'Повести',
            author: 'Иван Вазов'
        }]);

        //Exercise 7 starts here

        // var people = exercises.findCommonNames([{
        //     fname: 'gosho',
        //     lname: 'stefanski'
        // }, {
        //     fname: 'deshov',
        //     lname: 'pishtov'
        // }, {
        //     fname: 'peshov',
        //     lname: 'stefanski'
        // }, {
        //     fname: 'gosho',
        //     lname: 'pishtov'
        // }]);

        //Logs results
        console.log(firstNameBeforeLastName);
        console.log(allStudentsBetweenAge);
        console.log(maxMarks);
        console.log(animals);
        console.log('LEGS -> ' + animalsLegs);
        console.log(books);
    })
})();