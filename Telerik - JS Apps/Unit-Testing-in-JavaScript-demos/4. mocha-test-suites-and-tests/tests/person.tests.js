(function() {
    describe('#Person', function() {
        it('Test with empty firstname and lastname', function() {
            var person = new Person('', '');
            expect(person.firstname()).to.not.be.null;
            expect(person.lastname()).to.not.be.null;
        })
    });
})();
