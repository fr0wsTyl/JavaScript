define(['courses/student'], function(Course) {
    var Student;
    Student = (function() {
    	//Hidden date here..
        function ourStudent(specification) {
        	this.name = specification.name;
        	this.exam = specification.exam;
        	this.homework = specification.homework;
        	this.attendance = specification.attendance;
        	this.teamwork = specification.teamwork;
        	this.bonus = specification.bonus;
        }
        return ourStudent;
    }());
    return Student;
});
