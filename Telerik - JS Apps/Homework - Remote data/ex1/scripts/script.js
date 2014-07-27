var resourseUrl = 'http://localhost:3000/students';
var testObj = {
	name: 'petkan',
	grade: 3
}
var ourRequest = new Request();
ourRequest.postJSON(resourseUrl, testObj);