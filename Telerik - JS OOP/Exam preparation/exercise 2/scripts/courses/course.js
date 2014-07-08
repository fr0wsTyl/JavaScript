define(['courses/student'], function(Student) {
    var Course;
    Course = (function() {
        function Course(title, formula) {
           	this.title = title;
           	this.formula = formula;
           	this.students = [];
           	this.examResult = [];
        }
        Course.prototype.addStudent = function(student) {
        	this.students.push(student);
        }
        Course.prototype.calculateResults = function () {
        	for (var i = 0; i < this.students.length; i++) {
        		this.examResult.push(this.students[i]);
        	};
        	console.log(this.examResult);
        }
        Course.prototype.getTopStudentsByExam = function (count) {
        	this.examResult.sort(function (first, second) {
        		return second.exam - first.exam;
        	});
        	console.log(this.examResult[3]);
        	// console.log(this.examResult);
        }
        Course.prototype.getTopStudentsByTotalScore = function  (number) {
        	
        }
        return Course;
    }());
    return Course;
});
