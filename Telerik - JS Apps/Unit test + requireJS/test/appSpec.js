define(['chai', '../src/app'], function (chai, UserSession) {
    var assert = chai.assert;
 
    describe('session', function () {
        describe('session', function () {
            it('asd', function () {
                var session = new UserSession('pavel');
                assert.equal('pavel', session.login());
            })
        })
    });
});