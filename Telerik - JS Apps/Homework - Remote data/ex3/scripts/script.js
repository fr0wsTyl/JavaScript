(function() {
    var $add = $('#add-new-student'), //add listener
        $listStudents = $('#return-all-students'), //add listener
        $deleteStudentById = $('#delete-student'), //add listener
        $studentName = $('#student-name'),
        $studentGrade = $('#student-grade'),
        $studentId = $('#student-id'),
        $addStudentError = $('#error-add-student'),
        $visualizeStudents = $('#visualize-students'),
        $listStudentError = $('#list-students-error'),
        $deleteStudentError = $('#error-delete-student'),
        $append = $('#append'),
        resourseUrl = 'http://localhost:3000/students';
    $add.on('click', function() {
        if (($studentName.val() !== '') && ($studentGrade.val() !== '')) {
            $.post(resourseUrl, {
                name: $studentName.val(),
                grade: parseInt($studentGrade.val())
            })
                .then(function success() {
                    $addStudentError.html('Success added :)').css('color', 'green');
                });
        } else {
            $addStudentError.html('Invalid data');
        }
    });
    $listStudents.on('click', function() {
        $.getJSON(resourseUrl, function(data) {
            $.each(data.students, function(i, item) {
                if (item.id === undefined || item.name === undefined || item.grade === undefined) {}
                $append.append('<li>' + 'ID -> ' + item.id + ' Name -> ' + item.name + ' Grade -> ' + item.grade + '</li>')
            });
        })
    })
    $deleteStudentById.on('click', function() {
        if ($studentId.val() !== '') {
            $.ajax({
                url: 'http://localhost:3000/students/' + $studentId.val() + '/',
                type: 'post',
                data: {
                    _method: 'delete'
                }
            })
                .then(function success() {
                    $deleteStudentError.html('Student deleted successfully').css('color', 'green');
                }, function error(err) {
                    $deleteStudentError.html('Error ' + err.message);
                })
        } else {
            $deleteStudentError.html('Invalid data');
        }

    })
}).call(this);
